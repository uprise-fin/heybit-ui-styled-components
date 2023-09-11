import '@/components/atom/loading';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @property src
 * @property multiSource
 * @property breakPoint
 * @property pcPrefix
 * @csspart picture
 * @csspart skeleton
 * @csspart img
 */

@customElement('hb-img')
export class HbImg extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  src: string;

  alt: string;

  loadingWidth: number;

  loadingHeight: number;

  breakPoint = 0;

  multiSource = 0;

  pcPrefix = '-pc';

  loaded = false;

  error = false;

  static get properties() {
    return {
      src: { type: String, reflect: true },
      alt: { type: String, reflect: true },
      loadingWidth: { type: Number, reflect: true },
      loadingHeight: { type: Number, reflect: true },
      multiSource: { type: Number, reflect: true },
      breakPoint: { type: Number, reflect: true },
      pcPrefix: { type: String, reflect: true },
      loaded: { type: Boolean, reflect: true },
      error: { type: Boolean, reflect: true }
    };
  }

  get srcExt() {
    const number = this.src.lastIndexOf('.');
    return this.src.substring(number);
  }

  get srcName() {
    const number = this.src.lastIndexOf('.');
    return this.src.substring(0, number);
  }

  get set() {
    return Array(this.multiSource).fill(null);
  }

  get srcset() {
    const arr = this.set.map((_, i) => {
      const j = i + 1;
      if (j === 1) {
        return `${this.srcName}${this.srcExt} 1x`;
      }
      return `${this.srcName}@${j}x${this.srcExt} ${j}x`;
    });
    return arr.join(',');
  }

  get pcSrcset() {
    const arr = this.set.map((_, i) => {
      const j = i + 1;
      if (j === 1) {
        return `${this.srcName}${this.pcPrefix}${this.srcExt} 1x`;
      }
      return `${this.srcName}${this.pcPrefix}@${j}x${this.srcExt} ${j}x`;
    });
    return arr.join(',');
  }

  render() {
    return html`
      <hb-loading
        class="hb-img__loading"
        part="loading"
        ?loaded=${this.loaded || this.error}
        style="width:${this.loadingWidth}px; height:${this.loadingHeight}px;"
      ></hb-loading>
      <picture class="hb-img__picture" part="picture">
        ${this.multiSource > 0
          ? this.breakPoint > 0
            ? html`
                <source media=${`(max-width: ${this.breakPoint - 1}px)`} srcset=${this.srcset} />
                <source media=${`(min-width: ${this.breakPoint}px)`} srcset=${this.pcSrcset} />
              `
            : html` <source srcset=${this.srcset} /> `
          : ''}
        <img
          class="hb-img__picture__img"
          part="img"
          src=${this.src}
          alt=${this.alt}
          @error=${this.onError}
          @load=${this.onLoad}
          ?loaded=${this.loaded}
          ?error=${this.error}
        />
      </picture>
    `;
  }

  onLoad(event: Event) {
    this.loaded = true;
    this.dispatchEvent(new Event('load', event));
  }

  onError(event: Event) {
    this.error = true;
    this.dispatchEvent(new Event('error', event));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-img': HbImg;
  }
}
