import CustomElement from "../custom-elements";
const NAME = "hb-dialog";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;

      constructor() {
        super();
        this.properties = {
          id: {
            closeBtn: "close-btn",
            wrap: "wrap",
          },
        };
        super.render();
      }
      connectedCallback(): void {
        super.connectedCallback();
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
