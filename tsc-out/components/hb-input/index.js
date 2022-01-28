var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Base from '../../utils/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import style from '../../styles/form/input/index.scss';
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
let HbInput = class HbInput extends Base {
    static get styles() {
        return [style];
    }
    render() {
        return html `
      <slot name="left-slot" part="slot--left" class="hb-input__slot"></slot>
      <input
        id="input"
        class="hb-input__el"
        part="el"
        value="${this.value}"
        type="text"
      />
      <i class="hb-input__border" part="border"></i>
      <slot name="right-slot" part="slot--right" class="hb-input__slot"></slot>
    `;
    }
    connectedCallback() {
        super.connectedCallback();
        this.onfocus = () => {
            var _a;
            if (!this.inputEl)
                this.inputEl = (_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('input');
            this.value = this.inputEl.value;
        };
        this.onblur = (evt) => {
            if (this.value !== this.inputEl.value)
                this.dispatchEvent(new Event('change', evt));
        };
    }
};
__decorate([
    property()
], HbInput.prototype, "value", void 0);
HbInput = __decorate([
    customElement('hb-input')
], HbInput);
export { HbInput };
// import CustomElement from "../custom-elements";
// const NAME = "hb-input";
// customElements.get(NAME) ||
//   customElements.define(
//     NAME,
//     class extends CustomElement {
//       template = require(`./${NAME}.hbs`);
//       css = require(`./${NAME}.scss`).default;
//       value: string;
//       constructor() {
//         super();
//       }
//       connectedCallback(): void {
//         super.connectedCallback();
//         this.isInputEl.onfocus = () => {
//           this.value = this.isInputEl.value;
//         };
//         this.isInputEl.onblur = (evt: Event) => {
//           if (this.value !== this.isInputEl.value)
//             this.dispatchEvent(new Event("change", evt));
//         };
//       }
//       get isInputEl() {
//         return this.shadowRoot.getElementById("input") as HTMLInputElement;
//       }
//     }
//   );
//# sourceMappingURL=index.js.map