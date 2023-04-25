import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbFooter } from './index';

export default {
  component: 'hb-footer'
} as Meta<HbFooter>;

type Story = StoryObj<HbFooter>;

const Template = () => html` <hb-footer></hb-footer>`;
export const korea: Story = {
  render: () => Template()
};
