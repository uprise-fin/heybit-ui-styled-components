import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbLoading } from './index';

export default {
  component: 'hb-loading'
} as Meta<HbLoading>;

type Story = StoryObj<HbLoading>;

export const Template: Story = {
  render: () => html` <style>
      .loading {
        width: 300px;
        height: 300px;
      }
    </style>
    <hb-loading class="loading"></hb-loading>`
};
