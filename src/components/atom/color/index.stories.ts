import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { setRootStyleProperty, levels } from "./index";
import { Base } from "../../base";
setRootStyleProperty();
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/atom/css",
} as Meta;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<unknown> = () =>
  html`
    ${Base.themes.map(
      (theme) =>
        html`
          <hb-button theme=${theme}>${theme}</hb-button>
        `
    )}
  `;
const LevelTemplate: Story<unknown> = () =>
  html`
    <style>
      .box {
        display: flex;
      }
      .box__item {
        display: flex;
        flex-basis: 50px;
        height: 50px;
        align-items: center;
        justify-content: center;
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
      <div class="box__item box__item--title box__item--reversal"></div>
      ${levels.map(
        (x) =>
          html`
            <div class="box__item box__item--reversal">${x}</div>
          `
      )}
    </div>
    ${Base.themes.map(
      (theme) =>
        html`
          <div class="box">
            <div class="box__item box__item--title box__item--reversal">
              ${theme}
            </div>
            ${levels.map(
              (x) =>
                html`
                  <div
                    class="box__item"
                    style="background: var(${`--${theme}__${x}`})"
                  ></div>
                `
            )}
          </div>
        `
    )}
  `;

export const base: Story<unknown> = Template.bind({});
export const several: Story<unknown> = LevelTemplate.bind({});
