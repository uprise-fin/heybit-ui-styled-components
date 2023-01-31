import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @fires event
 * @property value
 */

@customElement('hb-check')
export class HbCheck extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  value: boolean;

  loading: boolean;

  static get properties() {
    return {
      value: { type: Boolean, Reflect: true },
      loading: { type: Boolean, Reflect: true }
    };
  }

  onChange() {
    if (this.loading) return;
    this.onEvent(new CustomEvent('event'));
  }

  render() {
    return html`<label
      class="hb-check__label${this.value ? ' hb-check__label--active' : ''}${this.loading
        ? ' hb-check__label--loading'
        : ''}"
      ><input
        @change=${this.onChange}
        ?checked=${this.value}
        type="checkbox"
        class="hb-check__input" /><i class="hb-check__icon"></i
      ><hb-spinner class="hb-check__spinner" size="medium"></hb-spinner
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-check': HbCheck;
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
