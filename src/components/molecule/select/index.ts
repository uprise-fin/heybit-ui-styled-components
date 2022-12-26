import { HbListOption } from '@/components/atom/list/type';
import { Base } from '@/components/base';
import { getElement } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @fires event 값이 변경될때 발생
 * @property value 기본 값
 * @property options Options[] 옵션
 */

@customElement('hb-select')
export class HbSelect extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  selectEl?: HTMLSelectElement;

  disabled: boolean;

  _value?: string;

  options: HbListOption[] = [];

  placeholder = '선택해주세요.';

  emptyText = '데이터가 없습니다.';

  static get properties() {
    return {
      _value: { type: String, Reflect: true },
      value: { type: String, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
      options: { type: Array, Reflect: true },
      placeholder: { type: String, Reflect: true },
      emptyText: { type: String, Reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    const selectEl = await getElement<HTMLSelectElement>(this.shadowRoot, 'select');
    this.tabIndex = 0;
    this.selectEl = selectEl;
    this.onclick = () => selectEl.focus();
    this.addEventListener('focus', () => {
      this.setAttribute('data-focus', '');
      this.selectEl.focus();
    });
    this.addEventListener('blur', () => this.removeAttribute('data-focus'));
  }

  get list() {
    const placeholder: HbListOption[] = [
      { value: undefined, label: this.placeholder, disabled: true }
    ];
    return this.options?.length
      ? placeholder.concat(this.options)
      : [{ value: null, label: this.emptyText, disabled: true }];
  }

  set value(value: string) {
    if (this._value !== value) {
      this.focus();
      this._value = value;
      this.blur();
    }
  }

  get value() {
    return this._value;
  }

  render() {
    return html`
      <select
        id="select"
        class=${'hb-select__el' + (this._value ? '' : ' hb-select__el--init')}
        @change=${this.onSelect}
        ?disabled=${this.disabled}
      >
        ${this.list.map(
          (x, i) =>
            html`
              <option
                ?selected=${this._value ? this._value === x.value : i === 0}
                value=${x.value}
                ?disabled=${x.disabled}
              >
                ${x.label}
              </option>
            `
        )}
      </select>
      <span class="hb-select__icon-wrap">
        <hb-icon
          class="hb-select__icon-wrap__el"
          icon="system/outline/arrow-dropdown"
          size="small"
        ></hb-icon>
      </span>
    `;
  }

  onSelect(ev: Event) {
    ev.stopImmediatePropagation();
    const { target } = ev;
    if (!(target instanceof HTMLSelectElement)) return;
    const { value } = target;
    this.value = value!;
    this.onEvent(new CustomEvent('event'));
  }

  attributeChangedCallback(name: string, oldVal: string, newVal: string) {
    if (name === 'value' && oldVal !== newVal) this.onSelect(new Event('change'));

    super.attributeChangedCallback(name, oldVal, newVal);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-select': HbSelect;
  }
}
