import { html } from 'lit';
import './paper.scss';

/**
 * Primary UI component for user interaction
 */
export const Paper = ({ size, color, outline }: any) => {
  //TOTO 쉐도우가 없다!!

  const classed = ['card'];
  if (color) {
    classed.push(color);
  }
  if (size && size !== 'medium') {
    if (size == 'form') {
      classed.push('card-form');
    } else {
      size = size == 'small' ? 'sm' : 'lg';
      classed.push('card-' + size);
    }
  }
  if (outline && outline == 'true') {
    console.log(outline);
    classed.push('outline');
  }

  return html`
    <div class="paper" style="height:200px">
      <h2>제목입니다.</h2>
      <div>paper는 height의 센터에 내용이 설정됩니다.</div>
    </div>
  `;
};
