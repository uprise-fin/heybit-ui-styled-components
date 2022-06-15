import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { wait } from "../../../utils";
import { transitionType } from "../../atom/transition";
import { Base, theme } from "../../base";
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
export interface Button {
  event: Function;
  theme: theme;
  name: string;
}
export interface Anchor {
  event?: Function;
  href?: string;
  target?: string;
  name?: string;
}
@customElement("hb-dialog")
export class HbDialog extends Base {
  static override get styles() {
    return [require("../../../styles/template/dialog/index.scss").default];
  }
  
  width = 0
  eventLoading = false
  open = false
  icon = ''
  title = ''
  persistent = false;
  hideCloseBtn = false;
  buttonAlign = buttonAlign.horizon
  anchor: Anchor = {}
  buttons: Button[] = []
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
      buttons: { type: Array, Reflect: true },
      eventLoading: { type: Boolean, Reflect: true },
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
        width=${this.width}
        ?open=${this.open} 
        ?persistent=${this.persistent} 
        transitionType=${transitionType.zoom}
      >
        <div class="hb-dialog__container">
          ${
            this.hideCloseBtn ? '' : html`
            <button
              ?disabled=${this.eventLoading}
              @click=${this.onClose}
              type="button"
              class="hb-dialog__close-btn"
              part="close-btn"
              id="close-btn"
            ><hb-icon icon="ic-system-close-24-gray.svg" size="small"></hb-icon></button>`
          }
          <div class="hb-dialog__head">${this.icon ? html`<hb-img part="icon" loadingWidth="60" loadingHeight="60" src=${this.icon} class="hb-dialog__head__icon"></hb-img>` : ''}${this.title ? html`<p part="title" class="hb-dialog__head__title">${this.title}</p>` : ''}</div>
          <div class="hb-dialog__body">
            <slot name="content" part="content" class="hb-dialog__body__content"></slot>
          </div>
          <div class="hb-dialog__foot">
            <div class="hb-dialog__foot__button-wrap ${this.buttonAlign}">
              ${this.buttons.map(x => html`<hb-button class="hb-dialog__foot__btn" ?loading=${this.eventLoading} @event=${this.onEvent.bind(this, x.event)} theme=${x.theme} size="medium">${x.name}</hb-button>`)}
            </div>
            ${
              this.anchor && this.anchor.name
                ?
                  html`<hb-anchor ?disabled=${this.eventLoading} class="hb-dialog__foot__anc" href=${this.anchor.href} target=${this.anchor.target} @event=${this.anchor.event}>${this.anchor.name}</hb-anchor>`
                :
                  ''
            }
          </div>
        </div>
      </hb-modal>
    `
  }

  async onEvent(f: Function) {
    this.eventLoading = true
    await Promise.all([f(), wait()])
    this.eventLoading = false
  }

  onClose() {
    this.open = false;
    this.removeAttribute('open')
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-dialog": HbDialog;
  }
}