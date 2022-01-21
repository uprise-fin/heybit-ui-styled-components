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
    this.logger("커스텀 엘리먼트 작동완료");
  }

  protected logger(...str: string[]) {
    if (process.env.MODE)
      console.info(str instanceof Array ? str.join("\n") : str);
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
