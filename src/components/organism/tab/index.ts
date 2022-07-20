import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {getChildren} from '@/utils';
import {Base} from '@/components/base';
import {HbInputProps} from './type';
/**
 * @property index
 * @slot content 기본 컨텐츠 영역
 * @slot header 버튼 영역
 * @csspart header
 * @csspart content
 */

@customElement('hb-tab')
export class HbTab extends Base<HbInputProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  btns: HTMLElement[] = [];

  contents: HTMLElement[] = [];

  index: string;

  _index: string;

  left = 0;

  width = 0;

  static get properties() {
    return {
      left: {type: Number, Reflect: true},
      width: {type: Number, Reflect: true},
      index: {type: String, Reflect: true},
    };
  }

  async customConnectedCallback() {
    const wrap = await getChildren(this.children);
    this.btns = wrap.filter(x => x.slot === 'header');
    this.contents = wrap.filter(x => x.slot !== 'header');
    this.setIndicator(this.index);
  }

  attributeChangedCallback(name: string, _: string, newVal: string) {
    if (name === 'index') {
      this.setIndicator(newVal);
    }
    super.attributeChangedCallback(name, _, newVal);
  }

  onClick(ev: PointerEvent) {
    const target = ev.target as HTMLElement;
    const index = this.btns.indexOf(target);
    this.setAttribute('index', index.toString());
  }

  async setIndicator(index: string) {
    if (!this.btns.length || this._index === index) return;
    const number = +index;
    const target = this.btns[number];
    const {offsetWidth, offsetLeft} = await target;
    this._index = index;
    this.left = offsetLeft - this.offsetLeft;
    this.width = offsetWidth;
    this.contents.map(x => x.removeAttribute('active'));
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
