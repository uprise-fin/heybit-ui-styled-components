import {HbTransitionType} from '@/components/atom/transition/type';
import {Size} from '@/components/atom/variable/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '@/components/base';
import {HbHeaderMyMenu, HbHeaderNavi, HbHeaderUser} from './type';
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

@customElement('hb-header')
export class HbHeader extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  user: HbHeaderUser;

  sidemenu = false;

  gnb: HbHeaderNavi[];

  myMenu: HbHeaderMyMenu[];

  authMenu: HbHeaderNavi[];

  defaultMenu: HbHeaderNavi[];

  get isGnb() {
    if (this.gnb) return this.gnb;
  }

  get isMyMenu() {
    if (this.myMenu)
      return this.myMenu.filter(x => x.loggedIn === this.user?.loggedIn);
  }

  get isAuthMenu() {
    if (this.authMenu) return this.authMenu;
  }

  get isDefaultMenu() {
    if (this.defaultMenu) return this.defaultMenu;
  }

  static get properties() {
    return {
      sidemenu: {type: Boolean, Reflect: true},
      navigations: {type: Array, Reflect: true},
      gnb: {type: Array, Reflect: true},
      defaultMenu: {type: Array, Reflect: true},
      myMenu: {type: Array, Reflect: true},
      authMenu: {type: Array, Reflect: true},
      user: {type: Object, Reflect: true},
    };
  }

  get gnbTemplate() {
    return html`
      ${this.isGnb?.map(
        x =>
          html`<hb-anchor href=${x.href} target=${x.target} @event=${x.event}
            >${x.name}</hb-anchor
          >`,
      )}
    `;
  }

  get myMenuTemplate() {
    return html`
      ${this.isMyMenu?.map(
        x =>
          html`<hb-button @event=${x.event} theme=${x.theme} size=${x.size}
            >${x.name}</hb-button
          >`,
      )}
    `;
  }

  get authMenuTemplate() {
    return html`
      ${this.isAuthMenu?.map(
        x =>
          html`<hb-anchor href=${x.href} target=${x.target} @event=${x.event}
            >${x.name}</hb-anchor
          >`,
      )}
    `;
  }

  get defaultMenuTemplate() {
    return html`
      ${this.isDefaultMenu?.map(
        x =>
          html`<hb-anchor href=${x.href} target=${x.target} @event=${x.event}
            >${x.name}</hb-anchor
          >`,
      )}
    `;
  }

  onSideMenu() {
    this.sidemenu = !this.sidemenu;
  }

  render() {
    return html`<hb-responsive>
      <div slot="mobile" class="hb-header--mobile">
        <div class="hb-header--mobile__navibar">
          <hb-anchor @event=${this.onEvent}
            ><hb-icon
              icon=${HbIconName['graphic/heybit']}
              size=${Size.large}
              style="--icon__size__large: var(--header__logo__width);"
            ></hb-icon
          ></hb-anchor>
          <hb-button @event=${this.onSideMenu}
            ><hb-icon
              icon=${HbIconName['system/outline/menu-side']}
              size=${Size.medium}
            ></hb-icon
          ></hb-button>
        </div>
        <hb-transition
          class="hb-header--mobile__side-menu"
          ?show=${this.sidemenu}
          type=${HbTransitionType.fade}
        >
          <hb-transition
            ?show=${this.sidemenu}
            type=${HbTransitionType.rightLeft}
          >
            <div class="hb-header--mobile__side-menu__content">
              <div class="hb-header--mobile__side-menu__content__my">
                <strong>${this.user?.title}</strong>
                <hb-if ?value=${this.user?.loggedIn}>
                  <p>${this.user?.email}</p>
                  <div>${this.myMenuTemplate}</div>
                </hb-if>
                <hb-if ?value=${!this.user?.loggedIn}>
                  <div>${this.defaultMenuTemplate}</div>
                </hb-if>
              </div>
              <div class="hb-header--mobile__side-menu__content__menu">
                ${this.gnbTemplate}
              </div>
              <hb-if ?value=${this.user?.loggedIn}>
                <div class="hb-header--mobile__side-menu__content__auth">
                  ${this.authMenuTemplate}
                </div>
              </hb-if>
            </div>
          </hb-transition>
        </hb-transition>
      </div>
      <div slot="desktop" class="hb-header--desktop">
        <div class="hb-header--desktop__navibar">
          <hb-anchor @event=${this.onEvent}
            ><hb-icon
              icon=${HbIconName['graphic/heybit']}
              size=${Size.large}
              style="--icon__size__large: var(--header__logo__width);"
            ></hb-icon
          ></hb-anchor>
          ${this.gnbTemplate}
          <div>
            <hb-if ?value=${this.user?.loggedIn}>
              <hb-button @event=${this.onSideMenu}
                ><hb-icon
                  icon=${HbIconName['system/outline/menu-side']}
                  size=${Size.medium}
                ></hb-icon
              ></hb-button>
            </hb-if>
            <hb-if ?value=${!this.user?.loggedIn}>
              ${this.defaultMenuTemplate}
            </hb-if>
          </div>
        </div>
        <hb-transition
          class="hb-header--desktop__side-menu"
          ?show=${this.sidemenu}
          type=${HbTransitionType.fade}
        >
          <hb-transition
            ?show=${this.sidemenu}
            type=${HbTransitionType.topDown}
          >
            <div class="hb-header--desktop__side-menu__content">
              ${this.myMenuTemplate} ${this.authMenuTemplate}
            </div>
          </hb-transition>
        </hb-transition>
      </div>
    </hb-responsive>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-header': HbHeader;
  }
}
