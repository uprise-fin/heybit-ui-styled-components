import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { getFolderName } from '@/utils';
import './index';
import type { HbCheck } from './index';

export default {
  title: `${getFolderName()}/atom/hb-check`,
  component: 'hb-check'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const OpionSlotTmpl: Story<HbCheck> = ({ value, loading }) =>
  html`<hb-check
    ?value=${value}
    ?loading=${loading}
    @event=${($event: Event) => console.log($event)}
  ></hb-check>`;

export const primary: Story<HbCheck> = OpionSlotTmpl.bind({});
primary.args = {
  value: false,
  loading: true
};
