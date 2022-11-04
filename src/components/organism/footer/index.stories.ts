import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbFooter } from './index';

export default {
  title: 'components/organism/hb-footer',
  component: 'hb-footer'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbFooter> = () => html` <hb-footer></hb-footer>`;
export const korea: Story<HbFooter> = Template.bind({});
