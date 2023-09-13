import type { Size } from '@/components/atom/variable/type';
import type {
  HbButtonNativeType,
  HbButtonTheme,
  HbButtonType
} from '@/components/molecule/button/type';
import { wait } from '@/utils';
import { type TemplateResult, html, nothing } from 'lit';
import { customElement } from 'lit/decorators.js';
import { html as staticHtml, literal } from 'lit/static-html.js';
import '@/components/atom/icon';
import '@/components/atom/spinner';
import '@/components/atom/transition';
import '@/components/molecule/input';
import { Base } from '@/components/base';

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
  static get styles() {
    return [require('./style.scss').default];
  }

  label = '';

  type: HbButtonType;

  size: Size;

  baseLoadingDuration = 0;

  theme: HbButtonTheme;

  plain: boolean = false;

  loading: boolean = false;

  disabled: boolean = false;

  href: string;

  target: React.HTMLAttributeAnchorTarget = '';

  rel: string;

  'native-type': HbButtonNativeType | undefined;

  static get properties() {
    return {
      theme: { type: String, reflect: true },
      size: { type: String, reflect: true },
      type: { type: String, reflect: true },
      loading: { type: Boolean, reflect: true },
      plain: { type: Boolean, reflect: true },
      baseLoadingDuration: { type: Number, reflect: true },
      disabled: { type: Boolean, reflect: true },
      href: { type: String, reflect: true },
      target: { type: String, reflect: true },
      rel: { type: String, reflect: true },
      'native-type': { type: String, reflect: true }
    };
  }

  static formAssociated = true;

  private readonly internals = (this as HTMLElement).attachInternals();

  async _handleClick() {
    if (this.href) return;

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

  render(): TemplateResult {
    const template = {
      loading: html`<hb-transition class="hb-button__loading" type="fade" ?show=${this.loading}>
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

    const isDisabled = this.disabled && !this.href;

    const button = this.href ? literal`a` : literal`button`;

    return staticHtml`<${button}
          class="hb-button__container"
          part="container"
          .href="${this.href}"
          .target="${this.target || nothing}"
          .rel="${this.rel || this.target === '_blank' ? 'noreferrer noopener' : ''}"
          ?disabled=${isDisabled}
          @click="${this._handleClick}"
        >
          ${this.loading ? template.loading : template.default}
        </${button}>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-button': HbButton;
  }
}
