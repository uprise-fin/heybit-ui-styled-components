import { colorPalette } from '@/index';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { sizes } from '../variable/type';
import './index';
import type { HbSpinner } from './index';

interface HbSpinnerExps extends HbSpinner {
  color: string;
}
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-spinner',
  argTypes: {
    size: {
      options: sizes,
      control: { type: 'radio' }
    },
    color: {
      control: { type: 'color' }
    }
  },
  args: {
    size: 'large',
    color: colorPalette.black[800]
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['color'] // Must match argType key
    }
  }
} as Meta<HbSpinnerExps>;

type Story = StoryObj<HbSpinnerExps>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ size, color }) =>
    html` <hb-spinner size=${size} style="--husc__spinner__color: ${color}"></hb-spinner> `
};
