import { html } from 'lit';
import './section.scss';

/**
 * Primary UI component for user interaction
 */
export const Section = ({}) => {
  return html`
    <section class="section">
      <h1>Section 정보 입니다.</h1>

      <pre>
        페이지 전체 width를 가지고 있습니다.
        section에 배경색을 지정하면, width 전체에 적용됩니다.
        일반적으로 아래 두 구조로 생성됩니다.

        한 단짜리 레이아웃 입니다.
        section
          .containers
            panel
            card

        두 단짜리 레이아웃 입니다.
        가이드에서는 50% 비율의 2단만 지원합니다.
        section
          .containers
            .grid
              .grid-item
                panel
              .grid-item
                card
      </pre
      >
    </section>
  `;
};
