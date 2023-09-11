import '@/components/atom/spinner';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @fires event
 * @property value
 */

@customElement('hb-switch')
export class HbSwitch extends Base {
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

  onEnter(ev: KeyboardEvent) {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      this.onChange();
    }
  }

  render() {
    return html`<label
      tabindex="0"
      @keydown=${this.onEnter}
      class="hb-switch__label${this.value ? ' hb-switch__label--active' : ''}${this.loading
        ? ' hb-switch__label--loading'
        : ''}"
      ><input
        @change=${this.onChange}
        ?checked=${this.value}
        type="checkbox"
        class="hb-switch__input" /><i class="hb-switch__icon"></i
      ><hb-spinner class="hb-switch__spinner" size="medium"></hb-spinner
    ></label>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-switch': HbSwitch;
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
