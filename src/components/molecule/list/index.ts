import {Base} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbListEvent, HbListOption} from './type';

/**
 * @fires event
 * @property src
 * @property multiSource
 * @property breakPoint
 * @property pcPrefix
 * @csspart picture
 * @csspart skeleton
 * @csspart img
 */

@customElement('hb-list')
export class HbList extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  options: HbListOption[] = [];

  attributeSync = false;

  open = false;

  value = '';

  emptyText = '';

  width = 0;

  maxHeight = 0;

  static get properties() {
    return {
      options: {type: Array, Reflect: true},
      value: {type: String, Reflect: true},
      emptyText: {type: String, Reflect: true},
      width: {type: Number, Reflect: true},
      maxHeight: {type: Number, Reflect: true},
      attributeSync: {type: Boolean, Reflect: true},
      open: {type: Boolean, Reflect: true},
    };
  }

  get values() {
    return this.options.map(x => x.value) || [];
  }

  sto = setTimeout(() => {}, 0);

  onSelect(ev: HbListEvent) {
    this.adapterHide();
    if (!(ev.target instanceof HTMLButtonElement)) return;
    const {target} = ev;
    const {value} = target.dataset;
    if (this.value === value || !this.values.includes(value)) return;
    if (this.attributeSync) this.setAttribute('value', value!);
    this.value = value!;
    this.onEvent(new CustomEvent('event'));
    // this.dispatchEvent(new CustomEvent('event', ev));
  }

  onHide() {
    this.blur();
    this.open = false;
  }

  adapterHide() {
    this.sto = setTimeout(() => this.onHide(), 0);
  }

  render() {
    return html`
      <div
        class="hb-list__wrap"
        @click=${this.onSelect}
        @keyup=${(evt: KeyboardEvent) =>
          evt.key === 'Enter' && this.onSelect.call(this)}
        data-empty-text=${this.emptyText}
        part="list"
        id="list"
      >
        ${this.options.map(
          x =>
            html`
              <button
                type="button"
                class="hb-list__btn"
                ?data-selected=${x.value === this.value}
                data-value=${x.value}
              >
                ${x.label}
              </button>
            `,
        )}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-list': HbList;
  }
}
// const NAME = "hb-list";
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
