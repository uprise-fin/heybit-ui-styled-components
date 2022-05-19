import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbLoading } from "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/atom/hb-loading",
  component: "hb-loading",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbLoading> = () => html`
<style>
.loading {
  width: 300px;
  height: 300px;
}
</style>
<hb-loading class="loading"></hb-loading>`;

export const float: Story<HbLoading> = Template.bind({});
