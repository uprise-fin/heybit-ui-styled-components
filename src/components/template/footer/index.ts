import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HbFooterMenu, HbFooterSocialMenu } from './type';
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

@customElement('hb-footer')
export class HbFooter extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  menu: HbFooterMenu[];

  socialMenu: HbFooterSocialMenu[];

  upriseInfo: string[];

  copy: string;

  tell: string;

  static get properties() {
    return {
      menu: { type: Array, Reflect: true },
      socialMenu: { type: Array, Reflect: true },
      upriseInfo: { type: Array, Reflect: true },
      copy: { type: String, Reflect: true },
      tell: { type: String, Reflect: true }
    };
  }

  get menuTemplate() {
    return html`
      ${this.menu?.map(
        (x) =>
          html`<hb-anchor
            class=${x.accent ? 'hb-footer__accent' : ''}
            href=${x.href}
            target=${x.target}
            @event=${x.event}
            >${x.name}</hb-anchor
          >`
      )}
    `;
  }

  get socialMenuTemplate() {
    return html`
      ${this.socialMenu?.map(
        (x) =>
          html`<hb-anchor href=${x.href} target=${x.target} @event=${x.event}
            ><hb-icon size=${Size.medium} icon=${x.icon}></hb-icon
          ></hb-anchor>`
      )}
    `;
  }

  get upriseInfoTemplate() {
    return html` ${this.upriseInfo?.concat(this.tell).map((x) => html`<p>${x}</p>`)} `;
  }

  render() {
    return html`
      <hb-responsive>
        <div slot="mobile" class="hb-footer--mobile">
          <div class="hb-footer--mobile__menu">${this.menuTemplate}</div>
          <div class="hb-footer--mobile__social">${this.socialMenuTemplate}</div>
          <div class="hb-footer--mobile__text">${this.tell}<br />${this.copy}</div>
        </div>
        <div slot="desktop" class="hb-footer--desktop">
          <div class="hb-footer--desktop__routes">
            <div class="hb-footer--desktop__menu">${this.menuTemplate}</div>
            <div class="hb-footer--desktop__social">${this.socialMenuTemplate}</div>
          </div>
          <div class="hb-footer--desktop__text">${this.upriseInfoTemplate}</div>
        </div>
      </hb-responsive>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-footer': HbFooter;
  }
}
