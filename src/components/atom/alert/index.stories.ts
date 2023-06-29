import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbAlert } from './index';

export default {
  component: 'hb-alert',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info']
    }
  }
} as Meta<HbAlert>;

type Story = StoryObj<HbAlert>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ color }) => html`<hb-alert color=${color}>ddwaddfdfdawd</hb-alert>`,
  args: {}
};
