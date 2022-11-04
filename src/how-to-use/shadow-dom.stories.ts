import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import type { HbButton } from '@/components/molecule/button';
import { HbButtonType } from '@/components/molecule/button/type';
export default {
  title: 'how-to-use/shadow-dom'
} as Meta;
const Template: Story<HbButton> = () =>
  html`
    <hb-button theme="primary" size="large" type=${HbButtonType.rectangle} tabindex="0"
      >primary large block</hb-button
    >
  `;
export const hbButton: Story<HbButton> = Template.bind({});
