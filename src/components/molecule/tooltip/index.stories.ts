import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbTooltip } from './index';

export default {
  title: 'components/molecule/hb-tooltip',
  component: 'hb-tooltip',
  argTypes: {
    open: {
      options: [false, true],
      control: { type: 'radio' }
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbTooltip> = ({ open }) =>
  html`안녕하세요 헤이비트는
    <hb-tooltip ?open=${open}
      ><hb-icon icon="system/outline/info" slot="front" size="small"></hb-icon>
      <div>헤이비트</div></hb-tooltip
    >입니다.`;
export const primary: Story<HbTooltip> = Template.bind({});
primary.args = { open: false };
