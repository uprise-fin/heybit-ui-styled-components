import { html } from 'lit';
import './card.scss';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ size, color, outline }: any) => {
  //TOTO 쉐도우가 없다!!

  const classed = ['card'];
  if (color) {
    classed.push(color);
  }
  if (size && size !== 'medium') {
    if (size == 'form') {
      classed.push('card--form');
    } else {
      size = size == 'small' ? 'sm' : 'lg';
      classed.push('card--' + size);
    }
  }
  if (outline && outline == 'true') {
    classed.push('card--outline');
  }

  return html`
    <div class=${classed.join(' ')}>
      <div class="card__title">제목입니다.</div>
      <div class="card__body">내용입니다.</div>
      <div class="card__footer">footer 입니다.</div>
    </div>

    <br />
    <div class=${classed.join(' ')} style="background:#f00">
      <div class="card__body">내용 없는 카드</div>
    </div>
  `;
};
