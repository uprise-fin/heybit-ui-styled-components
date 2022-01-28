var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Base from '../../utils/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getElement } from '../../utils';
import style from '../../styles/dialog/index.scss';
/**
 * An example element.
 *
 * @fires input 입력할때
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot slot--left - optional, 왼쪽 영역(아이콘)
 * @slot slot--right - optional, 오른쪽 영역(버튼)
 * @csspart slot--left
 * @csspart border
 * @csspart slot--right
 */
let HbDialog = class HbDialog extends Base {
    static get styles() {
        return [style];
    }
    render() {
        return html `
      <div class="hb-dialog__wrap" id="wrap">
        <div class="hb-dialog__container" part="container">
          <button
            class="hb-dialog__close-btn"
            part="close-btn"
            id="close-btn"
          ></button>
          <slot name="header" part="header" class="hb-dialog__header"></slot>
          <slot name="content" part="content" class="hb-dialog__content"></slot>
          <slot name="footer" part="footer" class="hb-dialog__footer"></slot>
        </div>
      </div>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.bindEvent();
    }
    async bindEvent() {
        // const a = this.shadowRoot;
        const wrapEl = await getElement(this.shadowRoot, 'wrap');
        const closeBtnEl = await getElement(this.shadowRoot, 'close-btn');
        console.log(this);
        wrapEl.onanimationstart = () => this.onAnimationStart();
        wrapEl.onanimationend = () => this.onAnimationEnd();
        closeBtnEl.onclick = () => this.onHide();
    }
    onAnimationStart() {
        this.classList.add('animation');
    }
    onAnimationEnd() {
        this.classList.remove('animation');
    }
    onShow() {
        this.classList.add('open');
    }
    onHide() {
        this.classList.add('animation');
        this.classList.remove('open');
    }
};
__decorate([
    property()
], HbDialog.prototype, "value", void 0);
HbDialog = __decorate([
    customElement('hb-dialog')
], HbDialog);
export { HbDialog };
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
//# sourceMappingURL=index.js.map