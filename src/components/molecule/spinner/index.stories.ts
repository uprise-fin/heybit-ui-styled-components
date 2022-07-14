import {Size} from '@/components/atom/variable/type';
import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';

import './index';
import type {HbSpinner} from './index';
import {HbSpinnerTheme} from './type';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/hb-spinner',
  component: 'hb-spinner',
  argTypes: {
    theme: {
      options: Object.keys(HbSpinnerTheme),
      control: {type: 'radio'},
      defaultValue: HbSpinnerTheme.solid,
    },
    size: {
      options: Object.keys(Size),
      control: {type: 'radio'},
      defaultValue: Size.large,
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSpinner> = ({size}) =>
  html` <hb-spinner size=${size}></hb-spinner> `;

export const primary: Story<HbSpinner> = Template.bind({});
primary.args = {
  size: Size.large,
};
