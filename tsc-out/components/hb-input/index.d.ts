import Base from '../../utils/base';
/**
 * An example element.
 *
 * @fires input 입력할때
 * @fires change 값이 변경될때 발생
 * @property value 기본 값
 * @slot slot--left - optional, 왼쪽 영역(아이콘)
 * @slot slot--right - optional, 오른쪽 영역(버튼)
 * @csspart slot--left
 * @csspart border
 * @csspart slot--right
 */
export declare class HbInput extends Base {
    static get styles(): any[];
    value: string;
    inputEl: HTMLInputElement;
    render(): import("lit-html").TemplateResult<1>;
    connectedCallback(): void;
}
declare global {
    interface HTMLElementTagNameMap {
        'hb-input': HbInput;
    }
}
//# sourceMappingURL=index.d.ts.map