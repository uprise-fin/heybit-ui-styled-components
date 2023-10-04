import '../';
import { HbTransitionType } from '@/components/atom/transition/type';
import { type HorizonAlign, componentVariables } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import {
  HbDialogAnchor,
  HbDialogButton,
  HbModalButtonAlign
} from '@/components/molecule/modal/type';
import { wait } from '@/utils';
import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { styleMap } from 'lit/directives/style-map.js';
import { customElement } from 'lit/decorators.js';

/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
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

  baseLoadingDuration = 500;

  width = componentVariables.modal.width.dialog + 'px';

  height = '0px';

  open: boolean;

  headAlign: HorizonAlign = 'center';

  icon = '';

  title = '';

  caption = '';

  persistent = false;

  hideCloseBtn = false;

  buttonAlign: HbModalButtonAlign = 'horizon';

  anchor: HbDialogAnchor;

  buttons: HbDialogButton[];

  disabled: boolean;

  preventBodyScroll = true;

  get transitionType(): HbTransitionType {
    return this.layout === 'sheet' ? 'bottom-up' : 'zoom';
  }

  get eventDisabled() {
    if (this.buttons && this.buttons?.length)
      return this.buttons.map((x) => x.loading).some((x) => x);
    return this.loading;
  }

  static get properties() {
    return {
      layout: { type: String, Reflect: true },
      open: { type: Boolean, Reflect: true },
      buttons: { type: Array, Reflect: true },
      anchor: { type: Object, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
      preventBodyScroll: { type: Boolean, Reflect: true },
      eventDisabled: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      width: { type: String, Reflect: true },
      height: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      baseLoadingDuration: { type: Number, Reflect: true },
      buttonAlign: { type: String, Reflect: true },
      headAlign: { type: String, Reflect: true },
      title: { type: String, Reflect: true },
      caption: { type: String, Reflect: true },
      icon: { type: String, Reflect: true },
      transitionType: { type: String, Reflect: true }
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
              empty: !this.icon && !this.title
            })}
            part="head"
          >
            ${this.title
              ? html`<div class="hb-dialog__head__icon-title" part="icon-title">
                  ${this.icon
                    ? html`<hb-img
                        part="icon"
                        loadingWidth="60"
                        loadingHeight="60"
                        src=${this.icon}
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
          <div class="hb-dialog__body">
            <slot class="hb-dialog__body__content"></slot>
          </div>
          <div class="hb-dialog__foot">
            <div class="hb-dialog__foot__button-wrap ${this.buttonAlign}">
              ${this.buttons?.map(
                (x, i) =>
                  html`<hb-button
                    ?loading=${this.loading || x.loading}
                    ?disabled=${this.eventDisabled || x.disabled || this.disabled}
                    type="rectangle"
                    @event=${this.adapterEvent.bind(this, x, i)}
                    theme=${x.theme}
                    size="medium"
                    >${x.name}</hb-button
                  >`
              )}
            </div>
            ${this.anchor && this.anchor.name
              ? html`<hb-anchor
                  ?disabled=${this.eventDisabled || this.disabled}
                  class="hb-dialog__foot__anc"
                  href=${this.anchor.href}
                  target=${this.anchor.target}
                  @event=${this.anchor.event}
                  >${this.anchor.name}</hb-anchor
                >`
              : ''}
          </div>
        </div>
      </hb-modal>
    `;
  }

  async adapterEvent(button: HbDialogButton, index: number) {
    const { event } = button;
    if (this.baseLoadingDuration) {
      const on = this.buttons.slice();
      const off = this.buttons.slice();
      on[index].loading = true;
      this.buttons = on;
      await Promise.all([event(), wait(this.baseLoadingDuration)]);
      off[index].loading = false;
      this.buttons = off;
    } else event();
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
