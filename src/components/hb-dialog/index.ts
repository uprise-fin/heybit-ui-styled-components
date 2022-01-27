import Base from "../base";
import { html } from "lit";
import { customElement, property } from "lit/decorators.js";
import { getElement } from "../../utils";

/**
 * An example element.
 *
 * @fires input 입력할때
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot slot--left - optional, 왼쪽 영역(아이콘)
 * @slot slot--right - optional, 오른쪽 영역(버튼)
 * @csspart slot--left
 * @csspart border
 * @csspart slot--right
 */

@customElement("hb-dialog")
export class HbDialog extends Base {
  static override get styles() {
    return [require("../../styles/dialog/index.scss").default];
  }

  @property()
  value!: string;

  override render() {
    return html`
      <div class="hb-dialog__wrap" id="wrap">
        <div class="hb-dialog__container" part="container">
          <button
            class="hb-dialog__close-btn"
            part="close-btn"
            id="close-btn"
          ></button>
          <slot name="header" part="header" class="hb-dialog__header"></slot>
          <slot name="content" part="content" class="hb-dialog__content"></slot>
          <slot name="footer" part="footer" class="hb-dialog__footer"></slot>
        </div>
      </div>
    `;
  }
  override connectedCallback() {
    super.connectedCallback();
    this.bindEvent();
  }
  async bindEvent() {
    // const a = this.shadowRoot;
    const wrapEl = await getElement<HTMLDivElement>(this.shadowRoot, "wrap");
    const closeBtnEl = await getElement<HTMLButtonElement>(
      this.shadowRoot,
      "close-btn"
    );
    console.log(this);
    wrapEl!.onanimationstart = () => this.onAnimationStart();
    wrapEl!.onanimationend = () => this.onAnimationEnd();
    closeBtnEl!.onclick = () => this.onHide();
  }
  onAnimationStart() {
    this.classList.add("animation");
  }
  onAnimationEnd() {
    this.classList.remove("animation");
  }
  onShow() {
    this.classList.add("open");
  }
  onHide() {
    this.classList.add("animation");
    this.classList.remove("open");
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-dialog": HbDialog;
  }
}
