import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * An example element.
 *
 * @fires input 입력할때
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @property has-error 오류가 있을 때
 * @slot slot--left - optional, 왼쪽 영역(아이콘)
 * @slot slot--right - optional, 오른쪽 영역(버튼)
 * @csspart slot--left
 * @csspart border
 * @csspart slot--right
 */

@customElement("hb-input")
export class HbInput extends Base {
  static override get styles() {
    return [require("../../../styles/forms/hb-input/index.scss").default];
  }
  inputEl!: HTMLInputElement;

  value = '';
  static get properties() {
    return {
      value: { type: String, Reflect: true },
    };
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-input__slot"></slot>
      <input
        id="input"
        class="hb-input__el"
        part="el"
        value="${this.value}"
        @keyup=${this.onKeyup}
        type="text"
      />
      <i class="hb-input__border" part="border"></i>
      <slot name="slot--right" part="slot--right" class="hb-input__slot"></slot>
    `
  }
  onKeyup() {
    if (this.value !== this.inputEl.value) this.onChange()
  }
  onChange() {
    this.value = this.inputEl.value;
    this.dispatchEvent(new Event("change"));
  }
  customConnectedCallback() {
    this.onfocus = () => {
      if (!this.inputEl)
        this.inputEl = this.shadowRoot?.getElementById(
          "input"
        ) as HTMLInputElement;
    };
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-input": HbInput;
  }
}

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
