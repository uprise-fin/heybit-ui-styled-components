import { componentVariables } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { getElement } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HbInputType } from './type';

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

  _value?: string;

  inputEl?: HTMLInputElement;

  attributeSync = false;

  placeholder = '';

  #error = false;

  decimal: number = 2;

  comma: number = 3;

  _readonly: boolean = false;

  _disabled: boolean = false;

  maxlength?: number;

  type: HbInputType = 'text';

  nowrap = true;

  get disabled() {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    if (value) this.setAttribute('data-disabled', '');
    else this.removeAttribute('data-disabled');
  }

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
      // _value: { type: String, Reflect: true },
      value: { type: String, Reflect: true },
      attributeSync: { type: Boolean, Reflect: true },
      type: { type: String, Reflect: true },
      placeholder: { type: String, Reflect: true },
      maxlength: { type: Number, Reflect: true },
      comma: { type: Number, Reflect: true },
      decimal: { type: Number, Reflect: true },
      error: { type: Boolean, Reflect: true },
      readonly: { type: Boolean, Reflect: true },
      _readonly: { type: Boolean, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
      _disabled: { type: Boolean, Reflect: true },
      nowrap: { type: Boolean, Reflect: true }
    };
  }

  get pattern() {
    if (['number', 'currency'].includes(this.type)) return '[0-9]*';
    return null;
  }

  get inputmode() {
    if (['number', 'currency'].includes(this.type)) return 'decimal';
    return null;
  }

  get isType() {
    if (['number', 'currency', 'english'].includes(this.type)) return 'text';
    return this.type;
  }

  set value(value: string) {
    if (this._value !== value && value !== null) {
      if (!value || value === 'null') value = '';
      const { inputEl } = this;
      if (this.nowrap) value = (value || '').replace(/\n/g, '');
      if (this.type === 'number') {
        value = this.toNumber(value);
      } else if (this.type === 'currency') {
        value = this.toCurrency(value);
      } else if (this.type === 'english') {
        value = this.toEnglish(value);
      } else {
        value = value.substring(0, this.isMaxlength);
      }

      this._value = value;
      if (inputEl && inputEl?.value !== this.originalValue) inputEl.value = value;
      else {
        this.onChange();
      }
      this.onResize();
    }
  }

  get value() {
    return this._value;
  }

  get originalValue() {
    if (this.type === 'currency') return this.toCurrency(this._value, true);
    return this._value;
  }

  get isMaxlength() {
    return this.maxlength || Infinity;
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-input__slot"></slot>
      <textarea
        id="input"
        rows="1"
        data-readonly=${this.readonly}
        data-disabled=${this.disabled}
        class="hb-input__el"
        part="input"
        pattern=${this.pattern}
        inputmode=${this.inputmode}
        @input=${this.onInput}
        @keydown=${this.onEnter}
        type=${this.isType}
        placeholder=${this.placeholder}
        ?readonly=${this._readonly}
        ?disabled=${this._disabled}
      ></textarea>
      <i class="hb-input__border" part="border"></i>
      <slot name="slot--right" part="slot--right" class="hb-input__slot"></slot>
    `;
  }

  onResize() {
    const inputEl = this.inputEl;
    if (inputEl) {
      const { minHeight, maxHeight, padding, border } = componentVariables.input;
      const currentContentHeight = minHeight - padding.bottom - padding.top - border.width * 2;
      inputEl.style.height = 'auto';
      const { scrollHeight } = inputEl;
      const targetCurrentHeight = Math.min(
        scrollHeight,
        maxHeight - padding.bottom - padding.top - border.width * 2
      );
      if (targetCurrentHeight >= currentContentHeight)
        inputEl.style.height = targetCurrentHeight + 'px';
    }
  }

  readonly ableNumber = /([0-9])/;

  readonly ableCurrency = /([.|0-9])/;

  readonly ableEnglish = /[a-z]/i;

  onEnter(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.onSubmit(new CustomEvent('submit'));
    }
  }

  onInput() {
    const inputEl = this.inputEl;
    const { value } = inputEl;
    this.value = value;
  }

  toEnglish(value: string) {
    return value.replace(/([^a-z])/gi, '').substring(0, this.isMaxlength);
  }

  toCurrency(value: string, toNumber: boolean = false) {
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
    value = value.replace(/[^0-9]/gi, '').substring(0, this.isMaxlength); // 숫자 말고 전부 제거

    if (!toNumber) {
      const req = new RegExp(`\\B(?=(\\d{${this.comma}})+(?!\\d))`, 'g');
      value = value.replace(req, ',');
    }
    return value + `${hasDot ? '.' : ''}${decimal.replace(/[^0-9]/gi, '')}`;
  }

  toNumber(value: string) {
    if (!value || typeof value !== 'string') return '';

    return value.replace(/[^0-9]/gi, '').substring(0, this.isMaxlength); // 숫자 말고 전부 제거
  }

  onChange() {
    if (!this.inputEl) return;
    this.onEvent(new CustomEvent('event'));
    if (this.maxlength && this.originalValue.length === this.maxlength)
      this.onSubmit(new CustomEvent('submit'));
  }

  async connectedCallback() {
    await super.connectedCallback();
    const inputEl = await getElement<HTMLInputElement>(this.shadowRoot, 'input');
    this.tabIndex = 0;
    this.inputEl = inputEl;
    this.value = this.getAttribute('value');
    inputEl.value = this.value;
    this.onResize();
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
