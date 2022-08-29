import {HbTransitionType} from '@/components/atom/transition/type';
import {Base} from '@/components/base';
import {HbIconName} from '@/components/molecule/icon/type';
import {html} from 'lit';
import {customElement} from 'lit/decorators.js';

/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property image
 */

@customElement('hb-event-dialog')
export class HbEventDialog extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  width = 400;

  loadingWidth = 400;

  loadingHeight = 490;

  open: boolean;

  persistent = false;

  hideCloseBtn = false;

  image = '';

  href = '';

  static get properties() {
    return {
      open: {type: Boolean, Reflect: true},
      persistent: {type: Boolean, Reflect: true},
      hideCloseBtn: {type: Boolean, Reflect: true},
      width: {type: Number, Reflect: true},
      loadingWidth: {type: Number, Reflect: true},
      loadingHeight: {type: Number, Reflect: true},
      image: {type: String, Reflect: true},
      href: {type: String, Reflect: true},
    };
  }

  render() {
    return html`
      <hb-modal
        @close=${this.onClose}
        width=${this.width}
        ?open=${this.open}
        ?persistent=${this.persistent}
        transitionType=${HbTransitionType.zoom}
      >
        <div class="hb-event-dialog__container">
          ${this.hideCloseBtn
            ? ''
            : html` <button
                @click=${this.onClose}
                type="button"
                class="hb-event-dialog__close-btn"
                part="close-btn"
                id="close-btn"
              >
                <hb-icon
                  icon=${HbIconName['system/outline/close']}
                  size="small"
                ></hb-icon>
              </button>`}
          <hb-anchor href=${this.href}>
            <hb-img
              class="hb-event-dialog__container__img"
              src=${this.image}
              loadingWidth=${this.loadingWidth}
              loadingHeight=${this.loadingHeight}
            ></hb-img>
          </hb-anchor>
        </div>
      </hb-modal>
    `;
  }

  onClose() {
    this.open = false;
    this.removeAttribute('open');
    this.onEvent(new CustomEvent('event'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-event-dialog': HbEventDialog;
  }
}
