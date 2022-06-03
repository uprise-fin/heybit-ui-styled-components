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

@customElement("hb-toast")
export class HbToast extends Base {
  static override get styles() {
    return [require("../../../styles/molecule/toast/index.scss").default];
  }
  now: number = 0
  messages: string = ''
  timer: number[] = []
  duration: number = 3000
  static get properties() {
    return {
      messages: { type: String, Reflect: true },
      duration: { type: Number, Reflect: true },
      now: { type: Number, Reflect: true },
      timer: { type: Array, Reflect: true },
    };
  }
  get _messages() {
    if (!this.messages) {
      this.timer = []
      return []
    }
    const messages = this.messages.split(',')
    while(messages.length > this.timer.length) {
      this.timer.push((new Date()).getTime() + this.duration - 1)
      setTimeout(()=>{
        this.now = (new Date()).getTime()
      }, this.duration)
    }
    return messages
  }
  
  render() {
    return html`<div class="hb-toast__msg">${this._messages.map((x, i) => (html`<hb-transition class="hb-toast__transition" type=${transitionType.fade} ?show=${this.timer[i] > this.now}>${x}</hb-transition>`))}</div>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-toast": HbToast;
  }
}
// import CustomElement from "../custom-elements";
// const NAME = "hb-toast";
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
