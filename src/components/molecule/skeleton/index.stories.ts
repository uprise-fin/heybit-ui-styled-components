import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbSkeleton } from './index';
import { hbSkeletonTypes } from './type';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-skeleton',
  render: ({ type }) => html` <hb-skeleton type=${type} style="width: 200px;"></hb-skeleton> `,
  argTypes: {
    type: {
      options: hbSkeletonTypes,
      control: { type: 'radio' }
    }
  }
} as Meta<HbSkeleton>;

type Story = StoryObj<HbSkeleton>;

export const Card: Story = {
  args: {
    type: 'card'
  }
};

export const Hamburger: Story = {
  args: {
    type: 'hamburger'
  }
};

export const DropMenuTop: Story = {
  args: {
    type: 'drop-menu-top'
  }
};

export const DropMenuBottom: Story = {
  args: {
    type: 'drop-menu-bottom'
  }
};
