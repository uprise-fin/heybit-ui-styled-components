import CustomElement from "../custom-elements";

const HbInput = customElements.define(
  "hb-input",
  class extends CustomElement {
    template = require("./hb-input.hbs");
    css = require("./hb-input.scss").default;
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
    }
  }
);
export default HbInput;
