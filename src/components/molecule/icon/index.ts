import {Size} from '@/components/atom/variable/type';
import {Base} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {unsafeSVG} from 'lit/directives/unsafe-svg.js';
import SVG from './svg';
import {HbIconName} from './type';

// import White from '../../assets/icons/ic-system-menu-24-white.svg'
/**
 * @property open 온 오프
 * @slot header - optional, 헤더
 * @slot content - optional, 내용
 * @slot footer - optional, 푸터
 * @csspart container
 * @csspart header
 * @csspart content
 * @csspart footer
 */

@customElement('hb-icon')
export class HbIcon extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  icon: HbIconName;

  size: Size;

  static get properties() {
    return {
      icon: {type: String, Reflect: true},
      size: {type: String, Reflect: true},
    };
  }

  // attributeChangedCallback(name: string, _: string, newVal: string) {
  //   if (name === 'color') this.style.fill = newVal;

  //   super.attributeChangedCallback(name, _, newVal);
  // }

  render() {
    return html`${unsafeSVG(SVG[this.icon])}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-icon': HbIcon;
  }
}
