import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from '@/components/base';
import type { SystemTheme } from '@/index';
/**
 * @property color 지정 테마
 * @slot - 기본 slot
 */

@customElement('hb-chip')
export class HbChip extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  static get properties() {
    return {
      color: { reflect: true }
    };
  }

  color: SystemTheme;

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-chip': HbChip;
  }
}
