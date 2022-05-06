import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
export enum type {
  text = 'text',
  number = 'number',
  password = 'password',
}
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
  inputEl?: HTMLInputElement;

  value = '';
  inputValue = '';
  decimal: number = 2;
  comma: number = 3;
  maxlength?: number;
  type: type = type.text;
  static get properties() {
    return {
      value: { type: String, Reflect: true },
      inputValue: { type: String, Reflect: true },
      type: { type: String, Reflect: true },
      maxlength: { type: Number, Reflect: true },
    };
  }

  get isType () {
    if (this.type === type.number) return type.text
    return this.type
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-input__slot"></slot>
      <input
        id="input"
        class="hb-input__el"
        part="el"
        value="${this.inputValue}"
        @input=${this.onInput}
        type=${this.isType}
        maxlength=${this.maxlength}
      />
      <i class="hb-input__border" part="border"></i>
      <slot name="slot--right" part="slot--right" class="hb-input__slot"></slot>
    `
  }
  onInput(ev: InputEvent) {
    if (this.type === type.number) { 
      const { data } = ev
      const ableData = Array(10).fill('').map((_,i) =>i + '').concat('.')
      if (data !== null && !ableData.includes(data)) this.inputEl.value = this.value
      else this.inputEl.value = this.toNumeric(this.inputEl.value)
    }
    if (this.inputValue !== this.inputEl.value) this.onChange(ev)
  }

  toNumeric(value: string, toNumber: boolean = false) {
    const req = new RegExp(`\\B(?=(\\d{${this.comma}})+(?!\\d))`, 'g')
    const dotIndex = value.indexOf('.')
    const hasDot = dotIndex > 0
    let decimal = ''
    if (hasDot) {
      decimal = value.substring(dotIndex + 1, dotIndex + 1 + this.decimal)
      value = value.substring(0, dotIndex)
    }
    value = value.replace(/[^0-9]/gi, '')
    if (!toNumber) value = value.replace(req, ',')
    return value + `${hasDot?'.':''}${decimal.replace(/[^0-9]/gi, '')}`
  }

  onChange(ev: InputEvent) {
    let value  = this.inputEl.value
    this.inputValue = value;
    if (this.type === type.number) value = this.toNumeric(value, true)
    this.value = value;
    this.setAttribute('value', value)
    this.dispatchEvent(new Event("change", ev));
  }
  
  async customConnectedCallback() {
    this.inputEl = await getElement(this.shadowRoot, 'input')
    this.inputValue = this.value
    if (this.type === type.number) this.inputEl.value = this.toNumeric(this.inputValue)
  }
  attributeChangedCallback(name: string, _: string, newVal: string) {
    if (name === 'value') {
      if (this.type === type.number) newVal = this.toNumeric(newVal)
      this.inputValue = newVal
      this.inputEl && (this.inputEl.value = newVal)
    }

    super.attributeChangedCallback(name, _, newVal);
  }
  // attributeChangedCallback(name: any, oldVal: any, newVal: any) {
  //   console.log('attribute change: ', name, newVal);
  //   // super.attributeChangedCallback(name, oldVal, newVal);
  // }
  // changeProperties() {
  //   console.log('djawkldjaw')
  // }
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
