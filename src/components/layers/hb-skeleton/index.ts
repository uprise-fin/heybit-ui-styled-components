import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * @property length 스캘래톤 갯수
 * @csspart cell
 */

@customElement("hb-skeleton")
export class HbSkeleton extends Base {
  static override get styles() {
    return [require("../../../styles/layers/hb-skeleton/index.scss").default];
  }
  length = 1
  static get properties() {
    return {
      length: { type: Number, Reflect: true },
    };
  }

  render() {
    return Array(this.length).fill(null).map((_,i) => html`
      <div class="hb-skeleton__wall" part=${`cell-${i+1}`}></div>
    `)
    
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-skeleton": HbSkeleton;
  }
}
