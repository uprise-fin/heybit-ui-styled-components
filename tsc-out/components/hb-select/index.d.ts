/// <reference types="node" />
import Base from '../../utils/base';
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
export declare class HbSelect extends Base {
    static get styles(): any[];
    width: string;
    value: string;
    sto: NodeJS.Timeout;
    optionEls: HTMLElement[];
    labelEl: HTMLElement;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
    bindEvents(): Promise<void>;
    onSelect(evt: Event): void;
    onShow(): void;
    onHide(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'hb-select': HbSelect;
    }
}
//# sourceMappingURL=index.d.ts.map