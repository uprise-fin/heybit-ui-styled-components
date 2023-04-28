import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbIf } from './index';

export default {
  component: 'hb-if'
} as Meta<HbIf>;

type Story = StoryObj<HbIf>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ value }) => html`<hb-if ?value=${value}>ddwadawd</hb-if>`,
  args: {
    value: false
  }
};
