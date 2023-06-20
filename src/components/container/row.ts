import { html } from 'lit';
import './row.scss';

/**
 * Primary UI component for user interaction
 */
export const Row = ({ size, color, outline }: any) => {
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
    <div class="hb-row">
      <div class="leading">L</div>
      <div class="trailing">T</div>

      <span class="content">리딩과 트레일링 있는 것</span>
    </div>

    <br />

    <div class="hb-row">
      <div class="leading">L</div>
      <span class="content">리딩만 있는 것</span>
    </div>

    <br />

    <div class="hb-row">
      <div class="leading">L</div>
      <span class="content">트레일링만 있는 것</span>
    </div>

    <br />

    <div class="hb-row">
      <span class="content">내용만 있는 것</span>
    </div>

    <br />

    <div class="hb-row">
      <div class="leading">L</div>
      <div class="trailing">T</div>
    </div>

    <br />
    <div class="hb-row">
      <div class="leading label">Label</div>
      <div class="trailing value">Trailing</div>

      <span class="content">lable과 value에 대한 공통 정보</span>
    </div>
  `;
};
