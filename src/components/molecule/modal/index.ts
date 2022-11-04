import { HbTransitionType } from '@/components/atom/transition/type';
import { HorizonAlign, VerticalAlign } from '@/components/atom/variable/type';
import { Base } from '@/components/base';
import { getElement } from '@/utils';
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
 * @slot container
 * @csspart container
 */

@customElement('hb-modal')
export class HbModal extends Base {
  static get styles() {
    return [require('./style.scss').default];
  }

  async connectedCallback() {
    await super.connectedCallback();
    this.containerEl = await getElement<HTMLDivElement>(this.shadowRoot, 'container');
    this.containerEl!.onanimationend = (event: AnimationEvent) => this.onAnimationEnd(event);
  }

  disconnectedCallback() {
    this.containerEl.onanimationend = () => null;
  }

  verticalAlign: VerticalAlign = VerticalAlign.middle;

  horizonAlign: HorizonAlign = HorizonAlign.center;

  transitionType: HbTransitionType;

  containerEl?: HTMLDivElement;

  width = '0';

  open: boolean;

  persistent = false;

  get position() {
    const obj = {
      0: ['auto', 'auto'],
      1: ['0', 'auto'],
      2: ['auto', '0']
    };
    return `${obj[this.verticalAlign][0]} ${obj[this.horizonAlign][0]} ${
      obj[this.verticalAlign][1]
    } ${obj[this.horizonAlign][1]}`;
  }

  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      persistent: { type: Boolean, Reflect: true },
      width: { type: String, Reflect: true },
      transitionType: { type: String, Reflect: true },
      verticalAlign: { type: Number, Reflect: true },
      horizonAlign: { type: Number, Reflect: true }
    };
  }

  render() {
    return html`
      <hb-transition ?show=${this.open} id="modal-transition" type=${HbTransitionType.fade}>
        <div class="hb-modal__wrap" @click=${this.adapterOnClose} part="layer">
          <hb-transition
            ?show=${this.open}
            type=${this.transitionType}
            style="margin: ${this.position};"
          >
            <div
              class="hb-modal__container"
              style=${`--husc__modal__width: ${this.width};`}
              id="container"
              part="container"
              @click=${this.stopPropagation}
            >
              <slot></slot>
            </div>
          </hb-transition>
        </div>
      </hb-transition>
    `;
  }

  onAnimationEnd(event: AnimationEvent) {
    //TODO 오픈드 이벤트 및 클로즈드 이벤트 생성가능
    this.classList.remove(event.animationName);
  }

  adapterOnClose() {
    if (this.persistent) return this.classList.add('shake');

    this.dispatchEvent(new CustomEvent('close'));
    // this.onEvent(new CustomEvent('event'));
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-modal': HbModal;
  }
}