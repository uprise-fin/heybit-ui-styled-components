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
          wrap: "wrap",
        },
      };
      super.render();
      this.isWrapEl.onanimationstart = () => this.onAnimationStart();
      this.isWrapEl.onanimationend = () => this.onAnimationEnd();
      this.isCloseBtnEl.onclick = () => this.onHide();
    }
    get isCloseBtnEl() {
      return this.shadowRoot.getElementById(
        this.isProperties.id.closeBtn
      ) as HTMLButtonElement;
    }
    get isWrapEl() {
      return this.shadowRoot.getElementById(
        this.isProperties.id.wrap
      ) as HTMLButtonElement;
    }

    onHide() {
      this.classList.add(this.isProperties.classList.animation);
      super.onHide();
    }
  }
);
export default HbDialog;
