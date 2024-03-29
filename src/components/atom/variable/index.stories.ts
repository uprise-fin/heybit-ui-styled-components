import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import {
  CreateColor,
  SystemTheme,
  colorPalette,
  levels,
  prefix,
  serviceColors,
  statusColors,
  systemColors,
  primaryColors
} from './type';
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
const reverseLevels = [...levels].reverse();
export default {
  component: 'hb-variable'
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
const copy = (color: CreateColor) => () => {
  const variables = [...levels]
    .map((level) => `--${prefix}__${color}--${level}: ${colorPalette[color][level]};`)
    .join('');

  navigator.clipboard.writeText(variables).then(
    () => {
      alert('Successfully copied this line.');
    },
    () => {
      alert('Failed to copy.');
    }
  );
};
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
      .status{
        width: 100%;
        display: flex;
        gap: 35px;
      }
      .status__item{
        display: flex;
        flex-direction: column;
        justify-content: center;
        color: #fff;
        flex: 1 0 auto;
        width: 130px;
        height: 130px;
        border-radius:100%;
        text-align: center;
        background: var(--background);
      }
      .status__item-title{
        font-size: 20px;
        font-weight: 700;
      }
      .status__item-content{
        margin:0;
        font-size: 12px;
        font-weight: 400;
      }
    </style>
    <div class="table">
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">
          시스템컬러
        </div>
        ${reverseLevels.map((x) => html` <div class="box__item box__item--reversal">${x}</div> `)}
      </div>
      ${systemColors.map(
        (name: CreateColor) =>
          html`
            <div class="box">
              <div class="box__item box__item--title box__item--reversal">
                <button @click=${copy(name)}>Copy</button> ${name}: ${primaryColors[name]}
              </div>
              ${reverseLevels.map(
                (x) =>
                  html`
                    <div
                      style="--background: var(--${prefix}__${name}--${x})"
                      data-color="${colorPalette[name][x]}"
                      class="box__item ${primaryColors[name] === colorPalette[name][x]
                        ? 'box__item--primary'
                        : ''}"
                    ></div>
                  `
              )}
            </div>
          `
      )}
      <div class="box">
        <div class="box__item box__item--title box__item--reversal">
          서비스컬러
        </div>
        ${reverseLevels.map((x) => html` <div class="box__item box__item--reversal">${x}</div> `)}
      </div>
      ${serviceColors.map(
        (name: CreateColor) =>
          html`
            <div class="box">
              <div class="box__item box__item--title box__item--reversal">
                <button @click=${copy(name)}>Copy</button>
                ${name}: ${primaryColors[name]}
              </div>
              ${reverseLevels.map(
                (x) =>
                  html`
                    <div
                      style="--background: var(--${prefix}__${name}--${x})"
                      data-color="${colorPalette[name][x]}"
                      class="box__item ${primaryColors[name] === colorPalette[name][x]
                        ? 'box__item--primary'
                        : ''}"
                    ></div>
                  `
              )}
            </div>
          `
      )}
      </div>
      <div class="status">
      ${Object.keys(statusColors).map(
        (key: SystemTheme) =>
          html`
            <dl class="status__item" style="--background: ${statusColors[key]}">
              <dt class="status__item-title">${key}</dt>
              <dd class="status__item-content">${statusColors[key]}</dd>
            </dl>
          `
      )}
      </div>
    </div>
  `;

// export const base: Story<unknown> = Template.bind({});
export const several: Story<unknown> = LevelTemplate.bind({});
