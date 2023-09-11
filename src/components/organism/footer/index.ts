import '@/components/atom/icon';
import '@/components/atom/responsive';
import '@/components/molecule/anchor';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import type { HbFooterChildren, HbFooterMenu, HbFooterSocialMenu } from './type';
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

  menu: HbFooterMenu[] = [
    {
      name: '이용약관',
      children: [
        {
          name: '서비스 이용약관',
          target: '_blank',
          href: 'https://r.heybit.io/c/policy-ko/'
        },
        {
          name: '개인정보 처리방침',
          target: '_blank',
          href: 'https://r.heybit.io/c/privacy-ko/',
          accent: true
        }
      ]
    },
    {
      name: '고객지원',
      children: [
        { name: '서비스 문의', target: '_blank', href: 'mailto:help@heybit.io' },
        { name: '사업제휴', target: '_blank', href: 'mailto:business@heybit.io' }
      ]
    },
    {
      name: '팀',
      children: [
        {
          name: '채용',
          target: '_blank',
          href: 'https://uprise.career.greetinghr.com/'
        }
      ]
    },
    {
      name: '관련 사이트',
      children: [{ name: 'Heybit Global', target: '_blank', href: 'https://www.heybit.com/en' }]
    }
  ];

  socialMenu: HbFooterSocialMenu[] = [
    {
      icon: 'system/filled/logo-facebook',
      target: '_blank',
      href: 'https://r.heybit.io/c/facebook/'
    },
    {
      icon: 'system/filled/logo-naver',
      target: '_blank',
      href: 'https://m.post.naver.com/my.nhn?memberNo=40921089'
    },
    {
      icon: 'system/filled/logo-twitter',
      target: '_blank',
      href: 'https://twitter.com/heybit_io/'
    },
    {
      icon: 'system/filled/logo-instagram',
      target: '_blank',
      href: 'https://www.instagram.com/heybit_io/'
    }
  ];

  upriseInfo = [
    '사업자등록번호: 596-87-01059',
    '대표이사 이충엽',
    '서울시 강남구 강남대로 374 케이스퀘어2, 13층',
    '통신판매업신고: 제2022-서울강남-04072호'
  ];

  company = '업라이즈(주)';

  copy = `© ${new Date().getFullYear()} Uprise, Inc. all rights reserved.`;

  tel = '대표전화 1577-9069';

  static get properties() {
    return {
      menu: { type: Array, reflect: true },
      socialMenu: { type: Array, reflect: true },
      upriseInfo: { type: Array, reflect: true },
      copy: { type: String, reflect: true },
      tel: { type: String, reflect: true }
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
            ><hb-icon size="medium" icon=${x.icon}></hb-icon
          ></hb-anchor>`
      )}
    `;
  }

  get upriseInfoTemplate() {
    return html`
      ${[...this.upriseInfo, this.tel].map(
        (info) => html`<span class="hb-footer__info">${info}</span>`
      )}
    `;
  }

  render() {
    return html`
      <div class="hb-footer">
        <hb-responsive>
          <footer slot="mobile" part="mobile" class="hb-footer--mobile">${this.footer}</footer>

          <footer slot="desktop" part="desktop" class="hb-footer--desktop">${this.footer}</footer>
        </hb-responsive>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-footer': HbFooter;
  }
}
