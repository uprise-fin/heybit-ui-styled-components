import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import {
  ColorV2,
  colorPaletteV2,
  levelsV2,
  prefixV2,
  serviceColorsV2,
  systemColorsV2,
  ServiceColorV2,
  statusColorPaletteV2,
  statusColorPrimaryV2
} from './type';
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
const reverseLevels = [...levelsV2].reverse();
export default {
  title: `hb-colors`
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
        background: var(--background);
      }
      .box__item:before {
        content: attr(data-color);
      }
      .box__item:first-child {
        text-align: left;
      }
      .box__item:nth-child(1),
      .box__item:nth-child(2),
      .box__item:nth-child(3) {
        color: #fff;
      }
      .box__item--primary::before {
        content: 'P ['attr(data-color)']';
        font-size: 1.5em;
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
        <div class="box__item box__item--title box__item--reversal">시스템컬러</div>
        ${reverseLevels.map((x) => html` <div class="box__item box__item--reversal">${x}</div> `)}
      </div>
      ${systemColorsV2.map(
        (name: ColorV2) =>
          html`
            <div class="box">
              <div class="box__item box__item--title box__item--reversal">${name}</div>
              ${reverseLevels.map(
                (x) =>
                  html`
                    <div
                      style="--background: var(--${prefixV2}__${name}--${x})"
                      data-color="${colorPaletteV2[name][x]}"
                      class="box__item ${colorPaletteV2[name].color === colorPaletteV2[name][x]
                        ? 'box__item--primary'
                        : ''}"
                    ></div>
                  `
              )}
            </div>
          `
      )}
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">서비스컬러</div>
        ${reverseLevels.map((x) => html` <div class="box__item box__item--reversal">${x}</div> `)}
      </div>
        ${serviceColorsV2.map(
          (name: ServiceColorV2) =>
            html`
              <div class="box">
                <div class="box__item box__item--title box__item--reversal">${name}</div>
                ${reverseLevels.map(
                  (x) =>
                    html`
                      <div
                        style="--background: var(--${prefixV2}__${name}--${x})"
                        data-color="${statusColorPaletteV2[name][x]}"
                        class="box__item ${statusColorPrimaryV2[name] ===
                        statusColorPaletteV2[name][x]
                          ? 'box__item--primary'
                          : ''}"
                      ></div>
                    `
                )}
              </div>
            `
        )}
      </div>
    </div>
  `;

// export const base: Story<unknown> = Template.bind({});
export const several: Story<unknown> = LevelTemplate.bind({});
