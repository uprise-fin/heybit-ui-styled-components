import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { size, theme } from "../../base";
import "./index";
import type { HbIcon } from "./index";
import SVG from './svg';

export default {
  title: "components/molecule/hb-icon(작업중)",
  component: "hb-icon",
  argTypes: {
    icon: {
        options: Object.keys(SVG),
        control: { type: 'radio' },
      },
      size: {
        options: Object.keys(size),
        control: { type: 'radio' },
      },
      theme: {
        options: Object.keys(theme).concat(''),
        control: { type: 'radio' },
      }
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIcon> = ({ icon, size,theme }) =>
  html`<hb-icon icon=${icon} size=${size} theme=${theme}></hb-icon>`;
export const primary: Story<HbIcon> = Template.bind({});
primary.args = { icon: "ic-system-service-trx", size: size.small };
