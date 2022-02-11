import {HbButton} from "./index";
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

@customElement("hb-button--fab")
export class HbButtonFab extends HbButton {
  static override get styles() {
    return [require("../../../styles/forms/hb-button/fab.scss").default];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-button--fab": HbButtonFab;
  }
}
