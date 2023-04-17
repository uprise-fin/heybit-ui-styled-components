import { HbTransitionType } from '@/components/atom/transition/type';
import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

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

@customElement('hb-page-dialog')
export class HbPageDialog extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  loading = false;

  baseLoadingDuration = 500;

  width = '100%';

  open: boolean;

  icon = '';

  title = '';

  persistent = false;

  hideCloseBtn = false;

  transitionType: HbTransitionType = 'zoom';

  disabled: boolean;

  get eventDisabled() {
    return this.loading;
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
      open: { type: Boolean, Reflect: true },
      buttons: { type: Array, Reflect: true },
      disabled: { type: Boolean, Reflect: true },
      eventDisabled: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      width: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      baseLoadingDuration: { type: Number, Reflect: true },
      buttonAlign: { type: String, Reflect: true },
      title: { type: String, Reflect: true },
      icon: { type: String, Reflect: true },
      transitionType: { type: String, Reflect: true }
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
        <div class="hb-page-dialog__container ${this.transitionType}" part="container">
          ${this.hideCloseBtn
            ? ''
            : html` <hb-button
                ?disabled=${this.eventDisabled}
                @event=${this.onClose}
                class="hb-page-dialog__close-btn"
                part="close-btn"
                id="close-btn"
                color="#1F2123"
                ><hb-icon icon="system/outline/close" size="small"></hb-icon
              ></hb-button>`}
          <div class="hb-page-dialog__body">
            <slot class="hb-page-dialog__body__content"></slot>
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
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-page-dialog': HbPageDialog;
  }
}
