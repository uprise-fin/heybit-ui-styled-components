import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Base } from '@/components/base';
/**
 * @property color 지정 테마
 * @slot - 기본 slot
 */

@customElement('hb-chip')
export class HbChip extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  @property({ reflect: true })
  color = '';

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-chip': HbChip;
  }
}
