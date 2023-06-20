import { html } from 'lit';
import './panel.scss';

/**
 * Primary UI component for user interaction
 */
export const Panel = ({ size, color }: any) => {
  //TOTO 쉐도우가 없다!!

  const classed = ['card'];
  if (color) {
    classed.push(color);
  }
  if (size && size !== 'medium') {
    size = size == 'small' ? 'sm' : 'lg';
    classed.push('card-' + size);
  }

  return html`
    <div class="panel">
      <div class="panel-heading">패널 타이틀 입니다.</div>
      <div class="panel-body">내용 내용 내용 내용</div>
    </div>
  `;
};
