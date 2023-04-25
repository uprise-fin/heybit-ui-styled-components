import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbDelay } from './index';

export default {
  title: 'Dev/hb-delay'
} as Meta<HbDelay>;

type Story = StoryObj<HbDelay>;

const Template = () => html`<hb-delay><div style="background: red;">블라블라</div></hb-delay>`;

export const Visible: Story = {
  render: () => Template(),
  args: {}
};
