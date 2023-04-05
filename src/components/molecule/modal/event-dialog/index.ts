import { Base } from '@/components/base';
import { html } from 'lit';
import { customElement } from 'lit/decorators.js';

/**
 * @fires close 닫기
 * @property open 온 오프
 * @property width
 * @property persistent
 * @property hideCloseBtn
 * @property image
 * @property textLongClose 3일간 보지않기 버튼 텍스트 편집
 * @property textClose 닫기 버튼 텍스트 편집
 */

@customElement('hb-event-dialog')
export class HbEventDialog extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  width = '400px';

  loadingWidth = 400;

  loadingHeight = 490;

  open: boolean;

  persistent = true;

  hideCloseBtn = true;

  image = '';

  href = '';

  textLongClose = '3일간 보지않기';

  textClose = '닫기';

  loaded = false;

  cookieKey = 'main-popup';

  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      hideCloseBtn: { type: Boolean, Reflect: true },
      width: { type: String, Reflect: true },
      loadingWidth: { type: Number, Reflect: true },
      loadingHeight: { type: Number, Reflect: true },
      loaded: { type: Boolean, Reflect: true },
      image: { type: String, Reflect: true },
      textLongClose: { type: String, Reflect: true },
      textClose: { type: String, Reflect: true },
      cookieKey: { type: String, Reflect: true },
      href: { type: String, Reflect: true }
    };
  }

  get isOpen() {
    const open = document.cookie.indexOf(`${this.cookieKey}=`);
    return this.open && open === -1;
  }

  render() {
    return html`
      <hb-modal
        @close=${this.onClose}
        width=${this.width}
        ?open=${this.isOpen}
        ?persistent=${this.persistent}
        transitionType="zoom"
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
                <hb-icon icon="system/outline/close" size="small"></hb-icon>
              </button>`}
          <hb-anchor class="hb-event-dialog__container__anchor" href=${this.href}>
            <hb-img
              class="hb-event-dialog__container__img"
              src=${this.image}
              @load=${() => (this.loaded = true)}
              @error=${() => (this.loaded = true)}
              loadingWidth=${this.loadingWidth}
              loadingHeight=${this.loadingHeight}
            ></hb-img>
          </hb-anchor>
          ${this.loaded
            ? html`<div class="hb-event-dialog__footer">
                <button @click=${this.adapterClose} class="hb-event-dialog__btn">
                  ${this.textLongClose}
                </button>
                <button @click=${this.onClose} class="hb-event-dialog__btn">
                  ${this.textClose}
                </button>
              </div>`
            : ''}
        </div>
      </hb-modal>
    `;
  }

  adapterClose() {
    document.cookie = `${this.cookieKey} = true; max-age=259200`;
    this.onClose();
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
