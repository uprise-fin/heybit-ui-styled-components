import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hb-delay')
export class HbDelay extends Base {
  // static get styles() {
  //   return [require('./style.scss').default];
  // }

  delay: number;

  name: string;

  value: string;

  static get properties() {
    return {
      delay: { type: Number, reflect: true },
      name: { type: String, reflect: true },
      value: { type: String, reflect: true }
    };
  }

  async attributeChangedCallback(name: string, _: string, newVal: string) {
    super.attributeChangedCallback(name, _, newVal);
    if (name === 'value') {
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve(true);
        }, this.delay)
      );
      if (['true', 'false'].includes(newVal)) {
        if (newVal === 'true') this.children[0].setAttribute(this.name, '');
        else this.children[0].removeAttribute(this.name);
      } else {
        this.children[0].setAttribute(this.name, newVal);
      }
    }
  }
  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-delay__wall" part=${`cell-${i+1}`}></div>
  //   `)
  // }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-delay': HbDelay;
  }
}
