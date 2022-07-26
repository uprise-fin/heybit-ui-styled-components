import {HbTransitionType} from '@/components/atom/transition/type';
import {Size} from '@/components/atom/variable/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '../../base';
import {HbHeaderNavi} from './type';
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

  sidemenu = false;

  navigations: HbHeaderNavi[];

  static get properties() {
    return {
      sidemenu: {type: Boolean, Reflect: true},
      navigations: {type: Array, Reflect: true},
    };
  }

  get gnb() {
    return html`
      ${this.navigations?.map(
        x =>
          // x.path
          //   ? html`<hb-anchor path=${x.path}>${x.name}</hb-anchor>`
          //   : html`<hb-anchor href=${x.href} target=${x.target}
          //       >${x.name}</hb-anchor
          //     >`,
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
          <hb-icon
            icon=${HbIconName['graphic/heybit']}
            size=${Size.large}
            style="--icon__size__large: var(--header__logo__width);"
          ></hb-icon>
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
            <div class="hb-header--mobile__side-menu__content">${this.gnb}</div>
          </hb-transition>
        </hb-transition>
      </div>
      <div slot="desktop" class="hb-header--desktop">
        <div class="hb-header--desktop__navibar">
          <hb-anchor href="/"
            ><hb-icon
              icon=${HbIconName['graphic/heybit']}
              size=${Size.large}
              style="--icon__size__large: var(--header__logo__width);"
            ></hb-icon
          ></hb-anchor>
          ${this.gnb}
          <hb-button @event=${this.onSideMenu}
            ><hb-icon
              icon=${HbIconName['system/outline/menu-side']}
              size=${Size.medium}
            ></hb-icon
          ></hb-button>
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
              ${this.gnb}
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
