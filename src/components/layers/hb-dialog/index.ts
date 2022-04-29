import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";

/**
 * @property open 온 오프
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
    return [require("../../../styles/layers/hb-dialog/index.scss").default];
  }
  _open = false;

  get open() {
    return this._open;
  }
  set open(val: boolean) {
    this.onToggle(val)
    if(this._open !== val) this._open = val
  }
   

  // @property()
  // value!: string;
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
    };
  }

  render() {
    return html`
      <div class="hb-dialog__wrap" id="wrap">
        <div class="hb-dialog__container" part="container">
          <button
            @click=${this.onHide}
            class="hb-dialog__close-btn"
            part="close-btn"
            id="close-btn"
          ></button>
          <slot name="header" part="header" class="hb-dialog__header"></slot>
          <slot name="content" part="content" class="hb-dialog__content"></slot>
          <slot name="footer" part="footer" class="hb-dialog__footer"></slot>
        </div>
      </div>
    `
  }
  override async connectedCallback() {
    super.connectedCallback();
    await this.bindEvent();
  }
  async bindEvent() {
    // const a = this.shadowRoot;
    const wrapEl = await getElement<HTMLDivElement>(this.shadowRoot, "wrap");
    wrapEl!.onanimationstart = () => this.onAnimationStart();
    wrapEl!.onanimationend = () => this.onAnimationEnd();
  }
  onAnimationStart() {
    this.classList.add("animation");
  }
  onAnimationEnd() {
    this.classList.remove("animation");
  }
  onToggle(val: boolean) {
    if(val) return this.onShow();
    this.onHide()
  }
  onShow() {
    this.classList.add("open");
  }
  
  onHide() {
    this.classList.add("animation");
    this.classList.remove("open");
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
