import '../';
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
      open: { type: Boolean, reflect: true },
      buttons: { type: Array, reflect: true },
      disabled: { type: Boolean, reflect: true },
      eventDisabled: { type: Boolean, reflect: true },
      persistent: { type: Boolean, reflect: true },
      hideCloseBtn: { type: Boolean, reflect: true },
      width: { type: String, reflect: true },
      loading: { type: Boolean, reflect: true },
      baseLoadingDuration: { type: Number, reflect: true },
      buttonAlign: { type: String, reflect: true },
      title: { type: String, reflect: true },
      icon: { type: String, reflect: true },
      transitionType: { type: String, reflect: true }
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
