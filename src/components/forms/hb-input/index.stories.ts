import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import { HbInput, type } from "./index";

export default {
  title: "components/forms/hb-input",
  component: "hb-input",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbInput> = ({ type }) =>
  html`
    <hb-input type=${type}></hb-input>
  `;

export const text: Story<HbInput> = Template.bind({});
text.args = { type: type.text };
export const number: Story<HbInput> = Template.bind({});
number.args = { type: type.number };
