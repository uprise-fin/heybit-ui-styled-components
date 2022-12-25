import { getFolderName } from '@/utils';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbSkeleton } from './index';
import { hbSkeletonTypes } from './type';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: `${getFolderName()}/molecule/hb-skeleton`,
  component: 'hb-skeleton',
  argTypes: {
    type: {
      options: hbSkeletonTypes,
      control: { type: 'radio' },
      defaultValue: 'card'
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSkeleton> = ({ type }) =>
  html` <hb-skeleton type=${type} style="width: 200px;"></hb-skeleton> `;

export const card: Story<HbSkeleton> = Template.bind({});
card.args = {
  type: 'card'
};
export const hamburger: Story<HbSkeleton> = Template.bind({});
hamburger.args = {
  type: 'hamburger'
};
export const dropMenuTop: Story<HbSkeleton> = Template.bind({});
dropMenuTop.args = {
  type: 'drop-menu-top'
};
export const dropMenuBottom: Story<HbSkeleton> = Template.bind({});
dropMenuBottom.args = {
  type: 'drop-menu-bottom'
};
