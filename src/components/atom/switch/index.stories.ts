import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import { getFolderName } from '@/utils';
import './index';
import type { HbSwitch } from './index';

export default {
  title: `${getFolderName()}/atom/hb-switch`,
  component: 'hb-switch'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const OpionSlotTmpl: Story<HbSwitch> = ({ value, loading }) =>
  html`<hb-switch
    ?value=${value}
    ?loading=${loading}
    @event=${($event: Event) => console.log($event)}
  ></hb-switch>`;

export const primary: Story<HbSwitch> = OpionSlotTmpl.bind({});
primary.args = {
  value: false,
  loading: true
};
