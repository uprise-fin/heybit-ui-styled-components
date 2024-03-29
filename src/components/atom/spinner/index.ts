import { Size } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 *
 */

@customElement('hb-spinner')
export class HbSpinner extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  size: Size;

  static get properties() {
    return {
      size: { type: String, reflect: true }
    };
  }

  render() {
    return html`
      <svg class="hb-spinner__svg" viewBox="0 0 50 50">
        <circle
          class="hb-spinner__svg__circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke-width="5"
        ></circle>
      </svg>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-spinner': HbSpinner;
  }
}
