import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getChildren } from "../utils";
import style from "./hb-select.scss";
// import CustomElement from "../custom-elements";

/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement("hb-select")
export class HbSelect extends LitElement {
  static override get styles() {
    return [style];
  }

  @property()
  width!: string;
  @property()
  value!: string;

  sto = setTimeout(() => {}, 0);
  optionEls!: HTMLElement[];
  labelEl!: HTMLElement;
  // readonly _properties: Attribute<Attribute<string>> = {
  //   classList: {
  //     animation: "animation",
  //     selected: "selected",
  //     open: "open",
  //   },
  // };

  // protected logger(...str: any[]) {
  //   if (process.env.MODE)
  //     if (str instanceof Array)
  //       str.map((x) => console.log(x)) ? str.join("\n") : str;
  //     else console.log(str);
  // }
  // // disconnectedCallback() {}
  // // adoptedCallback() {}
  // // attributeChangedCallback() {}

  // get isProperties(): any {
  //   return {
  //     ...this._properties,
  //     ...this.properties,
  //   };
  // }

  // get isAttributes(): Attribute<string> {
  //   // get isAttributes() {
  //   return this.getAttributeNames().reduce(
  //     (a, v) => ({
  //       ...a,
  //       [v]: this.getAttribute(v),
  //     }),
  //     {}
  //   );
  // }
  // async getChildren(timer?: number): Promise<HTMLElement[]> {
  //   const index = timer ? ++timer : 0;
  //   if (index > 10) return [];
  //   if (this.children.length === 0) {
  //     setTimeout(() => {
  //       return this.getChildren(index);
  //     }, 10 * index);
  //   }
  //   return Array.call(this, this.children);
  // }
  // sto = setTimeout(() => null, 0);
  // properties = {
  //   id: {
  //     list: "list",
  //     label: "label",
  //   },
  //   slot: {
  //     label: "label",
  //     option: "option",
  //   },
  // };
  // options: {
  //   [value: string]: string;
  // } = {};

  override render() {
    return html`<slot
        id="label"
        part="label"
        name="label"
        class="hb-select__label hb-select__option"
      ></slot>
      <slot
        class="hb-select__list"
        @click="${this.onSelect}"
        style="width: ${this.width}px"
        part="list"
        id="list"
        name="option"
      ></slot>`;
  }
  override connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.onfocus = () => this.onShow();
    this.onblur = () => {
      this.sto = setTimeout(() => this.onHide(), 0);
    };
    this.bindEvents();
  }
  async bindEvents() {
    const children = await getChildren(this.children);
    let label;
    this.labelEl =
      children.filter((x) => x.slot === "label")[0] ||
      this.shadowRoot?.getElementById("label");
    this.optionEls = children.filter((x) => x.slot === "option");
    this.optionEls.forEach((element: HTMLElement) => {
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

      if (element.dataset.value === this.value) {
        label = element.dataset.label;
        element.classList.add("selected");
      }
    });
    this.labelEl.dataset.value = this.value;
    this.labelEl.dataset.label = label;
    console.log(this.labelEl.dataset);
  }
  // connectedCallback(): void {
  //   super.connectedCallback();
  //   this.tabIndex = 0;
  //   this.onfocus = () => this.onShow();
  //   this.onblur = () => {
  //     this.sto = setTimeout(() => this.onHide(), 0);
  //   };
  //   // this.onEventBind();
  // }
  // async onEventBind() {
  //   const value = this.isAttributes.value;

  //   await this.getChildren();
  //   this.isOptionEls.forEach((element: HTMLElement) => {
  //     element.onkeyup = (evt: KeyboardEvent) => {
  //       if (evt.key === "Enter") {
  //         this.onSelect(evt);
  //         this.onHide();
  //       }
  //     };
  //     element.onclick = (evt: MouseEvent) => {
  //       this.onSelect(evt);
  //       this.onHide();
  //     };
  //     element.onfocus = () => {
  //       clearTimeout(this.sto);
  //       this.onShow();
  //     };
  //     element.onblur = () => {
  //       this.sto = setTimeout(() => {
  //         this.onHide();
  //       }, 0);
  //     };

  //     if (element.dataset.value === value)
  //       element.classList.add(this.isProperties.classList.selected);

  //     this.options[element.dataset.value] = element.dataset.key;
  //   });
  //   this.isLabelEl.dataset.value = value;
  //   this.isLabelEl.dataset.key = this.options[value];
  // }
  // // get isInputEl() {
  // //   return this.shadowRoot.getElementById("input") as HTMLInputElement;
  // // }
  // get isListEl() {
  //   return this.shadowRoot.getElementById(
  //     this.isProperties.id.list
  //   ) as HTMLInputElement;
  // }
  // // get islabelEl() {
  // //   return this.shadowRoot.getElementById("label") as HTMLElement;
  // // }
  // get isChildren(): HTMLElement[] {
  //   return Array.call(this, ...this.children);
  // }
  // get isLabelEl(): HTMLElement {
  //   return (
  //     this.isChildren.filter(
  //       (x: HTMLElement) => x.slot === this.isProperties.slot.label
  //     )[0] || this.shadowRoot.getElementById(this.isProperties.id.label)
  //   );
  // }
  // get isOptionEls(): HTMLElement[] {
  //   return this.isChildren.filter(
  //     (x: HTMLElement) => x.slot === this.isProperties.slot.option
  //   );
  // }

  onSelect(evt: Event) {
    const element = evt.target as HTMLElement;
    const { value, label } = element.dataset;
    if (this.value === value) return;

    this.optionEls.forEach((x) => {
      if (x === element) return element.classList.add("selected");
      x.classList.remove("selected");
    });

    this.dispatchEvent(new Event("change", evt));
    this.value = value!;
    if (this.labelEl) {
      this.labelEl.dataset.value = value;
      this.labelEl.dataset.label = label;
    }
    // this.dispatchEvent(new Event("select", evt));
    // value && (this.value = value);
    // label && (this.label = label);
    // this.dispatchEvent(new Event("change", evt));
  }
  onShow() {
    clearTimeout(this.sto);
    const { width } = this.getBoundingClientRect();
    this.width = `${width}`;
    this.classList.add("open");
  }

  onHide() {
    this.classList.remove("open");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-select": HbSelect;
  }
}
