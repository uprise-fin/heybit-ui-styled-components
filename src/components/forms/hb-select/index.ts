import Base from "../../base";
import { html } from "lit";
import { customElement } from "lit/decorators.js";
import { getChildren } from "../../../utils";

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
  label = '';
  placeholder = '비었습니다.'
  emptyText="비었습니닷"


  static get properties() {
    return {
      width: { type: String, Reflect: true },
      value: { type: String, Reflect: true },
      label: { type: String, Reflect: true },
      emptyText: { type: String, Reflect: true },
    };
  }

  get isLabel() {
    return this.label || this.placeholder
  }

  get isPlaceholder() {
    return !this.label
  }

  sto = setTimeout(() => {}, 0);
  optionEls!: HTMLElement[];

  override render() {
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
      <slot
        class="hb-select__list"
        @click=${this.onSelect}
        data-empty-text=${this.emptyText}
        @keyup=${(evt:KeyboardEvent)=>evt.key === "Enter" && this.onSelect(evt)}
        style="width: ${this.width}px;"
        part="list"
        id="list"
        name="option"
      ></slot>
    `;
  }
  override async connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.onfocus = () => this.adapterShow();
    this.onblur = () => this.adapterHide();
    await this.bindEvents();
  }
  override requestUpdate() {
    super.requestUpdate();
  }
  async bindEvents() {
    const children = await getChildren(this.children);
    
    this.optionEls = children.filter((x) => x.slot === "option");
    this.optionEls.forEach((element: HTMLElement) => {
      element.tabIndex = 0;
      element.onfocus = () => this.adapterShow();
      element.onblur = () => this.adapterHide();

      if (element.dataset.value === this.value) {
        this.label = element.dataset.label || "";
        element.classList.add("selected");
      }
    });
  }

  onSelect(evt: Event) {
    this.adapterHide();

    const element = evt.target as HTMLElement;
    if (element.slot !== 'option') return;

    const { value, label } = element.dataset;
    if (this.value === value) return;
    this.optionEls.forEach((x) => {
      if (x === element) return element.classList.add("selected");
      x.classList.remove("selected");
    });
    this.dispatchEvent(new Event("change", evt));
    this.setAttribute("value", value!);
    this.value = value!;
    this.label = label!;
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
