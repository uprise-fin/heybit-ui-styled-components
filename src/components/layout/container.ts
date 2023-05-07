import { html } from 'lit';
import './container.scss';

/**
 * Primary UI component for user interaction
 */
export const Container = ({ size, color }: any) => {
  //TOTO 쉐도우가 없다!!

  const classed = ['container'];
  if (color) {
    classed.push(color);
  }
  if (size && size !== 'large') {
    size = size == 'small' ? 'sm' : 'md';
    classed.push('container-' + size);
  }

  return html`
    <div class=${classed.join(' ')}>
      <div>Container 정보 입니다.</div>
      <div>일반적으로 container에 바로 사용하지 않습니다.</div>
      <div>Container는 웹페이지의 내용 사이즈가 정의 됩니다.</div>
      <div>Content-width를 위한 용도입니다.</div>
      <div>
        일정 블록이 채굴될 때마다(대략 4년 간격) 반감기가 발생하며 채굴할 수 있는 물량이
        줄어드는데요. 첫 번째 반감기는 2012년 11월, 두 번째 반감기는 2016년 7월, 세 번째 반감기는
        2020년 5월에 이루어졌습니다. 처음 채굴 보상은 50 BTC였지만, 이후에는 25, 12.5, 현재는 6.25
        BTC까지 감소하였습니다.
      </div>
    </div>
  `;
};
