import '../';
import { HbTransitionType } from '@/components/atom/transition/type';
import { type HorizonAlign, componentVariables } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import {
  HbDialogAnchor,
  HbDialogButton,
  HbModalButtonAlign
} from '@/components/molecule/modal/type';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement } from 'lit/decorators.js';
import { HbIconName } from '@/components/atom/icon/type';

/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
 * @property iconColor
 * @property image
 * @property title
 * @property caption
 * @slot 내용
 * @csspart container
 * @csspart icon
 * @csspart title
 * @csspart content
 * @csspart buttons
 * @csspart anchor
 */

@customElement('hb-dialog')
export class HbDialog extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  _bodyClass = 'modal-open';

  layout = 'normal';

  loading = false;

  width = componentVariables.modal.width.dialog + 'px';

  height = '0px';

  open = false;

  headAlign: HorizonAlign = 'center';

  icon: HbIconName | undefined;

  iconColor = '';

  image = '';

  title = '';

  caption = '';

  persistent = false;

  hideCloseBtn = false;

  buttonAlign: HbModalButtonAlign = 'horizon';

  anchor: HbDialogAnchor | undefined;

  buttons: HbDialogButton[] | undefined;

  disabled = false;

  preventBodyScroll = true;

  get _buttons() {
    return this.buttons || [];
  }

  get transitionType(): HbTransitionType {
    return this.layout === 'sheet' ? 'bottom-up' : 'zoom';
  }

  get eventDisabled() {
    if (this._buttons.length) return this._buttons.map((x) => x.loading).some((x) => x);
    return this.loading;
  }

  static get properties() {
    return {
      layout: { type: String, reflect: true },
      open: { type: Boolean, reflect: true },
      buttons: { type: Array, reflect: true },
      anchor: { type: Object, reflect: true },
      disabled: { type: Boolean, reflect: true },
      preventBodyScroll: { type: Boolean, reflect: true },
      eventDisabled: { type: Boolean, reflect: true },
      persistent: { type: Boolean, reflect: true },
      hideCloseBtn: { type: Boolean, reflect: true },
      width: { type: String, reflect: true },
      height: { type: String, reflect: true },
      loading: { type: Boolean, reflect: true },
      buttonAlign: { type: String, reflect: true },
      headAlign: { type: String, reflect: true },
      title: { type: String, reflect: true },
      caption: { type: String, reflect: true },
      icon: { type: String, reflect: true },
      iconColor: { type: String, reflect: true },
      image: { type: String, reflect: true },
      transitionType: { type: String, reflect: true }
    };
  }

  render() {
    document.body.classList.toggle(this._bodyClass, this.preventBodyScroll && this.open);
    return html`
      <hb-modal
        @close=${this.onClose}
        verticalAlign=${this.layout === 'sheet' ? 'bottom' : 'middle'}
        width=${this.layout === 'normal' ? this.width : 'auto'}
        height=${this.height}
        ?open=${this.open}
        ?persistent=${this.persistent || this.eventDisabled}
        transitionType=${this.transitionType}
        style=${styleMap({ ['--head-align']: this.headAlign })}
      >
        <div
          class="hb-dialog__container ${this.transitionType} ${this.layout}-layout"
          part="container"
        >
          ${this.hideCloseBtn
            ? ''
            : html` <hb-button
                ?disabled=${this.eventDisabled}
                @event=${this.onClose}
                class="hb-dialog__close-btn"
                part="close-btn"
                id="close-btn"
                ><hb-icon icon="system/outline/close" size="small"></hb-icon
              ></hb-button>`}
          <div
            class=${classMap({
              ['hb-dialog__head']: true,
              empty: !this.title && !this.caption
            })}
            part="head"
          >
            ${this.title
              ? html`<div class="hb-dialog__head__icon-title" part="icon-title">
                  ${this.icon
                    ? html`<hb-icon
                        part="icon"
                        loadingWidth="60"
                        loadingHeight="60"
                        icon=${this.icon}
                        class="hb-dialog__head__icon"
                        style=${this.iconColor ? `--husc__icon__color:${this.iconColor}` : ''}
                      ></hb-icon>`
                    : this.image
                    ? html`<hb-img
                        part="image"
                        loadingWidth="60"
                        loadingHeight="60"
                        src=${this.image}
                        class="hb-dialog__head__icon"
                      ></hb-img>`
                    : ''}
                  ${this.title
                    ? html`<p part="title" class="hb-dialog__head__title">${this.title}</p>`
                    : ''}
                </div>`
              : ''}
            ${this.caption
              ? html`<p part="caption" class="hb-dialog__caption">${this.caption}</p>`
              : ''}
          </div>
          <div
            class=${classMap({
              ['dialog-type__content']:
                this.layout === 'dialog' && !!this.textContent?.trim().length
            })}
          >
            <slot class="hb-dialog__body__content"></slot>
          </div>
          <div class="hb-dialog__foot">
            <div class="hb-dialog__foot__button-wrap ${this.buttonAlign}">
              ${this._buttons.map(
                (x) =>
                  html`<hb-button
                    ?loading=${this.loading || x.loading}
                    ?disabled=${this.eventDisabled || x.disabled || this.disabled}
                    baseLoadingDuration=${x.baseLoadingDuration || 0}
                    type=${x.type || 'rectangle'}
                    @event=${x.event}
                    theme=${x.theme || 'primary'}
                    size=${this.layout === 'dialog' ? 'small' : 'medium'}
                    >${x.name}</hb-button
                  >`
              )}${this.anchor?.name
                ? html`<hb-anchor
                    ?disabled=${this.eventDisabled || this.disabled}
                    class="hb-dialog__foot__anc"
                    href=${this.anchor.href || ''}
                    target=${this.anchor.target || '_self'}
                    @event=${this.anchor.event}
                    >${this.anchor.name}</hb-anchor
                  >`
                : ''}
            </div>
          </div>
        </div>
      </hb-modal>
    `;
  }

  onClose() {
    this.open = false;
    this.removeAttribute('open');
    // this.dispatchEvent(new CustomEvent('close'));
    this.onEvent(new CustomEvent('event'));
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.classList.remove(this._bodyClass);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-dialog': HbDialog;
  }
}
