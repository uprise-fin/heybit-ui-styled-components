import { html } from "lit";
import { customElement } from "lit/decorators.js";
import Base from "../../base";

/**
 * @property src 
 * @property multiSource 
 * @property breakPoint 
 * @property pcPrefix 
 * @csspart picture
 * @csspart skeleton
 * @csspart img
 */

@customElement("hb-img")
export class HbImg extends Base {
  static override get styles() {
    return [require("../../../styles/molecule/img/index.scss").default];
  }
  src: string
  width: string
  height: string
  breakPoint = 1020
  multiSource = 0
  pcPrefix = '-pc'
  loaded = false
  error = false

  static get properties() {
    return {
      src: { type: String, Reflect: true },
      width: { type: String, Reflect: true },
      height: { type: String, Reflect: true },
      multiSource: { type: Number, Reflect: true },
      breakPoint: { type: Number, Reflect: true },
      pcPrefix: { type: String, Reflect: true },
      loaded: { type: Boolean, Reflect: true },
      error: { type: Boolean, Reflect: true },
    };
  }
  get srcExt() {
    const number = this.src.lastIndexOf('.')
    return this.src.substring(number)
  }
  get srcName() {
    const number = this.src.lastIndexOf('.')
    return this.src.substring(0, number)
  }

  get set() {
    return Array(this.multiSource).fill(null)
  }

  get srcset() {
    const arr = this.set.map((_,i) => {
      const j = i + 1;
      if (j === 1) {
        return `${this.srcName}${this.srcExt} 1x`
      }
      return `${this.srcName}@${j}x${this.srcExt} ${j}x`
    })
    return arr.join(',')
  }
  get pcSrcset() {
    const arr = this.set.map((_,i) => {
      const j = i + 1;
      if (j === 1) {
        return `${this.srcName}${this.pcPrefix}${this.srcExt} 1x`
      }
      return `${this.srcName}${this.pcPrefix}@${j}x${this.srcExt} ${j}x`
    })
    return arr.join(',')
  }

  // set src(src: string) {
  //   if (this.srcset) src = ''
  //   this._src = src
  // }

  // get src() {
  //   return this._src
  // }
  

  render() {
    return html`
    <picture class="hb-img__picture" part="picture" style="width: ${this.width}; height: ${this.height};">
      ${this.multiSource > 0 ?
        this.breakPoint > 0 ? 
          html`
            <source media=${`(max-width: ${this.breakPoint - 1}px)`} srcset=${this.srcset}>
            <source media=${`(min-width: ${this.breakPoint}px)`} srcset=${this.pcSrcset}>
          ` :
          html`
            <source srcset=${this.srcset}>
          `
        : ''
      }
      <hb-loading class="hb-img__loading" part="loading" ?hidden=${this.loaded || this.error} width=${this.width} height=${this.height}></hb-loading>
      <img class="hb-img__img" part="img" src=${this.src} @error=${this.onError} @load=${this.onLoad} ?loaded=${this.loaded} ?error=${this.error}>
    </picture>
    `
  }
  onLoad(evt: Event) {
    this.loaded = true
    this.dispatchEvent(new Event("load", evt));
  }
  onError(evt: Event) {
    this.error = true
    this.dispatchEvent(new Event("error", evt));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-img": HbImg;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-img";
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