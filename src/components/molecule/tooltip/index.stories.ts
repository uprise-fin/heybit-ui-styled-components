import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbTooltip } from "./index";

export default {
  title: "components/molecule/hb-tooltip",
  component: "hb-tooltip",
  argTypes: {
      open: {
        options: [false, true],
        control: { type: 'radio' },
      },
    }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbTooltip> = ({open}) =>
  html`<hb-tooltip ?open=${open}><hb-icon icon="ic-my-setting-renewal.svg" slot="front"></hb-icon><div>블라블라</div></hb-tooltip>`;
export const primary: Story<HbTooltip> = Template.bind({});
primary.args = { open: false };
