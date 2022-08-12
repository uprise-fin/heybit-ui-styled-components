import {HbTransitionType} from '@/components/atom/transition/type';
import {Size} from '@/components/atom/variable/type';
import {InitAttribute} from '@/components/base';
import {
  HbButtonProps,
  HbButtonTheme,
  HbButtonType,
} from '@/components/organism/button/type';
import {wait} from '@/utils';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';

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
export class HbButton extends InitAttribute<HbButtonProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  labelEl: HTMLElement;

  type: HbButtonType;

  size: Size;

  loading = false;

  baseLoadingDuration = 0;

  theme: HbButtonTheme;

  initialAttributes: (keyof HbButtonProps)[] = ['size', 'theme', 'type'];

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
                type=${HbTransitionType.fade}
                ?show=${this.loading}
              >
                <hb-spinner size=${this.size}></hb-spinner>
              </hb-transition>
            `
          : html`
              <hb-transition
                class="hb-button__label__transition"
                type=${HbTransitionType.fade}
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

  connectedCallback() {
    super.connectedCallback();
    this.setTabIndex();
    this.onclick = this.adapterEvent;
    this.onkeyup = ev => ev.key === 'Enter' && this.adapterEvent();
  }

  async adapterEvent() {
    if (this.loading || this.disabled) return;
    this.onEvent(new CustomEvent('event'));
    // this.dispatchEvent(new CustomEvent('event', ev));
    if (this.baseLoadingDuration) {
      this.setAttribute('loading', '');
      await wait(this.baseLoadingDuration);
      this.removeAttribute('loading');
    }
  }

  attributeChangedCallback(name: string, _: string, newVal: string) {
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
