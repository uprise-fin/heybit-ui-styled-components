interface Attribute<T> {
  [key: string]: T;
}
export default class CustomElement extends HTMLElement {
  readonly css: any;
  readonly template: any;
  readonly _properties: Attribute<Attribute<string>> = {
    classList: {
      animation: "animation",
      selected: "selected",
      open: "open",
    },
  };
  properties: { [group: string]: { [key: string]: string } };
  constructor() {
    super();
  }

  protected logger(...str: any[]) {
    if (process.env.MODE)
      if (str instanceof Array)
        str.map((x) => console.log(x)) ? str.join("\n") : str;
      else console.log(str);
  }
  connectedCallback() {
    this.render();
  }
  // disconnectedCallback() {}
  // adoptedCallback() {}
  // attributeChangedCallback() {}

  get isProperties() {
    return {
      ...this._properties,
      ...this.properties,
    };
  }
  get isStyles() {
    return `<style>${this.css}</style>`;
  }

  get isTemplate() {
    return this.template({ ...this.isAttributes });
  }

  get isInnerHTML() {
    return this.isStyles + this.isTemplate;
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
    return Array.call(this, this.children as HTMLCollection);
  }
  render() {
    this.attachShadow({ mode: "open" }).innerHTML = this.isInnerHTML;
    this.dataset.hbStyled = "true";
  }
  onAnimationStart() {
    this.classList.add(this.isProperties.classList.animation);
  }
  onAnimationEnd() {
    this.classList.remove(this.isProperties.classList.animation);
  }
  onShow() {
    this.classList.add(this.isProperties.classList.open);
  }
  onHide() {
    this.classList.remove(this.isProperties.classList.open);
  }
}
