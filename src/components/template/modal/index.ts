import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
import { transitionType } from "../../atom/transition";
import {Base, horizonAlign, verticalAlign} from "../../base";

export enum open  {
  'false' = 'false',
  'true' = 'true',
}
export enum buttonAlign  {
  'vertical' = 'vertical',
  'horizon' = 'horizon',
}
/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
 * @property title
 * @slot container
 * @csspart container
 */

@customElement("hb-modal")
export class HbModal extends Base {
  static override get styles() {
    return [require("../../../styles/template/modal/index.scss").default];
  }
  async customConnectedCallback() {
    this.containerEl = await getElement<HTMLDivElement>(this.shadowRoot, "container");
    this.containerEl!.onanimationend = (event: AnimationEvent) => this.onAnimationEnd(event);
  }
  disconnectedCallback() {
    this.containerEl.onanimationend = () => null
  }
  verticalAlign: verticalAlign = verticalAlign.middle
  horizonAlign: horizonAlign = horizonAlign.center
  transitionType: transitionType
  containerEl?: HTMLDivElement
  width = 0
  open = false
  persistent = false;
  get position() {
    const obj = {
      0: ['auto', 'auto'],
      1: ['0', 'auto'],
      2: ['auto', '0'],
    }
    return `${obj[this.verticalAlign][0]} ${obj[this.horizonAlign][0]} ${obj[this.verticalAlign][1]} ${obj[this.horizonAlign][1]}`
  }
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      width: { type: Number, Reflect: true },
      transitionType: { type: String, Reflect: true },
      verticalAlign: { type: Number, Reflect: true },
      horizonAlign: { type: Number, Reflect: true },
    };
  }

  render() {
    return html`
      <hb-transition ?show=${this.open} id="modal-transition" type=${transitionType.fade}>
        <div class="hb-modal__wrap" @click=${this.adapterOnClose}>
          <hb-transition ?show=${this.open} type=${this.transitionType} style="margin: ${this.position};">
            <div class="hb-modal__container" style=${this.width ? `width: ${this.width}px;` : ''} id="container" part="container" @click=${this.stopPropagation}>
              <slot></slot>
            </div>
          </hb-transition>
        </div>
      </hb-transition>
    `
  }
  
  onAnimationEnd(event: AnimationEvent) {
    this.classList.remove(event.animationName);
  }

  adapterOnClose(e: Event) {
    e.stopImmediatePropagation()
    if (this.persistent) return this.classList.add("shake")

    this.dispatchEvent(new CustomEvent("close", e));
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-modal": HbModal;
  }
}
