import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import Base from "./components/base";
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "variables/css",
} as Meta;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const r = document.querySelector(":root");
const rs = getComputedStyle(r);
const Template: Story<any> = () =>
  html`
    ${Base.themes.map((theme) =>
      Array(200)
        .fill(null)
        .map((_, i) => {
          const name = i - 100 ? `${theme}--${i - 100}` : theme;
          return `--color__${name}`;
        })
        .filter((x) => rs.getPropertyValue(x))
        .map(
          (x) =>
            html`
              <p style="color: var(${x})">${x}</p>
            `
        )
    )}
  `;

export const primary: Story<any> = Template.bind({});
