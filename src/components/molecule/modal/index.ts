import '@/components/molecule/anchor';
import '@/components/molecule/button';
import '@/components/molecule/img';
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
const obj = [
  ['auto', 'auto'],
  ['0', 'auto'],
  ['auto', '0']
];
const verObj = {
  middle: obj[0],
  top: obj[1],
  bottom: obj[2]
};
const horObj = {
  center: obj[0],
  right: obj[1],
  left: obj[2]
};
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

  verticalAlign: VerticalAlign = 'middle';

  horizonAlign: HorizonAlign = 'center';

  transitionType: HbTransitionType;

  containerEl?: HTMLDivElement;

  width = '0';

  height = '0px';

  open: boolean;

  persistent = false;

  get position() {
    return `${verObj[this.verticalAlign][0]} ${horObj[this.horizonAlign][0]} ${
      verObj[this.verticalAlign][1]
    } ${horObj[this.horizonAlign][1]}`;
  }

  static get properties() {
    return {
      open: { type: Boolean, reflect: true },
      persistent: { type: Boolean, reflect: true },
      width: { type: String, reflect: true },
      height: { type: String, reflect: true },
      transitionType: { type: String, reflect: true },
      verticalAlign: { type: String, reflect: true },
      horizonAlign: { type: String, reflect: true }
    };
  }

  render() {
    return html`
      <hb-transition ?show=${this.open} id="modal-transition" type="fade">
        <div class="hb-modal__wrap" @click=${this.adapterOnClose} part="layer">
          <hb-transition
            ?show=${this.open}
            type=${this.transitionType}
            style="margin: ${this.position};"
          >
            <div
              class="hb-modal__container"
              style=${`--husc__modal__width: ${this.width}; min-height: ${this.height}`}
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
