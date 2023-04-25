import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbCarousel } from './index';

export default {
  component: 'hb-carousel',
  argTypes: {
    index: {
      options: [0, 1, 2],
      control: { type: 'radio' }
    }
  },
  args: {
    index: 0
  }
} as Meta<HbCarousel>;

type Story = StoryObj<HbCarousel>;

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
    <hb-skeleton @click=${() => console.log(111)} type="card" style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type="card" style="margin: 0 10px;"></hb-skeleton>
    <hb-skeleton type="card" style="margin: 0 10px;"></hb-skeleton>
  </hb-carousel>
`;
export const stopCarousel: Story = {
  render: (args) => ColorTemplate(args),
  args: {
    visibleLength: 1,
    indicate: true,
    speed: 300,
    draggable: true
  }
};

export const autoCarousel: Story = {
  render: (args) => ColorTemplate(args),
  args: {
    visibleLength: 1,
    auto: true,
    indicate: true,
    speed: 300,
    pause: true,
    draggable: true,
    duration: 3000
  }
};

export const autoInfiniteCarousel: Story = {
  render: (args) => SkeletonTemplate(args),
  args: {
    fakeLength: 1,
    visibleLength: 3,
    auto: true,
    infinite: true,
    indicate: true,
    speed: 300,
    pause: true,
    draggable: true,
    duration: 3000
  }
};

export const autoInfiniteFlexCarousel: Story = {
  render: (args) => SkeletonTemplate(args),
  args: {
    fakeLength: 1,
    visibleLength: 3,
    auto: true,
    infinite: true,
    indicate: true,
    speed: 300,
    pause: true,
    draggable: true,
    duration: 3000
  }
};

export const rollingInfiniteCarousel: Story = {
  render: (args) => SkeletonTemplate(args),
  args: {
    fakeLength: 1,
    visibleLength: 3,
    auto: true,
    infinite: true,
    rolling: true,
    indicate: true,
    pause: true,
    duration: 3000
  }
};
