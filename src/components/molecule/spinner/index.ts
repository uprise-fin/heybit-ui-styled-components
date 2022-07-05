import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '../../base';

/**
 *
 */
export enum hbSpinnerTheme {
  'void' = 'void',
  'solid' = 'solid',
}

@customElement('hb-spinner')
export class HbSpinner extends Base {
  static override get styles() {
    return [require('../../../styles/molecule/spinner/index.scss').default];
  }

  theme: hbSpinnerTheme = hbSpinnerTheme.solid;
  // size: size = size.large

  static get properties() {
    return {
      theme: {type: String, Reflect: true},
      // size: { type: String, Reflect: true },
    };
  }

  render() {
    return html`
      <span class="hb-spinner__icon hb-spinner__icon--inner-1"></span>
      <span class="hb-spinner__icon hb-spinner__icon--inner-2"></span>
      <span class="hb-spinner__icon hb-spinner__icon--inner-3"></span>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-spinner': HbSpinner;
  }
}
