import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import {
  type HbFooterChildren,
  initialFooterCopy,
  initialFooterMenu,
  initialFooterSocialMenu,
  initialFooterTell,
  initialFooterUpriseInfo,
  initialFooterCompany
} from './type';
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

  menu = initialFooterMenu;

  socialMenu = initialFooterSocialMenu;

  upriseInfo = initialFooterUpriseInfo;

  company = initialFooterCompany;

  copy = initialFooterCopy;

  tell = initialFooterTell;

  static get properties() {
    return {
      menu: { type: Array, Reflect: true },
      socialMenu: { type: Array, Reflect: true },
      upriseInfo: { type: Array, Reflect: true },
      copy: { type: String, Reflect: true },
      tell: { type: String, Reflect: true }
    };
  }

  get footer() {
    return html`
      <div class="hb-footer__routes">
        <nav class="hb-footer__menu">${this.menuTemplate}</nav>
        <div class="hb-footer__social">${this.socialMenuTemplate}</div>
      </div>
      <article class="hb-footer__text">
        <h1 class="hb-footer__title">${this.company}</h1>
        <address class="hb-footer__address">${this.upriseInfoTemplate}</address>
        <p class="hb-footer__copy">${this.copy}</p>
      </article>
    `;
  }

  get menuTemplate() {
    return html`<ul class="info-list">
      ${this.menu?.map(
        ({ name, children }) =>
          html`<li class="info-list__item">
            <strong class="info-list__title">${name}</strong>
            ${this.childrenTemplate(children)}
          </li>`
      )}
    </ul>`;
  }

  childrenTemplate(children: HbFooterChildren[]) {
    return html`<ul class="info-list info-list--children">
      ${children.map(
        (child) => html`<li class="info-list__item info-list__item--children">
          <hb-anchor
            class=${child.accent ? 'hb-footer__accent' : ''}
            href=${child.href}
            target=${child.target}
            @event=${child.event}
          >
            ${child.name}
          </hb-anchor>
        </li>`
      )}
    </ul>`;
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
    return html`
      ${[...this.upriseInfo, this.tell].map(
        (info) => html`<span class="hb-footer__info">${info}</span>`
      )}
    `;
  }

  render() {
    return html`
      <hb-responsive>
        <footer slot="mobile" class="hb-footer hb-footer--mobile">${this.footer}</footer>

        <footer slot="desktop" class="hb-footer hb-footer--desktop">${this.footer}</footer>
      </hb-responsive>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-footer': HbFooter;
  }
}
