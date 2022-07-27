import {HbTransitionType} from '@/components/atom/transition/type';
import {componentVariables} from '@/components/atom/variable';
import {Size} from '@/components/atom/variable/type';
// import style from '@/styles/molecule/toast/index.scss';
import {Base} from '@/components/base';
import {getElement} from '@/utils';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbIconName} from '../icon/type';
import {HbToastMessage, HbToastTheme} from './type';

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
    return [require('./style.scss').default];
  }

  now: number = 0;

  messages: HbToastMessage[] = [];

  timer: Timer[] = [];

  duration: number = 399000;

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
      this.getHeight(index);
    }
    return this.messages;
  }

  async getHeight(index: number) {
    if (index === this.messages.length - 1) {
      const element = await getElement(this.shadowRoot, `toast-${index}`);
      const height = element.scrollHeight;
      if (height)
        element.setAttribute(
          'style',
          `--transition__height--bottom-up-height: ${height}px`,
        );
    }
  }

  clean() {
    setTimeout(() => {
      this.timer = [];
      this.messages = [];
    }, 0);
  }

  getShow(index: number) {
    if (this.timer.every(x => x.time <= this.now)) this.clean();
    return this.timer[index]?.time > this.now;
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
  getIconTemplate(theme?: HbToastTheme) {
    if (Object.keys(HbToastTheme).includes(theme)) {
      const icon = componentVariables.toast[theme].icon as HbIconName;
      const color = componentVariables.toast[theme].color;
      return html`<hb-icon
        class="hb-toast__content__icon"
        style="--icon__color: ${color};"
        icon="${icon}"
        size=${Size.medium}
      ></hb-icon>`;
    }
  }

  render() {
    return this.messagesTrigger.map(
      (x, i) =>
        html`<hb-transition
          id="toast-${i}"
          class="hb-toast__position"
          type=${HbTransitionType.fade}
          ?show=${this.getShow(i)}
          ><hb-transition
            type=${HbTransitionType.bottomUpHeight}
            ?show=${this.getShow(i)}
            ><div class="hb-toast__content">
              ${this.getIconTemplate(x.theme)}
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
