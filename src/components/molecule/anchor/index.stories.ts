import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbAnchor } from './index';

export default {
  title: 'components/molecule/hb-anchor',
  component: 'hb-anchor'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbAnchor> = ({ href, text }) =>
  html`<hb-anchor href=${href}>${text}</hb-anchor>`;
export const primary: Story<HbAnchor> = Template.bind({});
primary.args = {
  text: '탈퇴하기',
  href: '?viewMode=story&id=components-molecule-hb-anchor--primary&args='
};
