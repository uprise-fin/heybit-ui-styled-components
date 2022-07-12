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
    // size: {
    //   options: Object.keys(size),
    //   control: { type: 'radio' },
    //   defaultValue: size.large
    // },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSpinner> = ({
  theme,
  // size
}) => html` <hb-spinner theme=${theme}></hb-spinner> `;

export const primary: Story<HbSpinner> = Template.bind({});
primary.args = {
  theme: HbSpinnerTheme.solid,
  // size: size.large
};
