import { html } from 'lit';
import './hb-list.scss';

/**
 * Primary UI component for user interaction
 */
export const HbList = ({ size, color, outline }: any) => {
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
    <div class=".hb-column">
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
      <div>hb-column 은 리스트간 gap을 설정 합니다. 기본 16px 입니다.</div>
    </div>
  `;
};
