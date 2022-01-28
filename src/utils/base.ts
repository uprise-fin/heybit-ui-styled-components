import { LitElement } from "lit";

export default class extends LitElement {
  override connectedCallback() {
    super.connectedCallback();
    this.dataset.hbStyled = "true";
  }
}
