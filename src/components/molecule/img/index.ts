import {InitAttribute} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbImgProps} from './type';

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
export class HbImg extends InitAttribute<HbImgProps> {
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

  initialAttributes: (keyof HbImgProps)[] = ['src'];

  static get properties() {
    return {
      src: {type: String, Reflect: true},
      alt: {type: String, Reflect: true},
      loadingWidth: {type: Number, Reflect: true},
      loadingHeight: {type: Number, Reflect: true},
      multiSource: {type: Number, Reflect: true},
      breakPoint: {type: Number, Reflect: true},
      pcPrefix: {type: String, Reflect: true},
      loaded: {type: Boolean, Reflect: true},
      error: {type: Boolean, Reflect: true},
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

  // set src(src: string) {
  //   if (this.srcset) src = ''
  //   this._src = src
  // }

  // get src() {
  //   return this._src
  // }

  render() {
    return html`
      <hb-loading
        class="hb-img__loading"
        part="loading"
        ?loaded=${this.loaded || this.error}
        style="width:${this.loadingWidth}px; height:${this.loadingHeight}px;"
      ></hb-loading>
      <picture
        class="hb-img__picture"
        part="picture"
        style=${this.loaded
          ? ''
          : `width:${this.loadingWidth}px; height:${this.loadingHeight}px;`}
      >
        ${this.multiSource > 0
          ? this.breakPoint > 0
            ? html`
                <source
                  media=${`(max-width: ${this.breakPoint - 1}px)`}
                  srcset=${this.srcset}
                />
                <source
                  media=${`(min-width: ${this.breakPoint}px)`}
                  srcset=${this.pcSrcset}
                />
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

  // onLoad(evt: Event) {
  //   this.loaded = true
  //   this.dispatchEvent(new CustomEvent("load", evt));
  // }
  // onError(evt: Event) {
  //   this.error = true
  //   this.dispatchEvent(new CustomEvent("error", evt));
  // }
  onLoad() {
    this.loaded = true;
  }

  onError() {
    this.error = true;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-img': HbImg;
  }
}
// const NAME = "hb-img";
// customElements.get(NAME) ||
//   customElements.define(
//     NAME,
//     class extends CustomElement {
//       template = require(`./${NAME}.hbs`);
//       css = require(`./${NAME}.scss`).default;
//       properties = {
//         id: {
//           closeBtn: "close-btn",
//           wrap: "wrap",
//         },
//       };
//       constructor() {
//         super();
//       }
//       connectedCallback(): void {
//         super.connectedCallback();
//         this.isWrapEl.onanimationstart = () => this.onAnimationStart();
//         this.isWrapEl.onanimationend = () => this.onAnimationEnd();
//         this.isCloseBtnEl.onclick = () => this.onHide();
//       }
//       get isCloseBtnEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.closeBtn
//         ) as HTMLButtonElement;
//       }
//       get isWrapEl() {
//         return this.shadowRoot.getElementById(
//           this.isProperties.id.wrap
//         ) as HTMLButtonElement;
//       }

//       onHide() {
//         this.classList.add(this.isProperties.classList.animation);
//         super.onHide();
//       }
//     }
//   );
