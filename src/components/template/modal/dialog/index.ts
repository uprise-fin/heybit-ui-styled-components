import {HbTransitionType} from '@/components/atom/transition/type';
import {componentVariables} from '@/components/atom/variable/type';
import {Base} from '@/components/base';
import {HbIconName} from '@/components/molecule/icon/type';
import {HbButtonType} from '@/components/organism/button/type';
import {
  HbDialogAnchor,
  HbDialogButton,
  HbModalButtonAlign,
} from '@/components/template/modal/type';
import {wait} from '@/utils';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property icon
 * @property title
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

  loading = false;

  baseLoadingDuration = 500;

  width = componentVariables.modal.width;

  open = false;

  icon = '';

  title = '';

  persistent = false;

  hideCloseBtn = false;

  buttonAlign = HbModalButtonAlign.horizon;

  anchor: HbDialogAnchor;

  buttons: HbDialogButton[];

  transitionType = HbTransitionType.zoom;

  get eventDisabled() {
    return this.buttons?.map(x => x.loading).some(x => x) || this.loading;
  }
  // get open() {
  //   return this._open;
  // }
  // set open(val: boolean) {
  //   if (this._open !== val) {
  //     this._open = val
  //     this.onToggle(val)
  //   }
  // }

  // @property()
  // value!: string;

  static get properties() {
    return {
      open: {type: Boolean, Reflect: true},
      buttons: {type: Array, Reflect: true},
      eventDisabled: {type: Boolean, Reflect: true},
      persistent: {type: Boolean, Reflect: true},
      hideCloseBtn: {type: Boolean, Reflect: true},
      width: {type: Number, Reflect: true},
      loading: {type: Boolean, Reflect: true},
      baseLoadingDuration: {type: Number, Reflect: true},
      buttonAlign: {type: String, Reflect: true},
      title: {type: String, Reflect: true},
      icon: {type: String, Reflect: true},
      transitionType: {type: String, Reflect: true},
    };
  }

  render() {
    return html`
      <hb-modal
        @close=${this.onClose}
        width=${this.width}
        ?open=${this.open}
        ?persistent=${this.persistent || this.eventDisabled}
        transitionType=${this.transitionType}
      >
        <div class="hb-dialog__container ${this.transitionType}">
          ${this.hideCloseBtn
            ? ''
            : html` <hb-button
                ?disabled=${this.eventDisabled}
                @event=${this.onClose}
                class="hb-dialog__close-btn"
                part="close-btn"
                id="close-btn"
                ><hb-icon
                  icon=${HbIconName['system/outline/close']}
                  size="small"
                ></hb-icon
              ></hb-button>`}
          <div class="hb-dialog__head">
            ${this.icon
              ? html`<hb-img
                  part="icon"
                  loadingWidth="60"
                  loadingHeight="60"
                  src=${this.icon}
                  class="hb-dialog__head__icon"
                ></hb-img>`
              : ''}${this.title
              ? html`<p part="title" class="hb-dialog__head__title">
                  ${this.title}
                </p>`
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
                    ?disabled=${this.eventDisabled}
                    type=${HbButtonType.rectangle}
                    baseLoadingDuration=${this.baseLoadingDuration}
                    @event=${this.adapterEvent.bind(this, x, i)}
                    theme=${x.theme}
                    size="medium"
                    >${x.name}</hb-button
                  >`,
              )}
            </div>
            ${this.anchor && this.anchor.name
              ? html`<hb-anchor
                  ?disabled=${this.eventDisabled}
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
    const {event} = button;
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
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-dialog': HbDialog;
  }
}
