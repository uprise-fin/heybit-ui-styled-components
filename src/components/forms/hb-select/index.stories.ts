import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import "./index";
import type { HbSelect } from './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/forms/hb-select",
  component: "hb-select",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSelect> = () =>
  html`
    <hb-select></hb-select>
  `;
const OpionSlotTmpl: Story<HbSelect> = ({ value, label, options }) =>
  html`
    <hb-select value=${value} label=${label} .options=${options}></hb-select>
  `;

export const empty: Story<HbSelect> = Template.bind({});
export const primary: Story<HbSelect> = OpionSlotTmpl.bind({});
primary.args = {
  value: "1",
  options: [{label: '1번', value:'1'},{label: '2번', value:'2'}]
};
