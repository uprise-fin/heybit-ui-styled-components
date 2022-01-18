import CustomElement from "../custom-elements";

const HbInput = customElements.define(
  "hb-input",
  class extends CustomElement {
    template = require("./hb-input.hbs");
    css = require("./hb-input.scss").default;
    value = "";
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
      this.isInputEl.onfocus = () => {
        this.value = this.isInputEl.value;
      };
      this.isInputEl.onblur = (evt: Event) => {
        if (this.value !== this.isInputEl.value)
          this.onchange && this.onchange(evt);
      };
    }
    get isInputEl() {
      return this.shadowRoot.getElementById("input") as HTMLInputElement;
    }
  }
);
export default HbInput;
