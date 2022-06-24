import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbCarousel } from "./index";

export default {
  title: "components/template/hb-carousel",
  component: "hb-carousel",
  argTypes: {
    index: {
      options: [0,1,2],
      control: { type: 'radio' },
      defaultValue: 0
    },
  }
} as Meta;


const Template: Story<HbCarousel> = ({auto,index,items,visibleLength,infinite}) =>
  html`<hb-carousel 
      ?auto=${auto} 
      ?infinite=${infinite} 
      index=${index} 
      items=${items} 
      visibleLength=${visibleLength}>
    <div>
      업라이즈
    </div>
    <div>
      ㄱㅁㅇㅈㅇㅁㅈㅇㅁㅈ
    </div>
    <div>
      dakljdjalwkjd awljalwa
    </div>
  </hb-carousel>`;
export const primary: Story<HbCarousel> = Template.bind({});
primary.args = {
  auto: true,
  index: 0,
  items: 3,
  visibleLength: 3,
  infinite: true
};