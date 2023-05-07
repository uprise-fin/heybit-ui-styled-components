import { html } from 'lit';
import './grid.scss';

/**
 * Primary UI component for user interaction
 */
export const Grid = () => {
  return html`
    <div class="row">
      <div class="col">
        <h1>Grid 정보 입니다.</h1>

        <pre>
          페이지를 좌우 분할하기 위한 용도로.
          row, col 이 같이 사용되어야 합니다. 
          정비율 col은 2단 까지만 구현 됩니다.

          나머지는 해당 페이지에서, col의 width:25% 등으로 정의해 주세요.
          정비율이 아니라면, 한쪽을 width:200px 등으로 정의해 주세요.
        </pre>
      </div>
      
      <div class="col">
      <h1>Grid 정보 입니다.</h1>

      <pre>
        페이지를 좌우 분할하기 위한 용도로.
        row, col 이 같이 사용되어야 합니다. 
        정비율 col은 2단 까지만 구현 됩니다.

        나머지는 해당 페이지에서, col의 width:25% 등으로 정의해 주세요.
        정비율이 아니라면, 한쪽을 width:200px 등으로 정의해 주세요.
      </pre>
    </div>
    </div>
  `;
};
