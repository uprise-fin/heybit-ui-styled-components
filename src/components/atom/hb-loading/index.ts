import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hb-loading")
export class HbLoading extends Base {
  static override get styles() {
    return [require("../../../styles/atom/hb-loading/index.scss").default];
  }
  // length = 1
  // static get properties() {
  //   return {
  //     length: { type: Number, Reflect: true },
  //   };
  // }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-loading__wall" part=${`cell-${i+1}`}></div>
  //   `)
    
  // }

  render() {
    return html`
      <div class="hb-loading__wall" part="wall"></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-loading": HbLoading;
  }
}
