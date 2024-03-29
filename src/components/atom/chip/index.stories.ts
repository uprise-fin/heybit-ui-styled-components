import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbChip } from './index';
import { systemThemes } from '@/index';

export default {
  component: 'hb-chip',
  argTypes: {
    color: {
      control: { type: 'select' },
      options: systemThemes
    }
  }
} as Meta<HbChip>;

type Story = StoryObj<HbChip>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ color }) => html`<hb-chip color=${color}>ddwaddfdfdawd</hb-chip>`,
  args: {}
};
