import { html } from 'lit';
import './panel.scss';

/**
 * Primary UI component for user interaction
 */
export const Panel = ({}: any) => {
  return html`
    <div class="panel">
      <div class="panel__title">패널 타이틀 입니다.</div>
      <div class="panel__body">내용 내용 내용 내용</div>
    </div>
  `;
};
