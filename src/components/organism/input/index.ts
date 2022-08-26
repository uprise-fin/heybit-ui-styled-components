import {Base} from '@/components/base';
import {getElement} from '@/utils';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbInputEvent, HbInputType} from './type';

/**
 * An example element.
 *
 * @fires event 값이 변경될때 발생
 * @property value 기본 값
 * @property attributeSync true 시 value값이 arrtibute 싱크됨
 * @property placeholder
 * @property decimal 소수점
 * @property comma 콤마
 * @property maxlength 최대글자수
 * @property type 텍스트 숫자 비번
 * @property error 텍스트 숫자 비번
 * @slot slot--left - optional, 왼쪽 영역(아이콘)
 * @slot slot--right - optional, 오른쪽 영역(버튼)
 * @csspart slot--left
 * @csspart border
 * @csspart slot--right
 */

@customElement('hb-input')
export class HbInput extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  _value = '';

  inputEl?: HTMLInputElement;

  attributeSync = false;

  placeholder = '';

  #error = false;

  decimal: number = 2;

  comma: number = 3;

  _readonly: boolean = false;

  maxlength?: number;

  type: HbInputType = HbInputType.text;

  get readonly() {
    return this._readonly;
  }

  set readonly(value: boolean) {
    this._readonly = value;
    if (value) this.setAttribute('data-readonly', '');
    else this.removeAttribute('data-readonly');
  }

  get error() {
    return this.#error;
  }

  set error(value: boolean) {
    this.#error = value;
    if (value) this.setAttribute('data-error', '');
    else this.removeAttribute('data-error');
  }

  static get properties() {
    return {
      value: {type: String, Reflect: true},
      attributeSync: {type: Boolean, Reflect: true},
      type: {type: String, Reflect: true},
      placeholder: {type: String, Reflect: true},
      maxlength: {type: Number, Reflect: true},
      comma: {type: Number, Reflect: true},
      decimal: {type: Number, Reflect: true},
      error: {type: Boolean, Reflect: true},
      readonly: {type: Boolean, Reflect: true},
      _readonly: {type: Boolean, Reflect: true},
    };
  }

  get pattern() {
    if (this.type === 'number') return '[0-9]*';
    return null;
  }

  get isType() {
    if (this.type === HbInputType.number) return HbInputType.text;
    return this.type;
  }

  set value(value: string) {
    if (this.type === HbInputType.number) {
      this._value = this.toNumeric(value);
    } else {
      this._value = value;
    }
  }

  get value() {
    return this._value;
  }

  get originalValue() {
    if (this.type === HbInputType.number)
      return this.toNumeric(this._value, true);
    return this._value;
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-input__slot"></slot>
      <input
        id="input"
        data-readonly=${this.readonly}
        class="hb-input__el"
        part="input"
        pattern=${this.pattern}
        @input=${this.onInput}
        type=${this.isType}
        placeholder=${this.placeholder}
        ?readonly=${this._readonly}
      />
      <i class="hb-input__border" part="border"></i>
      <slot name="slot--right" part="slot--right" class="hb-input__slot"></slot>
    `;
  }

  onInput(ev: HbInputEvent) {
    const inputEl = this.inputEl;
    let {value} = inputEl;
    if (this.type === HbInputType.number) {
      //숫자만 입력받도록 값 변경
      const {data} = ev;
      const ableData = Array(10)
        .fill('')
        .map((_, i) => i + '')
        .concat('.');
      if (data !== null && !ableData.includes(data)) inputEl.value = this.value;
      else inputEl.value = this.toNumeric(value);
      value = inputEl.value;
    }

    if (this.maxlength > 0) {
      // 최대글자수 이하로 입력 받도록 값 변경
      let length = value.length;
      if (this.type === HbInputType.number)
        length =
          inputEl.value.length -
          (inputEl.value.length - this.toNumeric(inputEl.value, true).length);
      if (length > this.maxlength)
        return (inputEl.value = inputEl.value.substring(0, this.maxlength));
    }
    // 인풋에 입력 시 attribute 체인지에 안 태우는 이유는 체인지 이벤트가 발생 안하기 때문입니다.
    // 유저가, 혹은 시스템이 값을 바꿀땐 체인지가 발생 안하는게 맞고 유저가 입력 시 체인지 이벤트를 받아야하니까요.
    if (this.value !== value) this.onChange();
  }

  toNumeric(value: string, toNumber: boolean = false) {
    if (!value || typeof value !== 'string') return '';

    const dotIndex = value.indexOf('.');
    const hasDot = dotIndex > 0;
    let decimal = '';
    if (hasDot) {
      decimal = value.substring(dotIndex + 1, dotIndex + 1 + this.decimal);
      value = value.substring(0, dotIndex);
    }
    value = value.replace(/[^0-9]/gi, '');

    if (!toNumber) {
      const req = new RegExp(`\\B(?=(\\d{${this.comma}})+(?!\\d))`, 'g');
      value = value.replace(req, ',');
    }
    return value + `${hasDot ? '.' : ''}${decimal.replace(/[^0-9]/gi, '')}`;
  }

  onChange() {
    const {value} = this.inputEl;
    this.value = value;
    if (this.attributeSync) this.setAttribute('value', this.originalValue);
    // this.dispatchEvent(new CustomEvent('event', ev));
    this.onEvent(new CustomEvent('event'));
  }

  async connectedCallback() {
    super.connectedCallback();
    const inputEl = await getElement<HTMLInputElement>(
      this.shadowRoot,
      'input',
    );
    this.inputEl = inputEl;
    this.value = this.getAttribute('value');
    inputEl.value = this.value;
    this.onclick = () => inputEl.focus();
    this.inputEl.addEventListener('focus', () =>
      this.setAttribute('focus', ''),
    );
    this.inputEl.addEventListener('blur', () => this.removeAttribute('focus'));
  }

  disconnectedCallback() {
    this.onclick = () => null;
  }

  attributeChangedCallback(name: string, _: string, newVal: string) {
    if (name === 'value') {
      const inputEl = this.inputEl;
      if (this.type === HbInputType.number) newVal = this.toNumeric(newVal);
      if (inputEl && inputEl.value !== newVal) inputEl.value = newVal;
    }

    super.attributeChangedCallback(name, _, newVal);
  }
  // attributeChangedCallback(name: any, oldVal: any, newVal: any) {
  //   console.log('attribute change: ', name, newVal);
  //   // super.attributeChangedCallback(name, oldVal, newVal);
  // }
  // changeProperties() {
  //   console.log('djawkldjaw')
  // }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-input': HbInput;
  }
}

// const NAME = "hb-input";
// customElements.get(NAME) ||
//   customElements.define(
//     NAME,
//     class extends CustomElement {
//       template = require(`./${NAME}.hbs`);
//       css = require(`./${NAME}.scss`).default;
//       value: string;
//       constructor() {
//         super();
//       }
//       connectedCallback(): void {
//         super.connectedCallback();
//         this.isInputEl.onfocus = () => {
//           this.value = this.isInputEl.value;
//         };
//         this.isInputEl.onblur = (evt: Event) => {
//           if (this.value !== this.isInputEl.value)
//             this.dispatchEvent(new CustomEvent("change", evt));
//         };
//       }
//       get isInputEl() {
//         return this.shadowRoot.getElementById("input") as HTMLInputElement;
//       }
//     }
//   );
