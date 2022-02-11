import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import "./index";
import type { HbSelect } from './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "forms/hb-select",
  component: "hb-select",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSelect> = () =>
  html`
    <hb-select></hb-select>
  `;
const OpionSlotTmpl: Story<HbSelect> = ({ value, label }) =>
  html`
    <hb-select value=${value} label=${label}></hb-select>
  `;

export const empty: Story<HbSelect> = Template.bind({});
export const primary: Story<HbSelect> = OpionSlotTmpl.bind({});
primary.args = {
  value: "uprise",
  label: "업라이즈",
};
