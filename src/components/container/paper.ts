import { html } from 'lit';
import './paper.scss';

/**
 * Primary UI component for user interaction
 */
export const Paper = ({}: any) => {
  return html`
    <div class="paper" style="height:200px">
      <h2>제목입니다.</h2>
      <div>paper는 height의 센터에 내용이 설정됩니다.</div>
    </div>
  `;
};
