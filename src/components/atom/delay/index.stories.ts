import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { dev } from "../../../utils";
import "./index";
import type { HbDelay } from "./index";
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default dev() &&
  ({
    title: "components/atom/hb-delay",
    component: "hb-delay",
  } as Meta);
const Template: Story<HbDelay> = () =>
  html`<hb-delay><div style="background: red;">블라블라</div></hb-delay>`;

export const visible: Story<HbDelay> = Template.bind({});
visible.args = {};
