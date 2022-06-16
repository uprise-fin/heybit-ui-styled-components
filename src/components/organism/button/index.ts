import {Base, size, theme } from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { transitionType } from "../../atom/transition";
export enum hbButtonType {
  "block" = "block",
  "inline" = "inline",
  "fab" = "fab",
  "custom" = "custom",
}
/**
 * @fires event 클릭할때
 * @property theme
 * @property size
 * @property type
 * @property loading
 * @property disabled
 * @slot slot--left - optional, slot--left부분을 커스텀할때 사용
 * @slot slot--right - optional, slot--right부분을 커스텀할때 사용
 * @slot 내용 컨텐츠 영역
 * @csspart label
 * @csspart list
 */

@customElement("hb-button")
export class HbButton extends Base {
  static override get styles() {
    return [require("../../../styles/organism/button/index.scss").default];
  }
  type: hbButtonType;
  size: size=size.large;
  loading = false;
  disabled = false;
  theme: theme = theme.primary;

  static get properties() {
    return {
      theme: { type: String, Reflect: true },
      size: { type: String, Reflect: true },
      type: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
    };
  }

  render() {
    return html`
      <slot name="slot--left" part="slot--left" class="hb-button__slot hb-button__slot--left"></slot>
      <div class="hb-button__label">
        ${
          this.loading ? html`
          <hb-transition class="hb-button__label__transition" type=${transitionType.fade} ?show=${this.loading}>
            <hb-spinner theme=${this.theme} size=${this.size}></hb-spinner>
          </hb-transition> 
          ` : html`
          <hb-transition class="hb-button__label__transition" type=${transitionType.fade} ?show=${!this.loading}>
            <slot part="label"></slot>
          </hb-transition> 
          `
        }
      </div>
      <slot name="slot--right" part="slot--right" class="hb-button__slot hb-button__slot--right"></slot>
    `
  }
  async customConnectedCallback() {
    this.tabIndex = 0;
    this.onclick = (ev: Event) => {
      if (this.loading || this.disabled) return
      this.dispatchEvent(new CustomEvent("event", ev));
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-button": HbButton;
  }
}
 