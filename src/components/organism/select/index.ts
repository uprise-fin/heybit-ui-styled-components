import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getElement } from "../../../utils";
import Base from "../../base";
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
      search: { type: Boolean, Reflect: true },
      attributeSync: { type: Boolean, Reflect: true },
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
      <div
        class="hb-select__list"
        @click=${this.onSelect}
        @keyup=${(evt:KeyboardEvent)=>evt.key === "Enter" && this.onSelect(evt)}
        data-empty-text=${this.emptyText}
        style="width: ${this.width}px; max-height:${this.maxHeight}px;"
        part="list"
        id="list"
      >${this.list.map(x => (
        html`
          <button type="button" class="hb-select__list__btn" ?data-selected=${x.value === this.value} data-value=${x.value}>${x.label}</button>
        `))}</div>
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
  onInput(ev: InputEvent) {
    const {target} = ev;
    if(!(target instanceof HTMLInputElement)) return
    this.inputValue = target.value
  }

  onSelect(evt: Event) {
    this.adapterHide();
    if (!(evt.target instanceof HTMLButtonElement)) return
    const { target } = evt;
    const { value  } = target.dataset;
    if (this.value === value || !this.values.includes(value)) return;
    this.dispatchEvent(new Event("change", evt));
    this.attributeSync && this.setAttribute("value", value!);
    this.value = value!;
    this.inputValue = ''
  }
  onShow() {
    const { width, bottom } = this.getBoundingClientRect();
    this.classList.add("open");
    this.width = width;
    this.maxHeight = window.innerHeight - bottom - 50;
    this.search && (this.hasFocus = true)
  }

  onClick() {
    this.search && this.inputEl.focus();
  }

  adapterShow() {
    clearTimeout(this.sto);
    this.onShow();
  }

  onHide() {
    this.blur()
    this.classList.remove("open");
    this.search && (this.hasFocus = false)
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
