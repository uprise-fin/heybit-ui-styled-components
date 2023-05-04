import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbTab } from './index';

export default {
  component: 'hb-tab',
  render: ({ value }) =>
    html`<hb-tab value=${value}>
      <button slot="header">업라이즈</button>
      <button slot="header">헤이비트는 헤이비트!</button>
      <button slot="header">이루다</button>
      <div>업라이즈 블라블라</div>
      <div>헤이비트 블라블라</div>
      <div>이루다 블라블라</div>
    </hb-tab>`,
  argTypes: {
    value: {
      options: ['0', '1', '2'],
      control: { type: 'radio' }
    }
  }
} as Meta<HbTab>;

type Story = StoryObj<HbTab>;

export const Primary: Story = {
  args: { value: '2' }
};
