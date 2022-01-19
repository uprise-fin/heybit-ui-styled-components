import CustomElement from "../custom-elements";

const HbSelect = customElements.define(
  "hb-select",
  class extends CustomElement {
    template = require("./hb-select.hbs");
    css = require("./hb-select.scss").default;
    sto: any;
    options: {
      [value: string]: string;
    } = {};

    constructor() {
      super();
      this.properties = {
        id: {
          list: "list",
          label: "label",
        },
        slot: {
          label: "label",
          option: "option",
        },
      };
      const value = this.isAttributes.value;
      this.tabIndex = 0;
      this.onfocus = () => this.onShow();
      this.onblur = () => {
        this.sto = setTimeout(() => this.onHide(), 0);
      };

      this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
      // this.isLabelEl.dataset.value = this.isAttributes.value;
      // this.isLabelEl.dataset.key = this.isAttributes.key;
      this.isOptionEls.forEach((element: HTMLElement) => {
        element.onkeyup = (evt: KeyboardEvent) => {
          if (evt.key === "Enter") {
            this.onSelect(evt);
            this.onHide();
          }
        };
        element.onclick = (evt: MouseEvent) => {
          this.onSelect(evt);
          this.onHide();
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

        if (element.dataset.value === value)
          element.classList.add(this.isProperties.classList.selected);

        this.options[element.dataset.value] = element.dataset.key;
      });
      this.isLabelEl.dataset.value = value;
      this.isLabelEl.dataset.key = this.options[value];
    }
    // get isInputEl() {
    //   return this.shadowRoot.getElementById("input") as HTMLInputElement;
    // }
    get isListEl() {
      return this.shadowRoot.getElementById(
        this.isProperties.id.list
      ) as HTMLInputElement;
    }
    // get islabelEl() {
    //   return this.shadowRoot.getElementById("label") as HTMLElement;
    // }
    get isChildren(): HTMLElement[] {
      return Array.call(null, ...this.children);
    }
    get isLabelEl(): HTMLElement {
      return (
        this.isChildren.filter(
          (x: HTMLElement) => x.slot === this.isProperties.slot.label
        )[0] || this.shadowRoot.getElementById(this.isProperties.id.label)
      );
    }
    get isOptionEls(): HTMLElement[] {
      return this.isChildren.filter(
        (x: HTMLElement) => x.slot === this.isProperties.slot.option
      );
    }
    onSelect(evt: Event) {
      const element = evt.target as HTMLElement;
      const { value, key } = element.dataset;

      this.onselect && this.onselect(evt);
      if (this.isLabelEl.dataset.value === value) return;

      this.isOptionEls.forEach((x) => {
        if (x === element)
          return element.classList.add(this.isProperties.classList.selected);
        x.classList.remove(this.isProperties.classList.selected);
      });

      this.onchange && this.onchange(evt);
      this.isLabelEl.dataset.value = value;
      this.isLabelEl.dataset.key = key;
    }
    onShow() {
      clearTimeout(this.sto);
      const { width } = this.getBoundingClientRect();
      this.classList.add(this.isProperties.classList.open);
      this.isListEl.style.width = `${width}px`;
    }
    onHide() {
      this.classList.remove(this.isProperties.classList.open);
    }
  }
);
export default HbSelect;
