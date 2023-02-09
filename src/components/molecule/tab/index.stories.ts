import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { getFolderName } from '@/utils';
import './index';
import type { HbTab } from './index';

export default {
  title: `${getFolderName()}/molecule/hb-tab`,
  component: 'hb-tab',
  argTypes: {
    index: {
      options: ['0', '1', '2'],
      control: { type: 'radio' },
      defaultValue: '2'
    }
  }
} as Meta;

const Template: Story<HbTab> = ({ value }) =>
  html`<hb-tab value=${value}>
    <button slot="header">업라이즈</button>
    <button slot="header">헤이비트는 헤이비트!</button>
    <button slot="header">이루다</button>
    <div>업라이즈 블라블라</div>
    <div>헤이비트 블라블라</div>
    <div>이루다 블라블라</div>
  </hb-tab>`;
export const primary: Story<HbTab> = Template.bind({});
primary.args = {
  value: '2'
};
