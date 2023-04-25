import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { basicVariables } from '@/index';
import './index';
import type { HbResponsive } from './index';
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-responsive',
  argTypes: {
    point: {
      control: { type: 'number' },
      defaultValue: basicVariables.layout.media
    }
  }
} as Meta<HbResponsive>;

type Story = StoryObj<HbResponsive>;

export const Template: Story = {
  render: ({ point }) =>
    html` <style>
        .line {
          position: fixed;
          top: 0;
          left: ${point}px;
          height: 100%;
          border-right: 2px dashed #000;
        }
      </style>
      <div class="line"></div>
      <hb-responsive point=${point}
        ><div slot="desktop">데스크탑</div>
        <div slot="mobile">모바일</div></hb-responsive
      >`,
  args: {
    point: basicVariables.layout.media
  }
};
