import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
import Base from "../../base";

export enum open  {
  'false' = 'false',
  'true' = 'true',
}
/**
 * @property open 온 오프
 * @property persistent
 * @property hideCloseBtn
 * @slot header - optional, 헤더
 * @slot content - optional, 내용
 * @slot footer - optional, 푸터
 * @csspart container
 * @csspart header
 * @csspart content
 * @csspart footer
 */

@customElement("hb-dialog")
export class HbDialog extends Base {
  static override get styles() {
    return [require("../../../styles/template/dialog/index.scss").default];
  }
  async customConnectedCallback() {
    this.wrapEl = await getElement<HTMLDivElement>(this.shadowRoot, "wrap");
    this.wrapEl!.onanimationend = (event: AnimationEvent) => this.onAnimationEnd(event);
  }
  disconnectedCallback() {
    this.wrapEl.onanimationend = () => null
  }
  wrapEl?: HTMLDivElement
  _open = false
  persistent = false;
  hideCloseBtn = false;
  get open() {
    return this._open;
  }
  set open(val: boolean) {
    if (this._open !== val) {
      this._open = val
      this.onToggle(val)
    }
  }
   

  // @property()
  // value!: string;
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
    };
  }

  render() {
    return html`
      <div class="hb-dialog__wrap" id="wrap" @click=${this.adapterOnClose}>
        <div class="hb-dialog__container" part="container" @click=${this.stopPropagation}>
          ${
            this.hideCloseBtn ? '' : html`
            <button
              @click=${this.onClose}
              type="button"
              class="hb-dialog__close-btn"
              part="close-btn"
              id="close-btn"
            ><hb-icon icon="ic-account-clear-24-black.svg" size="medium"></hb-icon></button>`
          }
          
          <slot name="header" part="header" class="hb-dialog__header"></slot>
          <slot name="content" part="content" class="hb-dialog__content"></slot>
          <slot name="footer" part="footer" class="hb-dialog__footer"></slot>
        </div>
      </div>
    `
  }
  onAnimationEnd(event: AnimationEvent) {
    const obj: Obj<string[]> = {
      'show': ['show'],
      'shake': ['show','shake'],
      'hide': ['hide'],
    }
    this.classList.remove(...obj[event.animationName]);
  }
  onToggle(val: boolean) {
    if (!val) this.removeAttribute('open')
    const obj: Obj<string[]> = {
      true: ['open', 'show'],
      false: ['hide']
    }
    this.classList.add(...obj[val + ''])
    this.classList.remove(...obj[!val + ''])
  }

  onClose() {
    this.open = false
  }

  adapterOnClose(e: Event) {
    e.stopImmediatePropagation()
    if (this.persistent) return this.classList.add("shake")

    this.onClose()
  } 
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-dialog": HbDialog;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-dialog";
// customElements.get(NAME) ||
//   customElements.define(
//     NAME,
//     class extends CustomElement {
//       template = require(`./${NAME}.hbs`);
//       css = require(`./${NAME}.scss`).default;
//       properties = {
//         id: {
//           closeBtn: "close-btn",
//           wrap: "wrap",
//         },
//       };
//       constructor() {
//         super();
//       }
//       connectedCallback(): void {
//         super.connectedCallback();
//         this.isWrapEl.onanimationstart = () => this.onAnimationStart();
//         this.isWrapEl.onanimationend = () => this.onAnimationEnd();
//         this.isCloseBtnEl.onclick = () => this.onHide();
//       }
//       get isCloseBtnEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.closeBtn
//         ) as HTMLButtonElement;
//       }
//       get isWrapEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.wrap
//         ) as HTMLButtonElement;
//       }

//       onHide() {
//         this.classList.add(this.isProperties.classList.animation);
//         super.onHide();
//       }
//     }
//   );
