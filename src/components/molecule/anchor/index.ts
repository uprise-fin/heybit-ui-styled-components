import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '../../base';
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

@customElement('hb-anchor')
export class HbAnchor extends Base {
  static get styles() {
    return [require('@/styles/molecule/anchor.scss').default];
  }

  href = '';

  target = '';

  text: string;

  disabled = false;

  static get properties() {
    return {
      href: {type: String, Reflect: true},
      target: {type: String, Reflect: true},
      disabled: {type: Boolean, Reflect: true},
    };
  }

  async customConnectedCallback() {
    this.tabIndex = 0;
    this.onclick = (ev: Event) => {
      if (this.disabled) return;
      if (this.href) return this.route();
      this.dispatchEvent(new CustomEvent('event', ev));
    };
  }

  route() {
    const a = document.createElement('a');
    a.href = this.href;
    a.target = this.target || '_blank';
    a.rel = 'noreferer noopener';
    a.click();
    a.remove();
  }

  render() {
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-anchor': HbAnchor;
  }
}
