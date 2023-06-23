import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbBadge } from './index';

export default {
  component: 'hb-badge',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'info']
    }
  }
} as Meta<HbBadge>;

type Story = StoryObj<HbBadge>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ color }) => html`<hb-badge color=${color}>ddwaddfdfdawd</hb-badge>`,
  args: {}
};
