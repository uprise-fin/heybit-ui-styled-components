import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('hb-loading')
export class HbLoading extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  loaded = false;

  delete = false;

  duration: number;

  background: string;

  backgroundAccent: string;

  static get properties() {
    return {
      loaded: { type: Boolean, reflect: true },
      duration: { type: Number, reflect: true },
      background: { type: String, reflect: true },
      backgroundAccent: { type: String, reflect: true },
      width: { type: String, reflect: true },
      height: { type: String, reflect: true }
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.ontransitionend = () => (this.delete ? this.remove() : this.setAttribute('done', ''));
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-loading__wall" part=${`cell-${i+1}`}></div>
  //   `)

  // }

  render() {
    return html`
      <div
        style=${`--duration:${this.duration || 2000}ms;--background:${
          this.background || 'var(--husc__black--200)'
        }; --background--accent:${this.backgroundAccent || 'var(--husc__white--50)'}`}
        class="hb-loading__wall"
        part="wall"
      ></div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-loading': HbLoading;
  }
}
