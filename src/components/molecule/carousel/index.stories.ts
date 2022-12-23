import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbCarousel } from './index';

export default {
  title: 'components/molecule/hb-carousel',
  component: 'hb-carousel',
  argTypes: {
    index: {
      options: [0, 1, 2],
      control: { type: 'radio' },
      defaultValue: 0
    }
  }
} as Meta;

const ColorTemplate = (props: HbCarousel) => html`
  <hb-carousel
    ?auto=${props.auto}
    ?draggable=${props.draggable}
    ?infinite=${props.infinite}
    ?pause=${props.pause}
    ?rolling=${props.rolling}
    ?indicate=${props.indicate}
    speed=${props.speed}
    duration=${props.duration}
    fakeLength=${props.fakeLength}
    index=${props.index}
    flexWidth=${props.flexWidth}
    visibleLength=${props.visibleLength}
  >
    <div style="height: 300px; background: var(--husc__orange);">1</div>
    <div style="height: 300px; background: var(--husc__yellow);">2</div>
    <div style="height: 300px; background: var(--husc__black);">3</div>
  </hb-carousel>
`;
const SkeletonTemplate = (props: HbCarousel) => html`
  <hb-carousel
    ?auto=${props.auto}
    ?draggable=${props.draggable}
    ?infinite=${props.infinite}
    ?pause=${props.pause}
    ?rolling=${props.rolling}
    ?indicate=${props.indicate}
    speed=${props.speed}
    duration=${props.duration}
    fakeLength=${props.fakeLength}
    index=${props.index}
    flexWidth=${props.flexWidth}
    visibleLength=${props.visibleLength}
  >
    <hb-skeleton type="card" style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type="card" style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type="card" style="margin: 0 10px;"></hb-skeleton>
  </hb-carousel>
`;
const StopTemplate: Story<HbCarousel> = (props) => {
  props.visibleLength = 1;
  props.indicate = true;
  return ColorTemplate(props);
};
const AutoTemplate: Story<HbCarousel> = (props) => {
  props.visibleLength = 1;
  props.auto = true;
  props.indicate = true;
  return ColorTemplate(props);
};
const AutoInfiniteTemplate: Story<HbCarousel> = (props) => {
  props.fakeLength = 1;
  props.visibleLength = 3;
  props.auto = true;
  props.infinite = true;
  props.indicate = true;
  return SkeletonTemplate(props);
};
const RollingInfiniteTemplate: Story<HbCarousel> = (props) => {
  props.fakeLength = 1;
  props.visibleLength = 3;
  props.auto = true;
  props.infinite = true;
  props.rolling = true;
  props.indicate = true;
  return SkeletonTemplate(props);
};
export const stopCarousel: Story<HbCarousel> = StopTemplate.bind({});
stopCarousel.args = {
  speed: 300,
  draggable: true
};
export const autoCarousel: Story<HbCarousel> = AutoTemplate.bind({});
autoCarousel.args = {
  speed: 300,
  pause: true,
  draggable: true,
  duration: 3000
};
export const autoInfiniteCarousel: Story<HbCarousel> = AutoInfiniteTemplate.bind({});
autoInfiniteCarousel.args = {
  speed: 300,
  pause: true,
  draggable: true,
  duration: 3000
};
export const autoInfiniteFlexCarousel: Story<HbCarousel> = AutoInfiniteTemplate.bind({});
autoInfiniteFlexCarousel.args = {
  speed: 300,
  fakeLength: 3,
  pause: true,
  flexWidth: 300,
  draggable: true,
  duration: 3000
};
export const rollingInfiniteCarousel: Story<HbCarousel> = RollingInfiniteTemplate.bind({});
rollingInfiniteCarousel.args = {
  fakeLength: 3,
  pause: true,
  duration: 3000
};
