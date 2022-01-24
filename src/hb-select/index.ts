import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import style from "./hb-select.scss";
// import CustomElement from "../custom-elements";
interface Attribute<T> {
  [key: string]: T;
}
/**
 * An example element.
 *
 * @fires count-changed - Indicates when the count changes
 * @slot - This element has a slot
 * @csspart button - The button
 */

@customElement("hb-select2")
export class HbSelect extends LitElement {
  static get styles() {
    return [style];
  }
  readonly _properties: Attribute<Attribute<string>> = {
    classList: {
      animation: "animation",
      selected: "selected",
      open: "open",
    },
  };

  protected logger(...str: any[]) {
    if (process.env.MODE)
      if (str instanceof Array)
        str.map((x) => console.log(x)) ? str.join("\n") : str;
      else console.log(str);
  }
  // disconnectedCallback() {}
  // adoptedCallback() {}
  // attributeChangedCallback() {}

  get isProperties(): any {
    return {
      ...this._properties,
      ...this.properties,
    };
  }

  get isAttributes(): Attribute<string> {
    // get isAttributes() {
    return this.getAttributeNames().reduce(
      (a, v) => ({
        ...a,
        [v]: this.getAttribute(v),
      }),
      {}
    );
  }
  async getChildren(timer?: number): Promise<HTMLElement[]> {
    const index = timer ? ++timer : 0;
    if (index > 10) return [];
    if (this.children.length === 0) {
      setTimeout(() => {
        return this.getChildren(index);
      }, 10 * index);
    }
    return Array.call(this, this.children);
  }
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

  override render() {
    return html`<slot
        id="label"
        part="label"
        name="label"
        class="hb-select__label hb-select__option"
      ></slot>
      <slot
        class="hb-select__list"
        part="list"
        id="list"
        name="option"
      ></slot>`;
  }
  connectedCallback(): void {
    this.tabIndex = 0;
    this.onfocus = () => this.onShow();
    this.onblur = () => {
      this.sto = setTimeout(() => this.onHide(), 0);
    };
    // this.onEventBind();
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
    this.classList.add(this.isProperties.classList.open);
    this.isListEl.style.width = `${width}px`;
  }

  onHide() {
    this.classList.remove(this.isProperties.classList.open);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-select2": HbSelect;
  }
}
