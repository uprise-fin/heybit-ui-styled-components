import { Size } from '@/components/atom/variable/type';
import { InitAttribute } from '@/components/base';
import {
  HbButtonNativeType,
  HbButtonProps,
  HbButtonTheme,
  HbButtonType
} from '@/components/molecule/button/type';
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

  _plain: boolean = false;

  _loading: boolean = false;

  disabled: boolean = false;

  href = '';

  target: React.HTMLAttributeAnchorTarget = '';

  rel = '';

  'native-type': HbButtonNativeType | undefined;

  get plain() {
    return this._plain;
  }

  set plain(value: boolean) {
    this._plain = value;
    if (value) this.setAttribute('plain', '');
    else this.removeAttribute('plain');
  }

  // get disabled() {
  //   return this._disabled;
  // }

  // set disabled(value: boolean) {
  //   this._disabled = value;
  //   if (value) this.setAttribute('data-disabled', '');
  //   else this.removeAttribute('data-disabled');
  // }

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
      theme: { type: String, reflect: true },
      size: { type: String, reflect: true },
      type: { type: String, reflect: true },
      loading: { type: Boolean, reflect: true },
      plain: { type: Boolean, reflect: true },
      _loading: { type: Boolean, reflect: true },
      baseLoadingDuration: { type: Number, reflect: true },
      disabled: { type: Boolean, reflect: true },
      // _disabled: { type: Boolean, reflect: true },
      href: { type: String, reflect: true },
      target: { type: String, reflect: true },
      rel: { type: String, reflect: true },
      'native-type': { type: String, reflect: true }
    };
  }

  static formAssociated = true;

  private readonly internals = (this as HTMLElement).attachInternals();

  async _handleClick() {
    const {
      internals: { form }
    } = this;

    if (this.loading || this.disabled) return;
    if (this.baseLoadingDuration) {
      this.loading = true;
      await wait(this.baseLoadingDuration);
      this.loading = false;
    }

    if (form && (!this['native-type'] || this['native-type'] === 'submit'))
      return form.requestSubmit();
    this.onEvent(new CustomEvent('event'));
  }

  render() {
    const template = {
      loading: html`<hb-transition class="hb-button__loading" type="fade" ?show=${this._loading}>
        <hb-spinner size="small"></hb-spinner>
      </hb-transition>`,
      default: html`<slot
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
        ></slot>`
    };

    return html`${this.href
      ? html`<a
          class="hb-button__container"
          part="container"
          href="${this.href}"
          target="${this.target}"
          rel="${this.rel || this.target === '_blank' ? 'noreferrer noopener' : ''}"
        >
          ${template.default}
        </a>`
      : html`<button
          class="hb-button__container"
          part="container"
          ?disabled=${this.disabled}
          @click="${this._handleClick}"
        >
          ${this._loading ? template.loading : template.default}
        </button>`}`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-button': HbButton;
  }
}
