import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { transitionType } from "../../atom/transition";
import { Base, verticalAlign } from "../../base";
import { buttonAlign } from "../modal";

/**
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
 * @property title
 * @slot content - optional, 내용
 * @slot button - optional, 버튼
 * @slot anchor - optional, 앵커
 * @csspart container
 * @csspart icon
 * @csspart title
 * @csspart content
 * @csspart buttons
 * @csspart anchor
 */

@customElement("hb-sheet")
export class HbSheet extends Base {
  static override get styles() {
    return [require("../../../styles/template/sheet/index.scss").default];
  }
  width = 0
  open = false
  icon = ''
  title = ''
  persistent = false;
  hideCloseBtn = false;
  buttonAlign = buttonAlign.horizon
  // get open() {
  //   return this._open;
  // }
  // set open(val: boolean) {
  //   if (this._open !== val) {
  //     this._open = val
  //     this.onToggle(val)
  //   }
  // }
   

  // @property()
  // value!: string;
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      width: { type: Number, Reflect: true },
      buttonAlign: { type: String, Reflect: true },
      title: { type: String, Reflect: true },
      icon: { type: String, Reflect: true },
    };
  }

  render() {
    return html`
      <hb-modal 
        @close=${this.onClose}
        verticalAlign=${verticalAlign.bottom}
        width=${this.width}
        ?open=${this.open} 
        ?persistent=${this.persistent} 
        transitionType=${transitionType.bottomUp}
      >
        <div class="hb-sheet__container">
          ${
            this.hideCloseBtn ? '' : html`
            <button
              @click=${this.onClose}
              type="button"
              class="hb-sheet__close-btn"
              part="close-btn"
              id="close-btn"
            ><hb-icon icon="ic-system-close-24-gray.svg" size="small"></hb-icon></button>`
          }
          <div class="hb-sheet__head">${this.icon ? html`<hb-img part="icon" loadingWidth="60" loadingHeight="60" src=${this.icon} class="hb-sheet__head__icon"></hb-img>` : ''}${this.title ? html`<p part="title" class="hb-sheet__head__title">${this.title}</p>` : ''}</div>
          <div class="hb-sheet__body">
            <slot name="content" part="content" class="hb-sheet__body__content"></slot>
          </div>
          <div class="hb-sheet__foot">
            <slot name="button" part="button" class="hb-sheet__foot__button ${this.buttonAlign}"></slot>
            <slot name="anchor" part="anchor" class="hb-sheet__foot__anchor"></slot>
          </div>
        </div>
      </hb-modal>
    `
  }

  onClose() {
    this.open = false;
    this.removeAttribute('open')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-sheet": HbSheet;
  }
}