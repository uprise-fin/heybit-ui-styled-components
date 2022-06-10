import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { transitionType } from "../../atom/transition";
import Base from "../../base";

// import White from '../../assets/icons/ic-system-menu-24-white.svg'
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

@customElement("hb-tooltip")
export class HbTooltip extends Base {
  static override get styles() {
    return [require("../../../styles/molecule/tooltip/index.scss").default];
  }

  open: boolean = false;
  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
    };
  }
  async customConnectedCallback() {
    this.tabIndex = 0
    this.onfocus = () => {this.open = true}
    this.onblur = () => {this.open = false}
    this.onmouseenter = () => this.focus()
    this.onmouseleave = () => this.blur()
  }
  disconnectedCallback() {
    this.onfocus = () => null;
    this.onblur = () => null;
    this.onmouseenter = () => null;
    this.onmouseleave = () => null;
  }
  render() {
    return html`
      <slot name="front" part="front" class="hb-tooltip__front"></slot>
      <hb-transition class="hb-tooltip__transition" id="tooltip-transition" type=${transitionType.fade} ?show=${this.open}><slot part="content" class="hb-tooltip__content"></slot></hb-transition>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-tooltip": HbTooltip;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-tooltip";
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