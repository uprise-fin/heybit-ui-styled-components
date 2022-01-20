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
      this.onanimationstart = () => this.onAnimationStart();
      this.onanimationend = () => this.onAnimationEnd();
      this.isCloseBtnEl.onclick = () => this.onHide();
    }
    get isCloseBtnEl() {
      return this.shadowRoot.getElementById(
        this.isProperties.id.closeBtn
      ) as HTMLButtonElement;
    }

    onHide() {
      this.classList.add(this.isProperties.classList.animation);
      super.onHide();
    }
  }
);
export default HbDialog;
