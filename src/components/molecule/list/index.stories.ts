import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbList } from "./index";

export default {
  title: "components/molecule/hb-list",
  component: "hb-list",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const OpionSlotTmpl: Story<HbList> = ({ value, options }) =>
  html`<hb-list value=${value} .options=${options} @change=${($event: any) => console.log($event)}></hb-list>`;

export const primary: Story<HbList> = OpionSlotTmpl.bind({});
primary.args = {
  value: "1",
  options: [
    {label: '1번', value:'1'},
    {label: '2번', value:'2'},
    {label: '3번', value:'3'},
    {label: '4번', value:'4'},
    {label: '5번', value:'5'},
    {label: '6번', value:'6'},
    {label: '7번', value:'7'},
    {label: '8번', value:'8'},
    {label: '9번', value:'9'},
    {label: '10번', value:'10'},
    {label: '11번', value:'11'},
    {label: '12번', value:'12'},
    {label: '13번', value:'13'},
    {label: '14번', value:'14'},
    {label: '15번', value:'15'},
    {label: '16번', value:'16'},
    {label: '17번', value:'17'},
    {label: '18번', value:'18'},
    {label: '19번', value:'19'},
    {label: '20번', value:'20'},
    {label: '21번', value:'21'},
    {label: '22번', value:'22'},
    {label: '23번', value:'23'},
    {label: '24번', value:'24'},
  ]
};
