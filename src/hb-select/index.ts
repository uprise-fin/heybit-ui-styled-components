import CustomElement from "../custom-elements";

const HbSelect = customElements.define(
  "hb-select",
  class extends CustomElement {
    template = require("./hb-select.hbs");
    css = require("./hb-select.scss").default;
    sto: any;
    constructor() {
      super();
      this.tabIndex = 0;
      this.onfocus = () => this.onShow();
      this.onblur = () => {
        this.sto = setTimeout(() => this.onHide(), 0);
      };

      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
      this.isOptionEls.forEach((element: HTMLElement, i: number) => {
        element.onclick = (evt: Event) => {
          this.onSelect(evt);
        };
        element.onfocus = () => {
          clearTimeout(this.sto);
          this.onShow();
        };
        element.onblur = () => {
          this.sto = setTimeout(() => {
            this.onHide();
          }, 0);
        };
      });
    }
    // get isInputEl() {
    //   return this.shadowRoot.getElementById("input") as HTMLInputElement;
    // }
    get isListEl() {
      return this.shadowRoot.getElementById("list") as HTMLInputElement;
    }
    get isLabelEl() {
      return this.shadowRoot.getElementById("label") as HTMLElement;
    }
    get isOptionEls(): HTMLElement[] {
      return Array.call(null, ...this.children);
    }
    onSelect(evt: Event) {
      const element = evt.target as HTMLElement;
      const { value, key } = element.dataset;
      this.isLabelEl.dataset.value = value;
      this.isLabelEl.dataset.key = key;
      // this.isInputEl.value = value;
      this.isOptionEls.forEach((x) => {
        if (x === element) return element.classList.add("selected");
        x.classList.remove("selected");
      });
      this.onchange && this.onchange(evt);
      // this.onToggle();
    }
    // onToggle() {
    //   if (this.classList.contains("open")) return this.classList.remove("open");
    //   this.classList.add("open");
    //   const { width } = this.getBoundingClientRect();
    //   this.isListEl.style.width = `${width}px`;
    // }
    onShow() {
      clearTimeout(this.sto);
      this.classList.add("open");
      const { width } = this.getBoundingClientRect();
      this.isListEl.style.width = `${width}px`;
    }
    onHide() {
      console.log("33333");
      this.classList.remove("open");
    }
  }
);
export default HbSelect;
