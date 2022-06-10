import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

@customElement("hb-loading")
export class HbLoading extends Base {
  static override get styles() {
    return [require("../../../styles/atom/loading/index.scss").default];
  }
  width: string = '300px';
  height: string = '300px';
  // length = 1
  static get properties() {
    return {
      width: { type: String, Reflect: true },
      height: { type: String, Reflect: true },
    };
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-loading__wall" part=${`cell-${i+1}`}></div>
  //   `)
    
  // }

  render() {
    return html`
      <div class="hb-loading__wall" part="wall" style="width: ${this.width}; height: ${this.height};"></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-loading": HbLoading;
  }
}
