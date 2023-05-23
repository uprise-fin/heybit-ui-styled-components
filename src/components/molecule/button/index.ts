import { Size } from '@/components/atom/variable/type';
import { InitAttribute } from '@/components/base';
import { HbButtonProps, HbButtonTheme, HbButtonType } from '@/components/molecule/button/type';
import { wait } from '@/utils';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';
import '@/components/atom/icon';
import '@/components/atom/spinner';
import '@/components/atom/transition';

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

  label = '';

  type: HbButtonType;

  size: Size;

  baseLoadingDuration = 0;

  theme: HbButtonTheme;

  initialAttributes: (keyof HbButtonProps)[] = ['size', 'theme', 'type'];

  plain: boolean = false;

  _loading: boolean = false;

  #disabled: boolean = false;

  get disabled() {
    return this.#disabled;
  }

  set disabled(value: boolean) {
    this.#disabled = value;
    if (value) this.setAttribute('data-disabled', '');
    else this.removeAttribute('data-disabled');
  }

  get loading() {
    return this._loading;
  }

  set loading(value: boolean) {
    if (value) {
      if (this.style.width) {
        this.dataset.width = this.style.width;
      }
      const style = getComputedStyle(this);
      this.style.width = style.width;
      this.setAttribute('data-loading', '');
    } else {
      if (this.dataset.width) {
        this.style.width = this.dataset.width;
      } else {
        this.style.width = '';
      }
      this.removeAttribute('data-loading');
    }
    this._loading = value;
  }

  static get properties() {
    return {
      theme: { type: String, Reflect: true },
      size: { type: String, Reflect: true },
      type: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      plain: { type: Boolean, Reflect: true },
      _loading: { type: Boolean, Reflect: true },
      baseLoadingDuration: { type: Number, Reflect: true },
      disabled: { type: Boolean, Reflect: true }
    };
  }

  render() {
    return this._loading
      ? html`
          <hb-transition class="hb-button__loading" type="fade" ?show=${this._loading}>
            <hb-spinner size="small"></hb-spinner>
          </hb-transition>
        `
      : html`
          <slot
            name="slot--left"
            part="slot--left"
            class="hb-button__slot hb-button__slot--left"
          ></slot>
          <div class="hb-button__label" id="label" part="label">
            <slot></slot>
          </div>
          <slot
            name="slot--right"
            part="slot--right"
            class="hb-button__slot hb-button__slot--right"
          ></slot>
        `;
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.tabindex = '0';
    this.onclick = this.adapterEvent;
    this.onkeyup = (ev) => ev.key === 'Enter' && this.adapterEvent();
  }

  async adapterEvent() {
    if (this.loading || this.disabled) return;
    this.onEvent(new CustomEvent('event'));
    // this.dispatchEvent(new CustomEvent('event', ev));
    if (this.baseLoadingDuration) {
      this.loading = true;
      await wait(this.baseLoadingDuration);
      this.loading = false;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-button': HbButton;
  }
}
