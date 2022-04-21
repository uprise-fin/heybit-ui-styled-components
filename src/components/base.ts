import { LitElement } from "lit";

export default class extends LitElement {
  override connectedCallback() {
    super.connectedCallback();
    this.dataset.hbStyled = "true";
  }
  static get themes() {
    return ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary']
  }
  static get size() {
    return ['large', 'medium', 'small']
  }

}
