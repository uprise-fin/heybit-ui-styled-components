import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {hbButtonTheme, hbButtonType} from '../../../models/organism/button';
import {wait} from '../../../utils';
import {transitionType} from '../../atom/transition';
import {Base, size} from '../../base';

/**
 * @fires event 클릭할때
 * @property theme
 * @property size
 * @property type
 * @property loading
 * @property disabled
 * @slot slot--left - optional, slot--left부분을 커스텀할때 사용
 * @slot slot--right - optional, slot--right부분을 커스텀할때 사용
 * @slot 내용 컨텐츠 영역
 * @csspart label
 * @csspart list
 */

@customElement('hb-button')
export class HbButton extends Base {
  static override get styles() {
    return [require('../../../styles/organism/button/index.scss').default];
  }
  labelEl: HTMLElement;
  type: hbButtonType = hbButtonType.rectangle;
  size: size = size.large;
  loading = false;
  baseLoadingDuration = 0;
  disabled = false;
  theme: hbButtonTheme = hbButtonTheme.primary;

  static get properties() {
    return {
      theme: {type: String, Reflect: true},
      size: {type: String, Reflect: true},
      type: {type: String, Reflect: true},
      loading: {type: Boolean, Reflect: true},
      baseLoadingDuration: {type: Number, Reflect: true},
      disabled: {type: Boolean, Reflect: true},
    };
  }

  render() {
    return html`
      <slot
        name="slot--left"
        part="slot--left"
        class="hb-button__slot hb-button__slot--left"
      ></slot>
      <div class="hb-button__label">
        ${this.loading
          ? html`
              <hb-transition
                class="hb-button__label__transition"
                type=${transitionType.fade}
                ?show=${this.loading}
              >
                <hb-spinner size=${this.size}></hb-spinner>
              </hb-transition>
            `
          : html`
              <hb-transition
                class="hb-button__label__transition"
                type=${transitionType.fade}
                ?show=${!this.loading}
              >
                <slot part="label"></slot>
              </hb-transition>
            `}
      </div>
      <slot
        name="slot--right"
        part="slot--right"
        class="hb-button__slot hb-button__slot--right"
      ></slot>
    `;
  }
  async customConnectedCallback() {
    this.tabIndex = 0;
    this.setAttribute('theme', this.theme);
    this.setAttribute('size', this.size);
    this.onclick = ev => this.onEvent(ev);
    this.onkeyup = ev => ev.key === 'Enter' && this.onEvent(ev);
  }

  async onEvent(ev: Event) {
    if (this.loading || this.disabled) return;
    this.dispatchEvent(new CustomEvent('event', ev));
    if (this.baseLoadingDuration) {
      this.setAttribute('loading', '');
      await wait(this.baseLoadingDuration);
      this.removeAttribute('loading');
    }
  }
  async attributeChangedCallback(name: string, _: string, newVal: string) {
    if (name === 'loading' && this.baseLoadingDuration) {
      if (newVal !== null) {
        const width = this.style.width.substring(
          0,
          this.style.width.length - 2,
        );
        this.dataset.width = width;
        this.style.width = this.offsetWidth ? this.offsetWidth + 'px' : '';
      } else {
        const width = this.dataset.width;
        this.style.width = width ? width + 'px' : '';
      }
    }

    super.attributeChangedCallback(name, _, newVal);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-button': HbButton;
  }
}
