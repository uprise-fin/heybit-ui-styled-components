import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {SystemColor, ServiceColor, Color, levels} from './type';
import {colorPalette} from './index';
// import { HbButtonTheme } from "../../organism/button";
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
//     ${Object.keys(HbButtonTheme).map(
//       (theme) =>
//         html`
//           <hb-button theme=${theme}>${theme}</hb-button>
//         `
//     )}
//   `;
const LevelTemplate: Story<unknown> = () =>
  html`
    <style>
      .table {
        display: table;
        width: 100%;
        overflow: auto;
      }
      .box {
        display: table-row;
      }
      .box__item {
        display: table-cell;
        overflow: hidden;
        padding: 30px;
        white-space: nowrap;
        text-align: center;
        vertical-align: middle;
        background: var(--backrgound);
      }
      .box__item:before {
        content: attr(data-color);
      }
      .box__item:first-child {
        text-align: left;
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
        width: 100px;
      }
    </style>
    <div class="table">
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">
          시스템컬러
        </div>
        ${levels.map(
          x => html` <div class="box__item box__item--reversal">${x}</div> `,
        )}
      </div>
      ${Object.keys(SystemColor).map(
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
                      style="--backrgound: var(--${name}--${x})"
                      data-color="${colorPalette[name][x]}"
                      class="box__item ${colorPalette[name].color ===
                      colorPalette[name][x]
                        ? 'box__item--primary'
                        : ''}"
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
      ${Object.keys(ServiceColor).map(
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
                      style="--backrgound: var(--${name}--${x})"
                      data-color="${colorPalette[name][x]}"
                      class="box__item ${colorPalette[name].color ===
                      colorPalette[name][x]
                        ? 'box__item--primary'
                        : ''}"
                    ></div>
                  `,
              )}
            </div>
          `,
      )}
      </div>
    </div>
  `;

// export const base: Story<unknown> = Template.bind({});
export const several: Story<unknown> = LevelTemplate.bind({});
