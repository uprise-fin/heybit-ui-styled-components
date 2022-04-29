import { LitElement, _$LE } from "lit";

export default class extends LitElement {
  override connectedCallback() {
    super.connectedCallback();
    this.dataset.hbStyled = "true";
    // this.classList.add(this.tagName.toLowerCase())
    // console.log(, 'djwaldkaw')
  }

  
  static get themes() {
    return ['primary', 'secondary', 'tertiary', 'quaternary', 'quinary', 'senary']
  }
  static get size() {
    return ['large', 'medium', 'small']
  }

} 