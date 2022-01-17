import CustomElement from "../custom-elements";

const HbSelect = customElements.define(
  "hb-select",
  class extends CustomElement {
    template = require("./hb-select.hbs");
    css = require("./hb-select.scss").default;
    events = {
      onclick: "",
    };
    constructor() {
      super();
      this.attachShadow({ mode: "closed" }).innerHTML = this.isInnerHTML;
    }
  }
);
export default HbSelect;
