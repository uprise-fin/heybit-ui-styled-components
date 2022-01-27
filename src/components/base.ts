import { LitElement } from "lit";
export default class extends LitElement {
  static override shadowRootOptions = {
    ...LitElement.shadowRootOptions,
  };

  override connectedCallback() {
    super.connectedCallback();
    this.dataset.hbStyled = "true";
  }
}
