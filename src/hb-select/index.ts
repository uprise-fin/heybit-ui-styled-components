import CustomElement from "../custom-elements";
const NAME = "hb-select";
customElements.get(NAME) ||
  customElements.define(
    NAME,
    class extends CustomElement {
      template = require(`./${NAME}.hbs`);
      css = require(`./${NAME}.scss`).default;
      sto = setTimeout(() => null, 0);
      properties = {
        id: {
          list: "list",
          label: "label",
        },
        slot: {
          label: "label",
          option: "option",
        },
      };
      options: {
        [value: string]: string;
      } = {};

      constructor() {
        super();
      }
      connectedCallback(): void {
        super.connectedCallback();
        this.tabIndex = 0;
        this.onfocus = () => this.onShow();
        this.onblur = () => {
          this.sto = setTimeout(() => this.onHide(), 0);
        };
        this.onEventBind();
      }
      async onEventBind() {
        const value = this.isAttributes.value;

        await this.getChildren();
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
        return Array.call(this, ...this.children);
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
        this.dispatchEvent(new Event("select", evt));
        if (this.isLabelEl.dataset.value === value) return;

        this.isOptionEls.forEach((x) => {
          if (x === element)
            return element.classList.add(this.isProperties.classList.selected);
          x.classList.remove(this.isProperties.classList.selected);
        });

        this.dispatchEvent(new Event("change", evt));
        this.isLabelEl.dataset.value = value;
        this.isLabelEl.dataset.key = key;
      }
      onShow() {
        clearTimeout(this.sto);
        const { width } = this.getBoundingClientRect();
        super.onShow();
        this.isListEl.style.width = `${width}px`;
      }
    }
  );
