import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import Base, { size } from "../base";
import SVG from './svg';

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

@customElement("hb-icon")
export class HbIcon extends Base {
  static override get styles() {
    return [require("../../styles/hb-icon/index.scss").default];
  }

  icon: string;
  size: size;
  static get properties() {
    return {
      icon: { type: String, Reflect: true },
    };
  }
  convert(str: string) {
    const start = str.indexOf('<', 1)
    return str.substring(start, str.length - 6);
  }

  render() {
    return html`${unsafeSVG(SVG[this.icon])}`
  }
  
  override async connectedCallback() {
    super.connectedCallback();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-icon": HbIcon;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-icon";
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
