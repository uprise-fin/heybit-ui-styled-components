import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbSkeleton } from "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/layers/hb-skeleton",
  component: "hb-skeleton",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSkeleton> = ({length}) => html`
<style>
  hb-skeleton {
    grid-template-columns: 100px 100px 100px 100px 100px; 
    grid-template-rows: 100px 100px;
    gap: 10px;
  }
  hb-skeleton::part(cell-1) {
    grid-column: 1 / 4;
	  grid-row: 1 / 3;
  }
</style>
<hb-skeleton .length=${length} ></hb-skeleton>`
;

export const primary: Story<HbSkeleton> = Template.bind({});
primary.args = {length : 5};
