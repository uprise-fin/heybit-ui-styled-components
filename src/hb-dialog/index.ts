import CustomElement from "../custom-elements";
const NAME = "hb-dialog";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;
      wrapEl: HTMLElement;
      closeBtnEl: HTMLElement;
      constructor() {
        super();
        this.properties = {
          id: {
            closeBtn: "close-btn",
            wrap: "wrap",
          },
        };
      }
      connectedCallback(): void {
        super.connectedCallback();
        this.wrapEl = this.shadowRoot.getElementById(
          this.isProperties.id.wrap
        ) as HTMLButtonElement;
        this.closeBtnEl = this.shadowRoot.getElementById(
          this.isProperties.id.closeBtn
        ) as HTMLButtonElement;
        this.wrapEl.onanimationstart = () => this.onAnimationStart();
        this.wrapEl.onanimationend = () => this.onAnimationEnd();
        this.closeBtnEl.onclick = () => this.onHide();
      }

      onHide() {
        this.classList.add(this.isProperties.classList.animation);
        super.onHide();
      }
    }
  );
