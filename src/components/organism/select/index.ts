import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
import { transitionType } from "../../atom/transition";
import Base from "../../base";
import { HbList } from "../../molecule/list";
export interface Option {
  label: string; 
  value: string;
}
/**
 * @fires change 값이 변경될때 발생
 * @property attributeSync true 시 value값이 arrtibute 싱크됨
 * @property value 기본 값
 * @property options Options[] 옵션
 * @property search 서치 온오프
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement("hb-select")
export class HbSelect extends Base {
  static override get styles() {
    return [require("../../../styles/organism/select/index.scss").default];
  }
  inputEl?: HTMLInputElement;
  attributeSync = false
  search = false
  open = false;
  top: number;
  width: number;
  maxHeight: number;
  value = '';
  options: Option[] = []
  placeholder = '검색어를 입력해주세요.'
  emptyText = "검색결과가 없습니다."
  hasFocus = false
  inputValue = ''

  static get properties() {
    return {
      open: { type: Boolean, Reflect: true },
      search: { type: Boolean, Reflect: true },
      attributeSync: { type: Boolean, Reflect: true },
      top: { type: Number, Reflect: true },
      width: { type: Number, Reflect: true },
      maxHeight: { type: Number, Reflect: true },
      value: { type: String, Reflect: true },
      options: { type: Array, Reflect: true },
      emptyText: { type: String, Reflect: true },
      inputValue: { type: String, Reflect: true },
      hasFocus: { type: Boolean, Reflect: true },
    };
  }

  get list() {
    return this.options.filter(x => x.label.includes(this.inputValue)) || []
  }

  get values() {
    return this.options.map(x => x.value) || []
  }

  get label() {
    if (this.hasFocus || !this.options) return this.inputValue
    return this.options.find(x => x.value === this.value)?.label || ''
  }

  sto = setTimeout(() =>{}, 0);

  render() {
    return html`
      <div class="hb-select__label" @click=${this.onClick}>
        <slot name="icon" class="hb-select__label--icon"></slot>
        <input id="label" part="label" class="hb-select__input" ?readonly=${!this.search} .value=${this.label} placeholder=${this.placeholder} @input=${this.onInput} />
        <slot name="caret" class="hb-select__label--caret"></slot>
      </div>
      <hb-transition id="transition" ?show=${this.open} type=${transitionType.fade}>
        <hb-list id="list" class="hb-select__list" style="width: ${this.width}px;transform: translateY(-${this.top}px);max-height:${this.maxHeight}px;" @change=${this.onSelect} .options=${this.options} .value=${this.value}></hb-list>
      </hb-transition>
    `
  }
  async customConnectedCallback() {
    this.onfocus = () => this.adapterShow();
    this.onblur = () => this.adapterHide();
    this.inputEl = await getElement<HTMLInputElement>(this.shadowRoot, 'label')
  }
  disconnectedCallback() {
    this.onfocus = () => null;
    this.onblur = () => null;
  }
  onScroll() {
    this.top = window.scrollY
  }
  
  onScrollBound = this.onScroll.bind(this)

  onInput(ev: InputEvent) {
    const {target} = ev;
    if(!(target instanceof HTMLInputElement)) return
    this.inputValue = target.value
  }

  onSelect(evt: Event) {
    this.adapterHide();
    const {target} = evt;
    if(!(target instanceof HbList)) return
    const { value  } = target;
    this.attributeSync && this.setAttribute("value", value!);
    this.value = value!;
    this.inputValue = ''
    this.dispatchEvent(new Event("change", evt));
  }
  onShow() {
    const { width, bottom } = this.getBoundingClientRect();
    this.open = true;
    this.width = width
    this.maxHeight = window.innerHeight - bottom - 50;
    this.search && (this.hasFocus = true)
    this.onScrollBound()
    window.addEventListener('scroll', this.onScrollBound)
  }

  onClick() {
    this.inputEl.focus();
  }

  adapterShow() {
    clearTimeout(this.sto);
    this.onShow();
  }

  onHide() {
    this.blur()
    this.open = false;
    this.search && (this.hasFocus = false)
    window.removeEventListener('scroll', this.onScrollBound)
  }

  adapterHide() {
    this.sto = setTimeout(() => this.onHide(), 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "hb-select": HbSelect;
  }
}
