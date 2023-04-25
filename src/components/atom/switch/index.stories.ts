import { Meta, StoryObj } from '@storybook/web-components';
import { html, nothing } from 'lit';
import './index';
import type { HbSwitch } from './index';

export default {
  component: 'hb-switch',
  args: {
    value: false,
    loading: true
  }
} as Meta<HbSwitch>;

type Story = StoryObj<HbSwitch>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const OpionSlotTmpl: Story = {
  render: ({ value, loading }) =>
    html`<hb-switch
      value=${value || nothing}
      loading=${loading || nothing}
      @event=${($event: Event) => console.log($event)}
    ></hb-switch>`
};
