import {html} from 'lit';
import {customElement} from 'lit/decorators.js';
import {HbTransitionType} from '@/components/atom/transition/type';
import {Size} from '@/components/atom/variable/type';
import {getElement} from '@/utils';

import {Base} from '@/components/base';
import {HbList} from '@/components/molecule/list';
import {HbInput} from '@/components/organism/input';
import {HbListOption} from '@/components/molecule/list/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {HbSelectProps} from './type';

/**
 * @fires event 값이 변경될때 발생
 * @property attributeSync true 시 value값이 arrtibute 싱크됨
 * @property fixed true 시 overflow에서 넘어감
 * @property value 기본 값
 * @property options Options[] 옵션
 * @property search 서치 온오프
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement('hb-select')
export class HbSelect extends Base<HbSelectProps> {
  static get styles() {
    return [require('./style.scss').default];
  }

  inputEl?: HTMLInputElement;

  parentQuery?: string;

  parentEl?: HTMLElement;

  attributeSync = false;

  fixed = false;

  search = false;

  open = false;

  top: number;

  left: number;

  width: number;

  maxHeight: number;

  value = '';

  options: HbListOption[] = [];

  placeholder = '검색어를 입력해주세요.';

  emptyText = '검색결과가 없습니다.';

  hasFocus = false;

  inputValue = '';

  static get properties() {
    return {
      open: {type: Boolean, Reflect: true},
      search: {type: Boolean, Reflect: true},
      attributeSync: {type: Boolean, Reflect: true},
      fixed: {type: Boolean, Reflect: true},
      top: {type: Number, Reflect: true},
      left: {type: Number, Reflect: true},
      width: {type: Number, Reflect: true},
      maxHeight: {type: Number, Reflect: true},
      value: {type: String, Reflect: true},
      options: {type: Array, Reflect: true},
      emptyText: {type: String, Reflect: true},
      inputValue: {type: String, Reflect: true},
      parentQuery: {type: String, Reflect: true},
      hasFocus: {type: Boolean, Reflect: true},
    };
  }

  get list() {
    return this.options.filter(x => x.label.includes(this.inputValue)) || [];
  }

  get values() {
    return this.options.map(x => x.value) || [];
  }

  get label() {
    if (this.hasFocus || !this.options) return this.inputValue;
    return this.options.find(x => x.value === this.value)?.label || '';
  }

  get scrollEventListener() {
    if (this.parentQuery) return this.parentEl;
    return window;
  }

  sto = setTimeout(() => {}, 0);

  render() {
    return html`
      <hb-input
        class="hb-select__label"
        @click=${this.onClick}
        id="label"
        part="label"
        class="hb-select__input"
        ?readonly=${!this.search}
        value=${this.label}
        placeholder=${this.placeholder}
        @event=${this.onInput}
      >
        <slot name="icon" class="hb-select__label--icon"></slot>
        <hb-icon
          slot="slot--right"
          icon=${HbIconName['system/outline/arrow-down']}
          size=${Size.small}
        ></hb-icon>
      </hb-input>
      <hb-transition
        id="select-transition"
        ?show=${this.open}
        type=${HbTransitionType.fade}
      >
        <hb-list
          emptyText=${this.emptyText}
          id="list"
          class="hb-select__list"
          style="width: ${this.width}px;transform: translate(${this
            .left}px,${this.top}px);max-height:${this.maxHeight}px;"
          @event=${this.onSelect}
          .options=${this.list}
          .value=${this.value}
        ></hb-list>
      </hb-transition>
    `;
  }

  async connectedCallback() {
    super.connectedCallback();
    this.onfocus = () => this.adapterShow();
    this.onblur = () => this.adapterHide();
    this.inputEl = await getElement<HTMLInputElement>(this.shadowRoot, 'label');
    if (this.parentQuery)
      this.parentEl = document.querySelector(this.parentQuery);
  }

  disconnectedCallback() {
    this.onfocus = () => null;
    this.onblur = () => null;
  }

  onScroll() {
    const {bottom} = this.getBoundingClientRect();
    if (bottom > 100) this.maxHeight = window.innerHeight - bottom - 50;
    this.top = -(this.parentEl ? this.parentEl?.scrollTop : window.scrollY);
    this.left = -(this.parentEl ? this.parentEl?.scrollLeft : window.scrollX);
  }

  onScrollBound = this.onScroll.bind(this);

  onInput(ev: InputEvent) {
    const {target} = ev;
    if (!(target instanceof HbInput)) return;
    this.inputValue = target.value;
  }

  onSelect(ev: Event) {
    ev.stopImmediatePropagation();
    this.adapterHide();
    const {target} = ev;
    if (!(target instanceof HbList)) return;
    const {value} = target;
    if (this.attributeSync) this.setAttribute('value', value!);
    this.value = value!;
    this.inputValue = '';
    // this.dispatchEvent(new CustomEvent('event', evt));
    this.onEvent(ev);
  }

  onShow() {
    const {width, bottom} = this.getBoundingClientRect();
    this.open = true;
    this.width = width;
    this.maxHeight = window.innerHeight - bottom - 50;
    if (this.search) this.hasFocus = true;
    if (this.fixed) {
      this.onScroll();
      this.scrollEventListener.addEventListener('scroll', this.onScrollBound);
    }
  }

  onClick() {
    this.inputEl.focus();
  }

  adapterShow() {
    clearTimeout(this.sto);
    this.onShow();
  }

  onHide() {
    this.blur();
    this.open = false;
    if (this.search) this.hasFocus = false;
    if (this.fixed)
      this.scrollEventListener.removeEventListener(
        'scroll',
        this.onScrollBound,
      );
  }

  adapterHide() {
    this.sto = setTimeout(() => this.onHide(), 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-select': HbSelect;
  }
}
