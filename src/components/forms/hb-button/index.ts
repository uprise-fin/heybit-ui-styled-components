import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
/**
 * @fires select 옵션을 선택할때 발생
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement("hb-button")
export class HbButton extends Base {
  static override get styles() {
    return [require("../../../styles/forms/hb-button/index.scss").default];
  }
  label = '';
  type="";
  size="";
  loading = false;
  disabled = false;
  placeholder = '비었습니다.'
  theme =  '';


  static get properties() {
    return {
      label: { type: String, Reflect: true },
      theme: { type: String, Reflect: true },
      size: { type: String, Reflect: true },
      type: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
    };
  }

  override render() {
    return html`
      <slot name="left--icon" class="hb-button__icon"></slot>
      <div class="hb-button__label">${this.label}</div>
      <slot name="right--icon" class="hb-button__icon"></slot>
      <hb-spinner class="hb-button__spinner" loading=${this.loading}></hb-spinner>
      <!-- <div class="hb-button__hb-spinner hb-spinner">
        <span class="hb-spinner__icon hb-spinner__icon--inner-1"></span>
        <span class="hb-spinner__icon hb-spinner__icon--inner-2"></span>
        <span class="hb-spinner__icon hb-spinner__icon--inner-3"></span>
      </div> -->
    `;
  }
  override async connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-button": HbButton;
  }
}
