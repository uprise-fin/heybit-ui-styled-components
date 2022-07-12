import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbSkeleton} from './index';
import {HbSkeletonType} from './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/hb-skeleton',
  component: 'hb-skeleton',
  argTypes: {
    type: {
      options: Object.keys(HbSkeletonType),
      control: {type: 'radio'},
      defaultValue: HbSkeletonType.card,
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSkeleton> = ({type}) =>
  html` <hb-skeleton type=${type} style="width: 200px;"></hb-skeleton> `;

export const card: Story<HbSkeleton> = Template.bind({});
card.args = {
  type: HbSkeletonType.card,
};
