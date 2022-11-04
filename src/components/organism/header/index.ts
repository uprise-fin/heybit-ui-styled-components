import { HbTransitionType } from '@/components/atom/transition/type';
import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { HbIconName } from '@/components/atom/icon/type';
import { HbSkeletonType } from '@/components/molecule/skeleton/type';
import { HbButtonType, HbButtonTheme } from '@/components/molecule/button/type';
import { HbAnchor } from '@/module';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { HbHeaderMyMenu, HbHeaderNavi, HbHeaderUser } from './type';
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

  loggedin: boolean;

  pending: boolean;

  sidemenu: boolean;

  gnb: HbHeaderNavi[];

  myMenu: HbHeaderMyMenu[];

  authMenu: HbHeaderNavi[];

  defaultMenu: HbHeaderNavi[];

  get userName() {
    const name = this.user?.name;
    if (this.loggedin && name) return `${name}님 `;
    return '';
  }

  get userEmail() {
    const email = this.user?.email;
    if (this.loggedin && email) return `${email}`;
    return '';
  }

  get isGnb() {
    if (this.gnb) return this.gnb;
  }

  isActive(href = '') {
    return href && location.pathname.startsWith(href) ? ' active' : '';
  }

  get isMyMenu() {
    if (this.myMenu) return this.myMenu;
  }

  get isAuthMenu() {
    if (this.authMenu) return this.authMenu;
  }

  get isDefaultMenu() {
    if (this.defaultMenu) return this.defaultMenu;
  }

  static get properties() {
    return {
      sidemenu: { type: Boolean, Reflect: true },
      loggedin: { type: Boolean, Reflect: true },
      pending: { type: Boolean, Reflect: true },
      navigations: { type: Array, Reflect: true },
      gnb: { type: Array, Reflect: true },
      defaultMenu: { type: Array, Reflect: true },
      myMenu: { type: Array, Reflect: true },
      authMenu: { type: Array, Reflect: true },
      user: { type: Object, Reflect: true }
    };
  }

  get gnbTemplateForDesktop() {
    return html`
      ${this.isGnb?.map(
        (x) =>
          html`<hb-anchor
            class="hb-anchor${this.isActive(x.href)}"
            href=${x.href}
            target=${x.target}
            @event=${x.event}
            @mouseenter=${this.onEnterGroup}
            @mouseleave=${this.onLeaveGroup}
            >${x.name}${x.chip
              ? html`<hb-img
                  class="hb-header__chip"
                  alt=${x.chip.alt}
                  style="--background: ${x.chip.background}"
                  src=${x.chip.src}
                  loadingWidth=${26}
                />`
              : ''}${x.group
              ? html`<hb-icon
                    icon=${HbIconName['system/outline/arrow-dropdown']}
                    size=${Size.xsmall}
                  ></hb-icon>
                  <div
                    class="hb-header__group-menu"
                    @mouseenter=${this.onEnterGroup}
                    @mouseleave=${this.onLeaveGroup}
                  >
                    ${x.group.map(
                      (y) => html`
                        <hb-anchor
                          class="hb-header__group-menu__item${this.isActive(x.href)}"
                          href=${y.href}
                          target=${y.target}
                          @event=${y.event}
                          ><strong>${y.name}</strong>
                          <p>${y.desc}</p></hb-anchor
                        >
                      `
                    )}
                    <i class="hb-header__group-menu__layer"></i>
                    <i class="hb-header__group-menu__tip"></i>
                  </div>`
              : ''}</hb-anchor
          >`
      )}
    `;
  }

  get gnbTemplate() {
    return html`
      ${this.isGnb?.map(
        (x) =>
          html`<hb-anchor
            class="hb-anchor"
            href=${x.group ? '' : x.href}
            target=${x.target}
            @event=${x.event}
            @click=${x.group ? this.onClickGroup : null}
            >${x.name}${x.chip
              ? html`<hb-img
                  class="hb-header__chip"
                  alt=${x.chip.alt}
                  style="--background: ${x.chip.background}"
                  src=${x.chip.src}
                  loadingWidth=${26}
                />`
              : ''}${x.group
              ? html`<hb-icon
                    icon=${HbIconName['system/outline/arrow-dropdown']}
                    size=${Size.xsmall}
                  ></hb-icon>
                  <div class="hb-header__group-menu">
                    ${x.group.map(
                      (y) => html`
                        <hb-anchor
                          class="hb-header__group-menu__item"
                          href=${y.href}
                          target=${y.target}
                          @event=${this.adapterEvent.bind(this, y.event)}
                          ><strong>${y.name}</strong>
                          <p>${y.desc}</p></hb-anchor
                        >
                      `
                    )}
                    <i class="hb-header__group-menu__layer"></i>
                    <i class="hb-header__group-menu__tip"></i>
                  </div>`
              : ''}</hb-anchor
          >`
      )}
    `;
  }

  myMenuTemplate(size: keyof typeof Size = 'medium') {
    return html`
      ${this.isMyMenu?.map(
        (x) =>
          html`<hb-button
            class="hb-button"
            @event=${x.event}
            type=${HbButtonType.rectangle}
            theme=${x.theme}
            size=${Size[size]}
            >${x.name}</hb-button
          >`
      )}
    `;
  }

  get authMenuTemplate() {
    return html`
      ${this.isAuthMenu?.map(
        (x) =>
          html`<hb-anchor class="hb-anchor" href=${x.href} target=${x.target} @event=${x.event}
            >${x.name}</hb-anchor
          >`
      )}
    `;
  }

  get defaultMenuForDesktopTemplate() {
    const themes = ['', HbButtonTheme.quaternary];
    return html`
      ${this.isDefaultMenu?.map(
        (x, i) =>
          html`<hb-button
            class="hb-button"
            theme=${themes[i]}
            type=${HbButtonType.rectangle}
            size=${Size.medium}
            @event=${x.event}
            >${x.name}</hb-button
          >`
      )}
    `;
  }

  get defaultMenuTemplate() {
    const themes = [HbButtonTheme.quaternary, HbButtonTheme.primary];
    return html`
      ${this.isDefaultMenu?.map(
        (x, i) => html`<hb-button
          class="hb-button"
          theme=${themes[i]}
          size=${Size.large}
          type=${HbButtonType.rectangle}
          @event=${x.event}
          >${x.name}</hb-button
        >`
      )}
    `;
  }

  onClickGroup(event: Event) {
    const path = event.composedPath && event.composedPath();
    const anchor = path[0];
    if (anchor instanceof HbAnchor) {
      event.stopPropagation();
      if (anchor.classList.contains('open')) anchor.classList.remove('open');
      else anchor.classList.add('open');
    }
  }

  onEnterGroup(event: Event) {
    const path = event.composedPath && event.composedPath();
    let index = -1;
    while (path[++index] instanceof HbAnchor) {
      (path[index] as HTMLElement).classList.add('open');
    }
  }

  onLeaveGroup(event: Event) {
    const path = event.composedPath && event.composedPath();
    let index = -1;
    while (path[++index] instanceof HbAnchor) {
      (path[index] as HTMLElement).classList.remove('open');
    }
  }

  onEnterSide() {
    this.sidemenu = true;
  }

  onLeaveSide() {
    this.sidemenu = false;
  }

  adapterEvent(event: Function) {
    event();
    this.sidemenu = false;
  }

  render() {
    return html`<hb-responsive>
      <div slot="mobile" part="mobile" class="hb-header--mobile">
        <div class="hb-header--mobile__navibar">
          <hb-anchor @event=${this.onEvent} class="hb-anchor"
            ><hb-icon
              icon=${HbIconName['graphic/heybit']}
              size=${Size.large}
              style="--husc__icon__size__large: var(--husc__header__logo__width--mobile);"
            ></hb-icon
          ></hb-anchor>
          <hb-button @event=${this.onEnterSide} class="hb-button"
            ><hb-icon icon=${HbIconName['system/outline/menu-side']} size=${Size.medium}></hb-icon
          ></hb-button>
        </div>
        <hb-transition
          @click=${this.onLeaveSide}
          class="hb-header--mobile__side-menu"
          ?show=${this.sidemenu}
          type=${HbTransitionType.fade}
        >
          <hb-transition ?show=${this.sidemenu} type=${HbTransitionType.rightLeft}>
            <div class="hb-header--mobile__side-menu__content">
              <div class="hb-header--mobile__side-menu__content__my">
                <hb-if ?value=${this.pending}>
                  <hb-skeleton type=${HbSkeletonType.dropMenuTop}></hb-skeleton>
                </hb-if>
                <hb-if ?value=${!this.pending}>
                  <strong>${this.userName}환영합니다.</strong>
                  <hb-if ?value=${this.loggedin}>
                    <p>${this.userEmail}</p>
                    <div>${this.myMenuTemplate()}</div>
                  </hb-if>
                  <hb-if ?value=${!this.loggedin}>
                    <div class="hb-header--mobile__side-menu__content__my__btns">
                      ${this.defaultMenuTemplate}
                    </div>
                  </hb-if>
                </hb-if>
              </div>
              <div class="hb-header--mobile__side-menu__content__menu">${this.gnbTemplate}</div>
              <div class="hb-header--mobile__side-menu__content__auth">
                <hb-if ?value=${!this.pending && this.loggedin}> ${this.authMenuTemplate} </hb-if>
                <hb-if ?value=${this.pending}>
                  <hb-skeleton
                    class="hb-header--mobile__skeleton"
                    type=${HbSkeletonType.dropMenuBottom}
                  ></hb-skeleton>
                </hb-if>
              </div>
            </div>
          </hb-transition>
        </hb-transition>
      </div>
      <div slot="desktop" part="desktop" class="hb-header--desktop">
        <div class="hb-header--desktop__navibar">
          <div class="hb-header--desktop__navibar__routes">
            <hb-anchor @event=${this.onEvent} class="hb-anchor"
              ><hb-icon
                icon=${HbIconName['graphic/heybit']}
                size=${Size.large}
                style="--husc__icon__size__large: var(--husc__header__logo__width--desktop);"
              ></hb-icon
            ></hb-anchor>
            ${this.gnbTemplateForDesktop}
          </div>
          <div class="hb-header--desktop__navibar__actions">
            <hb-if ?value=${this.pending}>
              <hb-skeleton type=${HbSkeletonType.hamburger}></hb-skeleton
            ></hb-if>
            <hb-if ?value=${!this.pending}>
              <hb-if ?value=${this.loggedin}>
                <hb-button
                  class="hb-header--desktop__navibar__actions__hamburber${this.sidemenu
                    ? ' open'
                    : ''}"
                  @mouseenter=${this.onEnterSide}
                  @mouseleave=${this.onLeaveSide}
                  >${this.userName}<hb-icon
                    icon=${HbIconName['system/outline/arrow-dropdown']}
                    size=${Size.xsmall}
                  ></hb-icon
                ></hb-button>
              </hb-if>
              <hb-if ?value=${!this.loggedin} class="hb-header--desktop__navibar__actions__btns">
                ${this.defaultMenuForDesktopTemplate}
              </hb-if>
            </hb-if>
          </div>
        </div>
        <hb-transition
          @mouseenter=${this.onEnterSide}
          @mouseleave=${this.onLeaveSide}
          class="hb-header--desktop__side-menu"
          ?show=${this.sidemenu && this.loggedin && !this.pending}
          type=${HbTransitionType.fade}
        >
          <!-- <hb-transition
            ?show=${this.sidemenu}
            type=${HbTransitionType.topDown}
          > -->
          <div class="hb-header--desktop__side-menu__content">
            <div class="hb-header--desktop__side-menu__content__my">
              <strong>${this.userName}환영합니다.</strong>
              <p>${this.userEmail}</p>
            </div>
            <div class="hb-header--desktop__side-menu__content__menu">
              ${this.myMenuTemplate('small')}
            </div>
            <div class="hb-header--desktop__side-menu__content__auth">${this.authMenuTemplate}</div>
          </div>
          <!-- </hb-transition> -->
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
