import CustomElement from "../custom-elements";

const HbDialog = customElements.define(
  "hb-dialog",
  class extends CustomElement {
    template = require("./hb-dialog.hbs");
    css = require("./hb-dialog.scss").default;

    constructor() {
      super();
      this.properties = {
        id: {
          closeBtn: "close-btn",
        },
      };
      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
      this.isCloseBtnEl.onclick = () => this.onClose();
    }
    get isCloseBtnEl() {
      return this.shadowRoot.getElementById(
        this.isProperties.id.closeBtn
      ) as HTMLButtonElement;
    }
    onClose() {
      this.classList.remove(this.isProperties.classList.open);
    }
  }
);
export default HbDialog;
