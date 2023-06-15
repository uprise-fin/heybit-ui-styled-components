import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbTooltip } from './index';

export default {
  component: 'hb-tooltip',
  render: ({ open }) =>
    html`<span style="display:inline-block;vertical-align:middle;">안녕하세요 헤이비트는</span>
      <hb-tooltip ?open=${open}>
        <hb-icon icon="system/outline/info" slot="front" size="small"></hb-icon>
        <div>헤이비트</div> </hb-tooltip
      ><span style="display:inline-block;vertical-align:middle;">입니다.</span>`
} as Meta<HbTooltip>;

type Story = StoryObj<HbTooltip>;

export const Primary: Story = {
  args: { open: false }
};
