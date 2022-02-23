import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbIcon } from "./index";

export default {
  title: "components/hb-icon",
  component: "hb-icon",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIcon> = ({ icon }) =>
  html`<hb-icon icon=${icon}></hb-icon>`;

export const primary: Story<HbIcon> = Template.bind({});
primary.args = { icon: "ic-system-menu-24-white" };
