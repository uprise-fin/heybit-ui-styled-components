import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbTransitionType} from '../../atom/transition/type';

import {Base} from '../../base';
import {HbTooltipProps} from './type';

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

@customElement('hb-tooltip')
export class HbTooltip extends Base<HbTooltipProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  open: boolean = false;

  position = [false, false];

  static get properties() {
    return {
      open: {type: Boolean, Reflect: true},
      width: {type: Number, Reflect: true},
      height: {type: Number, Reflect: true},
      position: {type: Array, Reflect: true},
    };
  }

  async customConnectedCallback() {
    this.tabIndex = 0;
    this.onfocus = this.onOpen;
    this.onblur = () => {
      this.open = false;
    };
    this.onmouseenter = () => this.focus();
    this.onmouseleave = () => this.blur();
  }

  disconnectedCallback() {
    this.onfocus = () => null;
    this.onblur = () => null;
    this.onmouseenter = () => null;
    this.onmouseleave = () => null;
  }

  onOpen() {
    const {x, y, width, height} = this.getBoundingClientRect();
    const {innerWidth, innerHeight} = window;
    this.position = [
      x + width / 2 > innerWidth / 2,
      y + height / 2 > innerHeight / 2,
    ];
    // if ((x + width / 2) > innerWidth / 2) console.log('오른쪽')
    // if ((y + height / 2) > innerHeight / 2) console.log('아래쪽')
    this.open = true;
  }

  render() {
    return html`
      <slot name="front" part="front" class="hb-tooltip__front"></slot>
      <hb-transition
        class="hb-tooltip__transition"
        id="tooltip-transition"
        type=${HbTransitionType.fade}
        ?show=${this.open}
        ><slot part="content" class="hb-tooltip__content"></slot
      ></hb-transition>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-tooltip': HbTooltip;
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
