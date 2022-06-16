import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbToast } from "./index";

export default {
  title: "components/molecule/hb-toast",
  component: "hb-toast",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbToast> = ({messages}) =>
  html`<hb-toast messages=${messages}></hb-toast>`;
export const primary: Story<HbToast> = Template.bind({});
primary.args = { messages: 'ㅇㅁㅈㅇㅁㅈㅇㅁㅈ \n dawd' };
