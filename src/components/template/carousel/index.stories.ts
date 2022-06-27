import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { dev } from "../../../utils";
import "./index";
import type { HbCarousel } from "./index";

export default dev() && {
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


const Template: Story<HbCarousel> = ({draggable,rolling,auto,pause,index,items,visibleLength,infinite}) =>
  html`
  <style>
    .a {
      background: var(--primary);
    }
    .b {
      background: var(--primary__100);
    }
    .c {
      background: var(--primary__900);
    }

  </style>
  <hb-carousel 
      ?auto=${auto} 
      ?draggable=${draggable} 
      ?infinite=${infinite} 
      ?pause=${pause} 
      ?rolling=${rolling} 
      index=${index} 
      items=${items} 
      visibleLength=${visibleLength}>
    <div class="a">
      업라이즈
    </div>
    <div class="b">
      ㄱㅁㅇㅈㅇㅁㅈㅇㅁㅈ
    </div>
    <div class="c">
      dakljdjalwkjd awljalwa
    </div>
  </hb-carousel>`;
export const primary: Story<HbCarousel> = Template.bind({});
primary.args = {
  auto: true,
  pause: true,
  rolling: true,
  draggable: false,
  index: 0,
  items: 3,
  visibleLength: 3,
  infinite: true
};