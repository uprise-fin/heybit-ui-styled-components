import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { palette } from "./index";
import { Base } from "../../base";
console.log(palette);
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/atom/css",
} as Meta;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<any> = () =>
  html`
    ${Base.themes.map(
      (theme) =>
        html`
          <p style="background: var(--${theme})">${theme}</p>
        `
    )}
  `;
const LevelTemplate: Story<any> = () =>
  html`
    ${Base.themes.map((theme) =>
      [50, 100, 200, 300, 400, 500, 600, 700, 800, 900].map(
        (x) =>
          html`
            <p style="background: var(${`--${theme}__${x}`})">${x}</p>
          `
      )
    )}
  `;

export const base: Story<any> = Template.bind({});
export const several: Story<any> = LevelTemplate.bind({});
