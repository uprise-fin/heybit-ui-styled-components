import {Base} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';

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
      loaded: {type: Boolean, Reflect: true},
      duration: {type: Number, Reflect: true},
      background: {type: String, Reflect: true},
      backgroundAccent: {type: String, Reflect: true},
      width: {type: String, Reflect: true},
      height: {type: String, Reflect: true},
    };
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.ontransitionend = () =>
      this.delete ? this.remove() : this.setAttribute('done', '');
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
        }; --background--accent:${
          this.backgroundAccent || 'var(--husc__white--50)'
        }`}
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
