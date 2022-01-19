export default class CustomElement extends HTMLElement {
  css: any;
  template: any;
  readonly _properties: { [group: string]: { [key: string]: string } } = {
    classList: {
      selected: "selected",
      open: "open",
    },
  };
  properties: { [group: string]: { [key: string]: string } };
  constructor() {
    super();
    this.setAttribute("data-styled", "true");
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

  get isAttributes(): { [key: string]: string } {
    // get isAttributes() {
    return this.getAttributeNames().reduce(
      (a, v) => ({
        ...a,
        [v]: this.getAttribute(v),
      }),
      {}
    );
  }
}
