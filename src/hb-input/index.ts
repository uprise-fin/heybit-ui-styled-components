import CustomElement from "../custom-elements";
const NAME = "hb-input";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;
      value: string;
      constructor() {
        super();
      }
      connectedCallback(): void {
        super.connectedCallback();
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
