import {Base} from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
export enum transitionType {
  fade = 'fade',
  zoom = 'zoom',
  bottomUpHeight = 'bottom-up-height',
  bottomUp = 'bottom-up',
}
@customElement("hb-transition")
export class HbTransition extends Base {
  static override get styles() {
    return [require("../../../styles/atom/transition/index.scss").default];
  }
  show = false
  type: transitionType
  static get properties() {
    return {
      show: { type: Boolean, Reflect: true },
      type: { type: String, Reflect: true },
    };
  }
  async customConnectedCallback() {
    this.onanimationend = (evnt) => this.onAnimationEnd(evnt)
  }
  onAnimationEnd(evnt: AnimationEvent) {
    evnt.stopPropagation()
    if (evnt.animationName.includes('show')) return this.classList.add('visible')
    return this.classList.remove('visible')
  }
  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-transition__wall" part=${`cell-${i+1}`}></div>
  //   `)
  // }

  render() {
    return html`<slot></slot>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-transition": HbTransition;
  }
}
