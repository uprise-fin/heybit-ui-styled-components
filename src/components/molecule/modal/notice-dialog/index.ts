import { HbTransitionType } from '@/components/atom/transition/type';
import { componentVariables } from '@/components/atom/variable/type';
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

@customElement('hb-notice-dialog')
export class HbNoticeDialog extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  image = '';

  loading = false;

  baseLoadingDuration = 500;

  width = componentVariables.modal.width + 'px';

  open: boolean;

  icon = '';

  title = '';

  persistent = false;

  hideCloseBtn = false;

  buttonAlign = 'horizon';

  transitionType: HbTransitionType = 'zoom';

  disabled: boolean;

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
      disabled: { type: Boolean, Reflect: true },
      eventDisabled: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      width: { type: String, Reflect: true },
      image: { type: String, Reflect: true },
      loading: { type: Boolean, Reflect: true },
      baseLoadingDuration: { type: Number, Reflect: true },
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
        ?persistent=${this.persistent}
        transitionType=${this.transitionType}
      >
        <div class="hb-notice-dialog__container ${this.transitionType}">
          ${this.hideCloseBtn
            ? ''
            : html` <hb-button
                @event=${this.onClose}
                class="hb-notice-dialog__close-btn"
                part="close-btn"
                id="close-btn"
                ><hb-icon icon="system/outline/close" size="small"></hb-icon
              ></hb-button>`}
          <div class="hb-notice-dialog__body">
            <hb-img class="hb-notice-dialog__body__visual" src=${this.image} />
          </div>
          <div class="hb-notice-dialog__foot">
            <div class="hb-notice-dialog__foot__button-wrap horizon">
              <hb-responsive>
                <hb-button
                  slot="mobile"
                  type="rectangle"
                  @event=${this.onClose}
                  theme="tertiary"
                  size="medium"
                  >확인</hb-button
                >
                <hb-button
                  slot="desktop"
                  type="rectangle"
                  @event=${this.onClose}
                  theme="tertiary"
                  size="large"
                  >확인</hb-button
                >
              </hb-responsive>
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
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-notice-dialog': HbNoticeDialog;
  }
}
