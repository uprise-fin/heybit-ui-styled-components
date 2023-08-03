import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from '@/components/base';
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

@customElement('hb-chip')
export class HbChip extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  #color: string = '';

  get color() {
    return this.#color;
  }

  set color(value: string) {
    const oldVal = this.#color;
    this.#color = value;
    this.requestUpdate('color', oldVal);
  }

  static get properties() {
    return {
      color: { type: String, Reflect: true }
    };
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-chip': HbChip;
  }
}
