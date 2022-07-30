import {Base} from '@/components/base';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {basicVariables} from '@/components/atom/variable';

@customElement('hb-responsive')
export class HbResponsive extends Base {
  point: number = basicVariables.layout.media;

  static get properties() {
    return {
      point: {type: Number, Reflect: true},
    };
  }

  get mediaMobile() {
    const mobile = this.point - 1;
    return `@media (max-width: ${mobile}px) {.hb-responsive__slot--desktop{display: none;};`;
  }

  get mediaDesktop() {
    const desktop = this.point;
    return `@media (min-width: ${desktop}px) {.hb-responsive__slot--mobile{display: none;};`;
  }

  render() {
    return html`<style>
        ${this.mediaMobile}
      </style>
      <slot name="mobile" class="hb-responsive__slot--mobile"></slot>
      <style>
        ${this.mediaDesktop}
      </style>
      <slot name="desktop" class="hb-responsive__slot--desktop"></slot>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-responsive': HbResponsive;
  }
}
