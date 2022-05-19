import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import { HbSkeleton, type } from "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/molecule/hb-skeleton",
  component: "hb-skeleton",
  argTypes: {
    type: {
      options: Object.keys(type),
      control: { type: "radio" },
      defaultValue: type.card,
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSkeleton> = ({ type }) =>
  html`
    <hb-skeleton type=${type}></hb-skeleton>
  `;

export const card: Story<HbSkeleton> = Template.bind({});
card.args = {
  type: type.card,
};
