import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HbTransitionType } from './type';

@customElement('hb-transition')
export class HbTransition extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  _show = false;

  delete = false;

  type: HbTransitionType;

  get show() {
    return this._show;
  }

  set show(value: boolean) {
    this._show = value;
    if (value) {
      this.setAttribute('show', '');
    } else {
      this.removeAttribute('show');
    }
  }

  static get properties() {
    return {
      show: { type: Boolean, Reflect: true },
      delete: { type: Boolean, Reflect: true },
      type: { type: String, Reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.onanimationend = (evnt) => this.onAnimationEnd(evnt);
  }

  onAnimationEnd(evnt: AnimationEvent) {
    this.stopPropagation(evnt);
    if (evnt.animationName.includes('show')) return this.classList.add('visible');
    if (this.delete) this.remove();
    return this.classList.remove('visible');
  }
  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-transition__wall" part=${`cell-${i+1}`}></div>
  //   `)
  // }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-transition': HbTransition;
  }
}
