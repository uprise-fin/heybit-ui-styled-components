import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { HbTransitionType } from './type';

@customElement('hb-transition')
export class HbTransition extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  @property({ type: Boolean })
  show = false;

  @property({ type: Boolean })
  delete = false;

  @property()
  type: HbTransitionType;

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
