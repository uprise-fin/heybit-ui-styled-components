import { html } from 'lit';
import './hb-row.scss';

/**
 * Primary UI component for user interaction
 */
export const HbRow = ({ align }: any) => {
  //TOTO 쉐도우가 없다!!

  const classed = ['hb-row'];
  if (align) {
    classed.push('hb-row--' + align);
  }

  return html`
    <div class="${classed.join(' ')}">
      <div class="hb-row__leading">Leading</div>
      <div class="hb-row__trailing">Trailing</div>

      <span class="content">리딩과 트레일링 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(' ')}">
      <div class="hb-row__leading">Leading</div>
      <span class="content">리딩만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(' ')}">
      <div class="hb-row__trailing">Trailing</div>
      <span class="content">트레일링만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(' ')}">
      <span class="content">내용만 있는 것</span>
    </div>

    <br />

    <div class="${classed.join(' ')}">
      <div class="hb-row__leading">Leading</div>
      <div class="hb-row__trailing">Trailing</div>
    </div>

    <br />
    <div class="${classed.join(' ')}">
      <div class="hb-row__leading hb-row-label">Label</div>
      <div class="hb-row__trailing hb-row-value">Trailing</div>

      <span class="content">lable과 value에 대한 공통 정보</span>
    </div>

    <br />
    <div class="${classed.join(' ')}">
      <div class="hb-row__leading hb-row-label">Label</div>
      <div class="hb-row__trailing hb-row-value">Trailing</div>

      <span class="content"
        >lable과 value에 대한 공통 정보<br />
        줄넘김</span
      >
    </div>
  `;
};
