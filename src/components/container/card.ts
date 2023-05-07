import { html } from 'lit';
import './card.scss';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ size, color }: any) => {
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
    <div class=${classed.join(' ')}>
      <div class="card-heading">제목입니다.</div>
      <div class="card-content">내용입니다.</div>
      <div class="card-footer">footer 입니다.</div>
    </div>

    <br />
    <div class=${classed.join(' ')} style="background:#f00">
      <div class="card-content">내용 없는 카드</div>
    </div>
  `;
};
