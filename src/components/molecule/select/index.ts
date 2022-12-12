import { HbIconName } from '@/components/atom/icon/type';
import { HbListOption } from '@/components/atom/list/type';
import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
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

  disabled: boolean;

  value = '';

  options: HbListOption[] = [];

  placeholder = '선택해주세요.';

  emptyText = '데이터가 없습니다.';

  static get properties() {
    return {
      value: { type: String, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
      options: { type: Array, Reflect: true },
      placeholder: { type: String, Reflect: true },
      emptyText: { type: String, Reflect: true }
    };
  }

  get list() {
    const placeholder: HbListOption[] = [{ value: '', label: this.placeholder, disabled: true }];
    return placeholder.concat(
      this.options.length ? this.options : [{ value: ' ', label: this.emptyText, disabled: true }]
    );
  }

  render() {
    return html`
      <select
        class=${'hb-select__el' + (this.value === '' ? ' hb-select__el--init' : '')}
        @change=${this.onSelect}
        ?disabled=${this.disabled}
      >
        ${this.list.map(
          (x) =>
            html`
              <option ?selected=${this.value === x.value} value=${x.value} ?disabled=${x.disabled}>
                ${x.label}
              </option>
            `
        )}
      </select>
      <span class="hb-select__icon-wrap">
        <hb-icon
          class="hb-select__icon-wrap__el"
          icon=${HbIconName['system/outline/arrow-dropdown']}
          size=${Size.small}
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
    // this.dispatchEvent(new CustomEvent('event', evt));
    this.onEvent(new CustomEvent('event'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-select': HbSelect;
  }
}
