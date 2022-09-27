import {componentVariables} from '@/components/atom/variable/type';
import {InitAttribute} from '@/components/base';
import {getElement} from '@/utils';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbInputEvent, HbInputProps, HbInputType} from './type';

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
export class HbInput extends InitAttribute<HbInputProps> {
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

  nowrap = true;

  initialAttributes: (keyof HbInputProps)[] = ['value'];

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
      _value: {type: String, Reflect: true},
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
      nowrap: {type: Boolean, Reflect: true},
    };
  }

  get pattern() {
    if (this.type === 'number') return '[0-9]*';
    return null;
  }

  get inputmode() {
    if (this.type === 'number') return 'decimal';
    return null;
  }

  get isType() {
    if (this.type === HbInputType.number) return HbInputType.text;
    return this.type;
  }

  set value(value: string) {
    if (!value || value === 'null') value = '';
    this._value = value || '';
    this.setAttribute('value', value);
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
      <textarea
        id="input"
        rows="1"
        data-readonly=${this.readonly}
        class="hb-input__el"
        part="input"
        pattern=${this.pattern}
        inputmode=${this.inputmode}
        @input=${this.onInput}
        @keydown=${this.onEnter}
        type=${this.isType}
        placeholder=${this.placeholder}
        ?readonly=${this._readonly}
      ></textarea>
      <i class="hb-input__border" part="border"></i>
      <slot name="slot--right" part="slot--right" class="hb-input__slot"></slot>
    `;
  }

  onResize() {
    const inputEl = this.inputEl;
    if (inputEl) {
      const {minHeight, maxHeight, padding, border} = componentVariables.input;
      const currentContentHeight =
        minHeight - padding.bottom - padding.top - border.width * 2;
      inputEl.style.height = 'auto';
      const {scrollHeight} = inputEl;
      const targetCurrentHeight = Math.min(
        scrollHeight,
        maxHeight - padding.bottom - padding.top - border.width * 2,
      );
      if (targetCurrentHeight >= currentContentHeight)
        inputEl.style.height = targetCurrentHeight + 'px';
    }
  }

  readonly ableNumber = Array(10)
    .fill('')
    .map((_, i) => i + '')
    .concat('.');

  onEnter(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.onSubmit(new CustomEvent('submit'));
    }
  }

  onInput(ev: HbInputEvent) {
    const inputEl = this.inputEl;
    let {value} = inputEl;
    if (this.nowrap) value = value.replace(/\n/g, '');
    if (this.maxlength) {
      if (this.type === HbInputType.number)
        value = this.toNumeric(value, true).substring(0, this.maxlength);
      else {
        value = value.substring(0, this.maxlength);
      }
    }

    if (this.type === HbInputType.number) {
      //숫자만 입력받도록 값 변경
      const {data} = ev;
      if (data !== null && !this.ableNumber.includes(data))
        inputEl.value = this.value;
      else inputEl.value = this.toNumeric(value);
      value = inputEl.value;
    } else {
      inputEl.value = value;
    }
    // 인풋에 입력 시 attribute 체인지에 안 태우는 이유는 체인지 이벤트가 발생 안하기 때문입니다.
    // 유저가, 혹은 시스템이 값을 바꿀땐 체인지가 발생 안하는게 맞고 유저가 입력 시 체인지 이벤트를 받아야하니까요.
    if (this.value !== value) {
      this.onResize();
      this.onChange();
    }
  }

  toNumeric(value: string, toNumber: boolean = false) {
    if (!value || typeof value !== 'string') return '';
    let dotIndex = value.indexOf('.');
    if (dotIndex === 0) {
      dotIndex = 1;
      value = `0.${value}`;
    }
    const hasDot = dotIndex > 0;
    let decimal = '';
    if (hasDot) {
      decimal = value.substring(dotIndex + 1, dotIndex + 1 + this.decimal);
      value = value.substring(0, dotIndex);
    }
    value = value.replace(/^^0[{1-9}]/gi, '{1}'); // 최초 0뒤에 오는 숫자 => 앞 0 제거
    value = value.replace(/^0{2,}/gi, '0'); // 최초 0 2개이상 0으로 변경
    value = value.replace(/[^0-9]/gi, ''); // 숫자 말고 전부 제거

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
    if (this.maxlength && this.originalValue.length === this.maxlength)
      this.onSubmit(new CustomEvent('submit'));
  }

  firstRendered() {
    console.log(this.shadowRoot.getElementById('input')); // log null
  }

  async connectedCallback() {
    await super.connectedCallback();
    const inputEl = await getElement<HTMLInputElement>(
      this.shadowRoot,
      'input',
    );
    this.tabIndex = 0;
    this.inputEl = inputEl;
    this.value = this.getAttribute('value');
    inputEl.value = this.value;
    this.onclick = () => inputEl.focus();
    this.addEventListener('focus', () => {
      this.setAttribute('data-focus', '');
      this.inputEl.focus();
    });
    this.addEventListener('blur', () => this.removeAttribute('data-focus'));
  }

  disconnectedCallback() {
    this.onclick = () => null;
  }

  attributeChangedCallback(name: string, _: string, newVal: string) {
    if (name === 'value') {
      // value값을 넘겨받을때(input이벤트없이 입력받을때)
      const inputEl = this.inputEl;
      if (this.maxlength) {
        if (this.type === HbInputType.number)
          newVal = this.toNumeric(newVal, true).substring(0, this.maxlength);
        else newVal = newVal.substring(0, this.maxlength);
      }
      if (this.type === HbInputType.number) newVal = this.toNumeric(newVal);
      if (inputEl && inputEl.value !== newVal) {
        inputEl.value = newVal;
        this.onResize();
      }
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
