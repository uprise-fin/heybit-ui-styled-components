import {Size} from '@/components/atom/variable/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '../../base';
import {HbHeaderNavi, HbHerderProps} from './type';
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
export class HbHeader extends Base<HbHerderProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  navigations: HbHeaderNavi[];

  static get properties() {
    return {
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

  render() {
    return html`<hb-responsive>
      <div slot="mobile" class="hb-header--mobile">
        <div class="hb-header--mobile__navibar">
          <hb-icon
            icon=${HbIconName['graphic/heybit']}
            size=${Size.large}
            style="--icon__size__large: 77px;"
          ></hb-icon>
          ${this.gnb}
        </div>
      </div>
      <div slot="desktop" class="hb-header--desktop">
        <div class="hb-header--desktop__navibar">
          <hb-icon
            icon=${HbIconName['graphic/heybit']}
            size=${Size.large}
            style="--icon__size__large: 77px;"
          ></hb-icon>
          ${this.gnb}
        </div>
      </div>
    </hb-responsive>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-header': HbHeader;
  }
}
