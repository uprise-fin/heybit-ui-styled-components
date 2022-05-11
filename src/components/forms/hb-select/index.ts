import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";

/**
 * @fires select 옵션을 선택할때 발생
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot icon - optional, icon부분을 커스텀할때 사용
 * @slot caret - optional, caret부분을 커스텀할때 사용
 * @slot option - required, select의 옵션 엘리먼트
 * @csspart label
 * @csspart list
 */

@customElement("hb-select")
export class HbSelect extends Base {
  static override get styles() {
    return [require("../../../styles/forms/hb-select/index.scss").default];
  }

  width = '';
  value = '';
  options: {label: string; value: string}[] = []
  placeholder = '비었습니다.'
  emptyText="비었습니닷"


  static get properties() {
    return {
      width: { type: String, Reflect: true },
      value: { type: String, Reflect: true },
      label: { type: String, Reflect: true },
      index: { type: Number, Reflect: true },
      options: { type: Array, Reflect: true },
      emptyText: { type: String, Reflect: true },
    };
  }

  get label() {
    return this.options.find(x => x.value === this.value)?.label
  }

  get isLabel() {
    return this.label || this.placeholder
  }

  get isPlaceholder() {
    return !this.label
  }

  sto = setTimeout(() => {}, 0);

  render() {
    return html`
      <div
        id="label"
        part="label"
        data-value=${this.value}
        data-label=${this.isLabel}
        class=${`hb-select__label hb-select__option ${this.isPlaceholder ? 'is-placeholder' : ''}`}
      >
        <slot
          name="icon"
          class="hb-select__label--icon"
        ></slot>
        <slot
          name="caret"
          class="hb-select__label--caret"
        ></slot>
      </div>
      <div
        class=${'hb-select__list'}
        @click=${this.onSelect}
        @keyup=${(evt:KeyboardEvent)=>evt.key === "Enter" && this.onSelect(evt)}
        data-empty-text=${this.emptyText}
        style="width: ${this.width}px;"
        part="list"
      >${this.options.map(x => (html`
        <button class="hb-select__list__btn" ?data-selected=${x.value === this.value} data-value=${x.value} data-label=${x.label}></button>
      `))}</div>
    `
  }
  async customConnectedCallback() {
    this.tabIndex = 0;
    this.onfocus = () => this.adapterShow();
    this.onblur = () => this.adapterHide();
    // await this.bindEvents();
  }

  onSelect(evt: Event) {
    if (!(evt.target instanceof HTMLButtonElement)) return

    this.adapterHide();
    const {target} = evt;
    const { value  } = target.dataset;
    if (this.value === value) return;
    this.dispatchEvent(new Event("change", evt));
    this.setAttribute("value", value!);
    this.value = value!;
  }
  onShow() {
    const { width } = this.getBoundingClientRect();
    this.classList.add("open");
    this.width = `${width}`;
    // this.top = `${top}`;
  }

  adapterShow() {
    clearTimeout(this.sto);
    this.onShow();
  }

  onHide() {
    this.classList.remove("open");
    this.blur()
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
