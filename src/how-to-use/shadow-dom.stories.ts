import '@/components/molecule/button';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import type { HbButton } from '@/components/molecule/button';

export default {
  title: 'how-to-use/shadow-dom'
} as Meta<HbButton>;

type Story = StoryObj<HbButton>;

const Template = () =>
  html`
    <hb-button theme="primary" size="large" type="rectangle" tabindex="0">
      primary large block
    </hb-button>
  `;
export const hbButton: Story = {
  render: () => Template()
};
