import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbAnchor } from './index';

export default {
  component: 'hb-anchor',
  args: {
    text: '탈퇴하기',
    href: '?viewMode=story&id=components-molecule-hb-anchor--primary&args='
  }
} as Meta<HbAnchor>;

type Story = StoryObj<HbAnchor>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ href, text }) => html`<hb-anchor href=${href}>${text}</hb-anchor>`
};
