import Base from '../../utils/base';
import {html} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import {getChildren} from '../../utils';
import style from '../../styles/form/select/index.scss';
/**
 * An example element.
 *
 * @fires select 옵션을 선택할때 발생
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot option - required, select의 옵션 엘리먼트
 * @slot label - optional, label부분을 커스텀할때 사용
 * @csspart label
 * @csspart list
 */

@customElement('hb-select')
export class HbSelect extends Base {
  static override get styles() {
    return [style];
  }

  @property()
  width!: string;
  @property()
  value!: string;

  sto = setTimeout(() => {}, 0);
  optionEls!: HTMLElement[];
  labelEl!: HTMLElement;

  override render() {
    return html`
      <slot
        id="label"
        part="label"
        name="label"
        class="hb-select__label hb-select__option"
      ></slot>
      <slot
        class="hb-select__list"
        @click="${this.onSelect}"
        style="width: ${this.width}px;"
        part="list"
        id="list"
        name="option"
      ></slot>
    `;
  }
  override connectedCallback() {
    super.connectedCallback();
    this.tabIndex = 0;
    this.onfocus = () => this.onShow();
    this.onblur = () => this.onHide();
    this.bindEvents();
  }
  async bindEvents() {
    const children = await getChildren(this.children);
    let label;
    this.labelEl =
      children.filter((x) => x.slot === 'label')[0] ||
      this.shadowRoot?.getElementById('label');
    this.optionEls = children.filter((x) => x.slot === 'option');
    this.optionEls.forEach((element: HTMLElement) => {
      element.onkeyup = (evt: KeyboardEvent) => {
        if (evt.key === 'Enter') {
          this.onSelect(evt);
          this.onHide();
        }
      };
      element.onclick = (evt: MouseEvent) => {
        this.onSelect(evt);
        this.onHide();
      };
      element.onfocus = () => {
        clearTimeout(this.sto);
        this.onShow();
      };
      element.onblur = () => {
        this.onHide();
      };

      if (element.dataset.value === this.value) {
        label = element.dataset.label;
        element.classList.add('selected');
      }
    });
    this.labelEl.dataset.value = this.value;
    this.labelEl.dataset.label = label;
  }

  onSelect(evt: Event) {
    const element = evt.target as HTMLElement;
    const {value, label} = element.dataset;
    if (this.value === value) return;

    this.optionEls.forEach((x) => {
      if (x === element) return element.classList.add('selected');
      x.classList.remove('selected');
    });

    this.dispatchEvent(new Event('change', evt));
    this.value = value!;
    this.labelEl.dataset.value = value;
    this.labelEl.dataset.label = label;
  }
  onShow() {
    clearTimeout(this.sto);
    const {width} = this.getBoundingClientRect();
    this.classList.add('open');
    this.width = `${width}`;
    // this.top = `${top}`;
  }

  onHide() {
    this.sto = setTimeout(() => {
      this.classList.remove('open');
    }, 0);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'hb-select': HbSelect;
  }
}
