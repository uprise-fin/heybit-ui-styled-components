import { html } from "lit";
import { customElement } from "lit/decorators.js";
import {Base} from "../../base";
/**
 * @fires change 값이 변경될때 발생
 * @property attributeSync true 시 value값이 arrtibute 싱크됨
 * @property fixed true 시 overflow에서 넘어감
 * @property value 기본 값
 * @property options Options[] 옵션
 * @property search 서치 온오프
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement("hb-anchor")
export class HbAnchor extends Base {
  static override get styles() {
    return [require("../../../styles/molecule/anchor/index.scss").default];
  }
  href = ''
  target = '_blank'
  text: string;

  static get properties() {
    return {
      href: { type: String, Reflect: true },
      target: { type: String, Reflect: true },
    };
  }

  render() {
    return this.href 
      ? 
      html`<a class="hb-anchor__el" href=${this.href} target=${this.target} rel="noreferer noopener"><slot></slot></a>`
      :
      html`<a class="hb-anchor__el"><slot></slot></a>`
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-anchor": HbAnchor;
  }
}
