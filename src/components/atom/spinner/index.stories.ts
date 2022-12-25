import { colorPalette } from '@/index';
import { getFolderName } from '@/utils';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { sizes } from '../variable/type';
import './index';
import type { HbSpinner } from './index';

interface HbSpinnerExps extends HbSpinner {
  color: string;
}
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: `${getFolderName()}/atom/hb-spinner`,
  component: 'hb-spinner',
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'radio' },
      defaultValue: 'large'
    },
    color: {
      control: { type: 'text' },
      defaultValue: colorPalette.black[900]
    }
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['color'] // Must match argType key
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSpinnerExps> = ({ size, color }) =>
  html` <hb-spinner size=${size} style="--husc__spinner__color: ${color}"></hb-spinner> `;

export const primary: Story<HbSpinnerExps> = Template.bind({});
primary.args = {
  size: 'large'
};
primary.parameters = {
  colorPicker: {
    applyColorTo: ['color'] // Pass empty array to clear extra controls
  }
};
