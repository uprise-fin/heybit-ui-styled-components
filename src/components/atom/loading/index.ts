import {Base} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbLoadingProps} from './type';

@customElement('hb-loading')
export class HbLoading extends Base<HbLoadingProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  loaded = false;

  delete = false;

  static get properties() {
    return {
      loaded: {type: Boolean, Reflect: true},
      width: {type: String, Reflect: true},
      height: {type: String, Reflect: true},
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.ontransitionend = () =>
      this.delete ? this.remove() : this.setAttribute('done', '');
  }

  // render() {
  //   return Array(this.length).fill(null).map((_,i) => html`
  //     <div class="hb-loading__wall" part=${`cell-${i+1}`}></div>
  //   `)

  // }

  render() {
    return html` <div class="hb-loading__wall" part="wall"></div> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-loading': HbLoading;
  }
}
