export default class CustomElement extends HTMLElement {
  css: any;
  template: any;
  events: any;
  constructor() {
    super();
    this.setAttribute("data-styled", "true");
  }
  get isStyles() {
    return `<style>${this.css}</style>`;
  }

  get isTemplate() {
    return this.template({ ...this.isAttributes, ...this.events });
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
