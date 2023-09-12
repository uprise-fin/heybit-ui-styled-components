import { componentVariables } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { getElement } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { HTMLInputTypeAttribute, HbInputType } from './type';
import '@/components/molecule/button';
import { HbButtonProps } from '@/index';

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

  _value: string = '';

  inputEl?: HTMLInputElement;

  attributeSync = false;

  placeholder = '';

  error = false;

  decimal: number = 2;

  comma: number = 3;

  readonly = false;

  disabled = false;

  maxlength?: number;

  type: HbInputType = 'text';

  nowrap = true;

  static formAssociated = true;

  private readonly internals = (this as HTMLElement).attachInternals();

  static get properties() {
    return {
      // _value: { type: String, reflect: true },
      value: { type: String, reflect: true },
      attributeSync: { type: Boolean, reflect: true },
      type: { type: String, reflect: true },
      placeholder: { type: String, reflect: true },
      maxlength: { type: Number, reflect: true },
      comma: { type: Number, reflect: true },
      decimal: { type: Number, reflect: true },
      error: { type: Boolean, reflect: true },
      readonly: { type: Boolean, reflect: true },
      disabled: { type: Boolean, reflect: true },
      nowrap: { type: Boolean, reflect: true }
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
    return this.type as HTMLInputTypeAttribute;
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
      if (inputEl) {
        inputEl.value = value;
        if (value !== this._value) {
          this._value = value;
          this.onChange();
        }
      } else this._value = value;

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
        class="hb-input__el"
        part="input"
        pattern=${this.pattern}
        inputmode=${this.inputmode}
        @input=${this.onInput}
        @keydown=${this.onEnter}
        type=${this.isType}
        placeholder=${this.placeholder}
        ?readonly=${this.readonly}
        ?disabled=${this.disabled}
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
    if (ev.key !== 'Enter') return;

    if (!this.internals.form) {
      ev.preventDefault();
      return this.onSubmit(new CustomEvent('submit'));
    }

    const isReadySubmit = [...this.internals.form].some((el) => {
      const hbButtonEl: HbButtonProps & Element = el;
      return (
        hbButtonEl.nodeName === 'HB-BUTTON' &&
        !hbButtonEl.href &&
        (!hbButtonEl['native-type'] || hbButtonEl['native-type'] === 'submit') &&
        !hbButtonEl.disabled
      );
    });

    if (!isReadySubmit) return;
    this.internals.setFormValue(this._value);
    this.internals.form.requestSubmit();
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
    this.inputEl = inputEl;
    this.value = this.getAttribute('value');
    inputEl.value = this.value;
    this.onResize();
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
