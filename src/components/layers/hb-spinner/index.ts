import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * @csspart footer
 */

@customElement("hb-spinner")
export class HbSpinner extends Base {
  static override get styles() {
    return [require("../../../styles/layers/hb-spinner/index.scss").default];
  }

  override render() {
    return html`
      <span class="hb-spinner__icon hb-spinner__icon--inner-1"></span>
      <span class="hb-spinner__icon hb-spinner__icon--inner-2"></span>
      <span class="hb-spinner__icon hb-spinner__icon--inner-3"></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-spinner": HbSpinner;
  }
}
