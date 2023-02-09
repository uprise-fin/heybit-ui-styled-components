import { basicVariables } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { getChildren } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
/**
 * @property value
 * @slot content 기본 컨텐츠 영역
 * @slot header 버튼 영역
 * @csspart header
 * @csspart content
 */

@customElement('hb-tab')
export class HbTab extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  btns: HTMLElement[] = [];

  contents: HTMLElement[] = [];

  #value = '';

  left = 0;

  width = 0;

  get value() {
    return this.#value;
  }

  set value(value: string) {
    this.#value = value;
    this.setIndicator();
  }

  static get properties() {
    return {
      left: { type: Number, Reflect: true },
      width: { type: Number, Reflect: true },
      value: { type: String, Reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    const wrap = await getChildren(this.children);
    this.btns = wrap.filter((x) => x.slot === 'header');
    this.contents = wrap.filter((x) => x.slot !== 'header');
    this.setIndicator();
  }

  onClick(ev: Event) {
    const target = ev.target as HTMLElement;
    const value = this.btns.indexOf(target);
    this.value = value.toString();
    this.onEvent(new CustomEvent('event'));
  }

  async setIndicator() {
    if (!this.btns.length) return;
    const number = +this.#value;
    const target = this.btns[number];
    const { offsetWidth, offsetLeft } = await target;
    this.left = offsetLeft - this.offsetLeft + basicVariables.layout.gutter;
    this.width = offsetWidth - basicVariables.layout.gutter * 2;
    this.btns.concat(this.contents).map((x) => x.removeAttribute('active'));
    this.btns[number].setAttribute('active', '');
    this.contents[number].setAttribute('active', '');
  }

  render() {
    return html`
      <div class="hb-tab__header" id="header" part="header">
        <slot
          class="hb-tab__header__btns"
          id="btns"
          part="btns"
          @click=${this.onClick}
          name="header"
        ></slot>
        <i
          class="hb-tab__header__indicator"
          style="width: ${this.width}px; transform: translateX(${this.left}px)"
        ></i>
      </div>
      <slot class="hb-tab__content" id="content" part="content"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-tab': HbTab;
  }
}
