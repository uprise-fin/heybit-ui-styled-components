import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { size } from "../base";
import "./index";
import type { HbIcon } from "./index";
import SVG from './svg';

export default {
  title: "components/hb-icon",
  component: "hb-icon",
  argTypes: {
    icon: {
        options: Object.keys(SVG),
        control: { type: 'select' },
      },
      size: {
        options: Object.keys(size),
        control: { type: 'select' },
      },
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIcon> = ({ icon, size }) =>
  html`<hb-icon icon=${icon} size=${size}></hb-icon>`;
export const primary: Story<HbIcon> = Template.bind({});
primary.args = { icon: "ic-system-service-trx.svg", size: size.small };
