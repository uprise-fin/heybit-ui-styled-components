import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {Base} from '@/components/base';
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

  #disabled = false;

  get disabled() {
    return this.#disabled;
  }

  set disabled(value: boolean) {
    this.#disabled = value;
    if (value) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }

  static get properties() {
    return {
      href: {type: String, Reflect: true},
      target: {type: String, Reflect: true},
      disabled: {type: Boolean, Reflect: true},
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.setTabIndex();
    this.onclick = this.adapterEvent;
  }

  adapterEvent() {
    if (this.disabled) return;
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
    return html`<slot></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-anchor': HbAnchor;
  }
}
