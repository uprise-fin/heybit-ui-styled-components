interface Attribute<T> {
  [key: string]: T;
}

export default class CustomElement extends HTMLElement {
  css: any;
  template: any;
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

  protected logger(...str: string[]) {
    if (process.env.MODE)
      console.info(str instanceof Array ? str.join("\n") : str);
  }
  connectedCallback() {
    this.logger(this.tagName, "connectedCallback");
    this.render();
  }
  disconnectedCallback() {
    this.logger(this.tagName, "connectedCallback");
  }
  adoptedCallback() {
    this.logger(this.tagName, "adoptedCallback");
  }
  attributeChangedCallback() {
    this.logger(this.tagName, "adoptedCallback");
  }

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
