import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from '@/components/base';
import { HbSkeletonType } from './type';

@customElement('hb-skeleton')
export class HbSkeleton extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  type: HbSkeletonType;

  duration: number;

  background: string;

  backgroundAccent: string;

  static get properties() {
    return {
      duration: { type: Number, Reflect: true },
      background: { type: String, Reflect: true },
      backgroundAccent: { type: String, Reflect: true },
      type: { type: String, Reflect: true }
    };
  }

  get skeletonLength() {
    if (['card', 'drop-menu-top'].includes(this.type)) return 3;
    if (['drop-menu-bottom'].includes(this.type)) return 2;
    return 1;
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-skeleton__wall" part=${`cell-${i+1}`}></div>
  //   `)

  // }

  render() {
    return Array(this.skeletonLength)
      .fill(null)
      .map(
        () =>
          html`<hb-loading
            duration=${this.duration}
            background=${this.background}
            backgroundAccent=${this.backgroundAccent}
          ></hb-loading> `
      );
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-skeleton': HbSkeleton;
  }
}
