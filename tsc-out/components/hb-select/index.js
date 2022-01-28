var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import Base from '../../utils/base';
import { html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { getChildren } from '../../utils';
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
let HbSelect = class HbSelect extends Base {
    constructor() {
        super(...arguments);
        this.sto = setTimeout(() => { }, 0);
    }
    static get styles() {
        return [style];
    }
    render() {
        return html `
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
    connectedCallback() {
        super.connectedCallback();
        this.tabIndex = 0;
        this.onfocus = () => this.onShow();
        this.onblur = () => this.onHide();
        this.bindEvents();
    }
    async bindEvents() {
        var _a;
        const children = await getChildren(this.children);
        let label;
        this.labelEl =
            children.filter((x) => x.slot === 'label')[0] ||
                ((_a = this.shadowRoot) === null || _a === void 0 ? void 0 : _a.getElementById('label'));
        this.optionEls = children.filter((x) => x.slot === 'option');
        this.optionEls.forEach((element) => {
            element.onkeyup = (evt) => {
                if (evt.key === 'Enter') {
                    this.onSelect(evt);
                    this.onHide();
                }
            };
            element.onclick = (evt) => {
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
    onSelect(evt) {
        const element = evt.target;
        const { value, label } = element.dataset;
        if (this.value === value)
            return;
        this.optionEls.forEach((x) => {
            if (x === element)
                return element.classList.add('selected');
            x.classList.remove('selected');
        });
        this.dispatchEvent(new Event('change', evt));
        this.value = value;
        this.labelEl.dataset.value = value;
        this.labelEl.dataset.label = label;
    }
    onShow() {
        clearTimeout(this.sto);
        const { width } = this.getBoundingClientRect();
        this.classList.add('open');
        this.width = `${width}`;
        // this.top = `${top}`;
    }
    onHide() {
        this.sto = setTimeout(() => {
            this.classList.remove('open');
        }, 0);
    }
};
__decorate([
    property()
], HbSelect.prototype, "width", void 0);
__decorate([
    property()
], HbSelect.prototype, "value", void 0);
HbSelect = __decorate([
    customElement('hb-select')
], HbSelect);
export { HbSelect };
//# sourceMappingURL=index.js.map