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
      <h1>H1h1H1h1H1h1</h1>
      <h2>H2h2H2h2H2h2</h2>
      <h3>H3h3H3h3H3h3</h3>

      <div>
        내용이 들어갑니다.<br />
        가나다라 마바사아 자차카파<br />
        가나다라 마바사아 자차카파<br />
        가나다라 마바사아 자차카파<br />
        가나다라 마바사아 자차카파<br />
      </div>
    </div>
  `;
};
