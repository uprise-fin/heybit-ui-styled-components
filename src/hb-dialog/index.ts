import CustomElement from "../custom-elements";

const HbDialog = customElements.define(
  "hb-dialog",
  class extends CustomElement {
    template = require("./hb-dialog.hbs");
    css = require("./hb-dialog.scss").default;
    constructor() {
      super();
      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
    }
  }
);
export default HbDialog;
