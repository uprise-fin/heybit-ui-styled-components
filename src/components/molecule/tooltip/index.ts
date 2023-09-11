import '@/components/atom/icon';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @slot front, 오프너
 * @csspart front
 * @csspart content
 */

@customElement('hb-tooltip')
export class HbTooltip extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  open: boolean = false;

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      width: { type: Number, reflect: true },
      height: { type: Number, reflect: true },
      position: { type: Array, reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.tabindex = '0';
    this.onmouseleave = () => this.hasAttribute('open') && this.removeAttribute('open');
    this.onblur = () => this.hasAttribute('open') && this.removeAttribute('open');
  }

  disconnectedCallback() {
    this.onmouseleave = () => null;
    this.onblur = () => null;
  }

  render() {
    return html`
      <slot name="front" part="front" class="hb-tooltip__front"></slot>
      <slot part="content" class="hb-tooltip__content"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-tooltip': HbTooltip;
  }
}
