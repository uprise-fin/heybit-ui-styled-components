import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbTooltip } from './index';

export default {
  component: 'hb-tooltip',
  render: ({ open }) =>
    html`<hb-tooltip ?open=${open}>
      <hb-icon icon="system/outline/info" slot="front" size="medium"></hb-icon>
      <div>헤이비트</div>
    </hb-tooltip>`
} as Meta<HbTooltip>;

type Story = StoryObj<HbTooltip>;

export const Primary: Story = {
  args: { open: false }
};
