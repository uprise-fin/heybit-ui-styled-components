import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
const variables = Object.values(
  require("./initial.scss").default.styleSheet.cssRules
).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "variables/css",
} as Meta;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<any> = () =>
  html`
    <p style="color: var(--font--1)">텍스트 컬러</p>
    <p style="color: var(--font--2)">텍스트 컬러</p>
    <p style="color: var(--font--3)">텍스트 컬러</p>
  `;

export const primary: Story<any> = Template.bind({});
