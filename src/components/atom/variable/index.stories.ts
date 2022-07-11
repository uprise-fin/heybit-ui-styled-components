import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {systemColor, serviceColor, Color} from '../../../models/atom/variable';
import {colorPalette, levels} from './index';
// import { hbButtonTheme } from "../../organism/button";
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/atom/variable',
} as Meta;
// // More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
// const Template: Story<unknown> = () =>
//   html`
//     ${Object.keys(hbButtonTheme).map(
//       (theme) =>
//         html`
//           <hb-button theme=${theme}>${theme}</hb-button>
//         `
//     )}
//   `;
const LevelTemplate: Story<unknown> = () =>
  html`
    <style>
      .box {
        display: flex;
      }
      .box__item {
        display: flex;
        flex-basis: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
      }
      .box__item:before {
        content: attr(data-color);
      }
      .box__item:first-child {
        flex-basis: 170px;
        padding-left: 30px;
        justify-content: left;
      }
      .box__item:nth-child(9),
      .box__item:nth-child(10),
      .box__item:nth-child(11) {
        color: #fff;
      }
      .box__item--primary::before {
        content: 'P';
        font-size: 2em;
      }
      .box__item--reversal {
        color: #fff;
        background: #000;
      }
      .box__item--title {
        flex-basis: 100px;
      }
    </style>
    <div class="box">
      <div class="box__item box__item--title box__item--reversal">
        시스템컬러
      </div>
      ${levels.map(
        x => html` <div class="box__item box__item--reversal">${x}</div> `,
      )}
    </div>
    ${Object.keys(systemColor).map(
      (name: Color) =>
        html`
          <div class="box">
            <div class="box__item box__item--title box__item--reversal">
              ${name}: ${colorPalette[name].color}
            </div>
            ${levels.map(
              x =>
                html`
                  <div
                    data-color="${colorPalette[name][x]}"
                    class="box__item ${colorPalette[name].color ===
                    colorPalette[name][x]
                      ? 'box__item--primary'
                      : ''}"
                    style="background: var(${`--${name}--${x}`})"
                  ></div>
                `,
            )}
          </div>
        `,
    )}
    <div class="box">
      <div class="box__item box__item--title box__item--reversal">
        서비스컬러
      </div>
      ${levels.map(
        x => html` <div class="box__item box__item--reversal">${x}</div> `,
      )}
    </div>
    ${Object.keys(serviceColor).map(
      (name: Color) =>
        html`
          <div class="box">
            <div class="box__item box__item--title box__item--reversal">
              ${name}: ${colorPalette[name].color}
            </div>
            ${levels.map(
              x =>
                html`
                  <div
                    data-color="${colorPalette[name][x]}"
                    class="box__item ${colorPalette[name].color ===
                    colorPalette[name][x]
                      ? 'box__item--primary'
                      : ''}"
                    style="background: var(${`--${name}--${x}`})"
                  ></div>
                `,
            )}
          </div>
        `,
    )}
  `;

// export const base: Story<unknown> = Template.bind({});
export const several: Story<unknown> = LevelTemplate.bind({});
