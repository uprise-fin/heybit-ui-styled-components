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

  value = '';

  options: HbListOption[] = [];

  emptyText = '검색결과가 없습니다.';

  static get properties() {
    return {
      value: { type: String, Reflect: true },
      options: { type: Array, Reflect: true },
      emptyText: { type: String, Reflect: true }
    };
  }

  get list() {
    return this.options || [];
  }

  render() {
    return html`
      <select class="hb-select__el" @change=${this.onSelect} ?disabled=${!this.list.length}>
        ${this.list.length
          ? this.list.map(
              (x) =>
                html`
                  <option ?selected=${this.value === x.value} value=${x.value}>${x.label}</option>
                `
            )
          : html`<option>${this.emptyText}</option>`}
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
