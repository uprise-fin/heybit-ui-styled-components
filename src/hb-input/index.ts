import CustomElement from "../custom-elements";
const NAME = "hb-input";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;
      value: string;
      inputEl: HTMLInputElement;
      constructor() {
        super();
      }
      connectedCallback(): void {
        super.connectedCallback();
        this.inputEl = this.shadowRoot.getElementById(
          "input"
        ) as HTMLInputElement;
        this.inputEl.onfocus = () => {
          this.value = this.inputEl.value;
        };
        this.inputEl.onblur = (evt: Event) => {
          if (this.value !== this.inputEl.value)
            this.onchange && this.onchange(evt);
        };
      }
    }
  );
