import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { skeletonType } from "../../molecule/skeleton";
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

const ColorTemplate = (props: HbCarousel) => html`
  <hb-carousel 
    ?auto=${props.auto} 
    ?draggable=${props.draggable} 
    ?infinite=${props.infinite} 
    ?pause=${props.pause} 
    ?rolling=${props.rolling} 
    speed=${props.speed}
    duration=${props.duration}
    fakeLength=${props.fakeLength} 
    index=${props.index} 
    flexWidth=${props.flexWidth} 
    visibleLength=${props.visibleLength}>
    <div style="height: 300px; background: var(--orange);">1</div>
    <div style="height: 300px; background: var(--yellow);">2</div>
    <div style="height: 300px; background: var(--black);">3</div>
  </hb-carousel>
`;
const SkeletonTemplate = (props: HbCarousel) => html`
  <hb-carousel 
    ?auto=${props.auto} 
    ?draggable=${props.draggable} 
    ?infinite=${props.infinite} 
    ?pause=${props.pause} 
    ?rolling=${props.rolling} 
    speed=${props.speed}
    duration=${props.duration}
    fakeLength=${props.fakeLength} 
    index=${props.index} 
    flexWidth=${props.flexWidth} 
    visibleLength=${props.visibleLength}>
    <hb-skeleton type=${skeletonType.card} style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type=${skeletonType.card} style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type=${skeletonType.card} style="margin: 0 10px;"></hb-skeleton>
  </hb-carousel>
`;
const StopTemplate: Story<HbCarousel> = (props) => {
  props.visibleLength = 1;
  return ColorTemplate(props);
};
const AutoTemplate: Story<HbCarousel> = (props) => {
  props.visibleLength = 1;
  props.auto = true;
  return ColorTemplate(props);
};
const AutoInfiniteTemplate: Story<HbCarousel> = (props) => {
  props.fakeLength = 1;
  props.visibleLength = 3;
  props.auto = true;
  props.infinite = true;
  return SkeletonTemplate(props);
};
const RollingInfiniteTemplate: Story<HbCarousel> = (props) => {
  props.fakeLength = 1;
  props.visibleLength = 3;
  props.auto = true;
  props.infinite = true;
  props.rolling = true;
  return SkeletonTemplate(props);
};
export const stop: Story<HbCarousel> = StopTemplate.bind({});
stop.args = {
  speed: 300,
  draggable: true
};
export const auto: Story<HbCarousel> = AutoTemplate.bind({});
auto.args = {
  speed: 300,
  pause: true,
  draggable: true,
  duration: 3000,
};
export const autoInfinite: Story<HbCarousel> = AutoInfiniteTemplate.bind({});
autoInfinite.args = {
  speed: 300,
  pause: true,
  draggable: true,
  infinite: true,
  duration: 3000,
};
export const autoInfiniteFlex: Story<HbCarousel> = AutoInfiniteTemplate.bind({});
autoInfiniteFlex.args = {
  speed: 300,
  pause: true,
  flexWidth: 300,
  draggable: true,
  infinite: true,
  duration: 3000,
};
export const rollingInfinite: Story<HbCarousel> = RollingInfiniteTemplate.bind({});
rollingInfinite.args = {
  infinite: true,
  pause: true,
  duration: 3000,
};