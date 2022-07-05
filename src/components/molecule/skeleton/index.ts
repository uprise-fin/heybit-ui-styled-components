import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '../../base';
export enum skeletonType {
  card = 'card',
}
@customElement('hb-skeleton')
export class HbSkeleton extends Base {
  static override get styles() {
    return [require('../../../styles/molecule/skeleton/index.scss').default];
  }
  type: skeletonType;
  static get properties() {
    return {
      type: {type: String, Reflect: true},
    };
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-skeleton__wall" part=${`cell-${i+1}`}></div>
  //   `)

  // }

  render() {
    if (this.type === skeletonType.card)
      return html`
        <hb-loading></hb-loading>
        <hb-loading></hb-loading>
        <hb-loading></hb-loading>
      `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-skeleton': HbSkeleton;
  }
}
