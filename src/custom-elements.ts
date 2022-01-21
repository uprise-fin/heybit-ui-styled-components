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

  protected logger(...str: any[]) {
    if (process.env.MODE)
      if (str instanceof Array)
        str.map((x) => console.log(x)) ? str.join("\n") : str;
      else console.log(str);
  }
  connectedCallback() {
    this.logger(this.tagName, "connectedCallback");
  }
  disconnectedCallback() {
    this.logger(this.tagName, "disconnectedCallback");
  }
  adoptedCallback() {
    this.logger(this.tagName, "adoptedCallback");
  }
  attributeChangedCallback() {
    this.logger(this.tagName, "attributeChangedCallback");
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
