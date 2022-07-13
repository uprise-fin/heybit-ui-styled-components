import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbTransitionType} from '@/components/atom/transition/type';
import {HbToastMessage} from './type';
// import style from '@/styles/molecule/toast/index.scss';

import {Base} from '@/components/base';
import {Size} from '@/components/atom/variable/type';

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
interface Timer {
  time: number;
  index: number;
}
@customElement('hb-toast')
export class HbToast extends Base {
  static get styles() {
    return [require('@/styles/molecule/toast.scss').default];
  }

  now: number = 0;

  messages: HbToastMessage[] = [];

  timer: Timer[] = [];

  duration: number = 309999000;

  hide = false;

  static get properties() {
    return {
      messages: {type: Array, Reflect: true},
      duration: {type: Number, Reflect: true},
      now: {type: Number, Reflect: true},
      hide: {type: Boolean, Reflect: true},
      timer: {type: Array, Reflect: true},
    };
  }

  get messagesTrigger() {
    if (!this.messages.length) {
      this.timer = [];
      return [];
    }

    while (this.messages.length > this.timer.length) {
      const index = this.timer.length;
      const duration = (this.messages[index].duration || this.duration) - 1;
      this.timer.push({time: new Date().getTime() + duration, index});
      setTimeout(() => {
        this.now = new Date().getTime();
      }, duration);
    }
    return this.messages;
  }

  getHeight(index: number) {
    if (this.getShow(index)) return 0;
    return this.shadowRoot.querySelectorAll('.hb-toast__position')[index]
      ?.clientHeight;
  }

  getShow(index: number) {
    return this.timer[index].time > this.now;
  }

  // getIndex(index: number) {
  //   return this.timer.filter((x) => x.time > this.now).findIndex(x => x.index === index)
  // }

  // visibleIcon(msg: string) {
  //   return msg.match(/\[!]/)
  // }

  // messageConverter(msg: string) {
  //   msg = msg.replace(/\\n/g, '\n')
  //   return msg.replace(/\[!]/g, '')
  // }
  getIconTemplate(icon: string) {
    let color = '--orange--600';
    if (icon.endsWith('info')) color = '--green--400';
    return html`<hb-icon
      class="hb-toast__content__icon"
      style="fill:var(${color})"
      icon=${icon}
      size=${Size.medium}
    ></hb-icon>`;
  }

  render() {
    return this.messagesTrigger.map(
      (x, i) =>
        html`<hb-transition
          style="margin-top: -${this.getHeight(i)}px;"
          class="hb-toast__position"
          type=${HbTransitionType.fade}
          ?show=${this.getShow(i)}
          ><hb-transition
            type=${HbTransitionType.bottomUpHeight}
            ?show=${this.getShow(i)}
            ><div class="hb-toast__content">
              ${this.getIconTemplate(x.icon)}
              <div class="hb-toast__content__text">${x.text}</div>
            </div></hb-transition
          ></hb-transition
        >`,
    );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-toast': HbToast;
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
