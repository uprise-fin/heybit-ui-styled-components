import CustomElement from "../custom-elements";
const NAME = "hb-select";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;
      sto = setTimeout(() => null, 0);
      optionsEls: HTMLElement[];
      childrenEls: HTMLElement[];
      labelEl: HTMLElement;
      listEl: HTMLElement;
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
      }
      connectedCallback(): void {
        super.connectedCallback();
        const value = this.isAttributes.value;
        this.logger("this.children", this.children);
        this.childrenEls = Array.call(null, ...this.children);
        this.optionsEls = this.childrenEls.filter(
          (x: HTMLElement) => x.slot === this.isProperties.slot.option
        );
        this.labelEl =
          this.childrenEls.filter(
            (x: HTMLElement) => x.slot === this.isProperties.slot.label
          )[0] || this.shadowRoot.getElementById(this.isProperties.id.label);
        this.listEl = this.shadowRoot.getElementById(
          this.isProperties.id.list
        ) as HTMLInputElement;
        this.tabIndex = 0;

        this.onfocus = () => this.onShow();
        this.onblur = () => {
          this.sto = setTimeout(() => this.onHide(), 0);
        };

        // this.labelEl.dataset.value = this.isAttributes.value;
        // this.labelEl.dataset.key = this.isAttributes.key;

        this.optionsEls.forEach((element: HTMLElement) => {
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
        this.logger(NAME, "connectedCallback", this.options);
        this.labelEl.dataset.value = value;
        this.labelEl.dataset.key = this.options[value];
      }
      onSelect(evt: Event) {
        this.logger(NAME, "onSelect", evt);
        const element = evt.target as HTMLElement;
        const { value, key } = element.dataset;

        this.onselect && this.onselect(evt);
        if (this.labelEl.dataset.value === value) return;

        this.optionsEls.forEach((x) => {
          if (x === element)
            return element.classList.add(this.isProperties.classList.selected);
          x.classList.remove(this.isProperties.classList.selected);
        });

        this.onchange && this.onchange(evt);
        this.labelEl.dataset.value = value;
        this.labelEl.dataset.key = key;
      }
      onShow() {
        clearTimeout(this.sto);
        const { width } = this.getBoundingClientRect();
        super.onShow();
        this.listEl.style.width = `${width}px`;
      }
    }
  );
