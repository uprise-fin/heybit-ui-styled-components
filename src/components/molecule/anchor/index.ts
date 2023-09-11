import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { Base } from '@/components/base';
/**
 *
 */

@customElement('hb-anchor')
export class HbAnchor extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  href = '';

  target = '';

  text: string;

  _disabled: boolean = false;

  get disabled() {
    return this._disabled;
  }

  set disabled(value: boolean) {
    this._disabled = value;
    if (value) this.setAttribute('data-disabled', '');
    else this.removeAttribute('data-disabled');
  }

  static get properties() {
    return {
      href: { type: String, reflect: true },
      target: { type: String, reflect: true },
      disabled: { type: Boolean, reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.tabindex = '0';
    this.onclick = this.adapterEvent;
  }

  adapterEvent(event: Event) {
    if (this.disabled) return;
    event.stopImmediatePropagation();
    if (this.href) {
      const a = document.createElement('a');
      if (this.target) a.target = this.target;
      a.href = this.href;
      a.rel = 'noreferer noopener';
      a.click();
      a.remove();
      return;
    }
    // this.dispatchEvent(new CustomEvent('event', ev));
    this.onEvent(new CustomEvent('event'));
  }

  render() {
    return html`<slot part="slot" class="hb-anchor__slot"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-anchor': HbAnchor;
  }
}
