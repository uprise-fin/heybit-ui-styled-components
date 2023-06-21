import { html } from 'lit';
import './hb-list.scss';

/**
 * Primary UI component for user interaction
 */
export const HbList = () => {
  return html`
    <div class="hb-list">
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
    </div>
  `;
};
