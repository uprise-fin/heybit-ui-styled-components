import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbTransition } from './index';
import { hbTransitionTypes } from './type';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-transition',
  argTypes: {
    type: {
      options: hbTransitionTypes,
      control: { type: 'radio' }
    }
  },
  args: {
    show: false,
    type: 'fade'
  }
} as Meta<HbTransition>;

type Story = StoryObj<HbTransition>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  render: ({ show, type }) =>
    html`
      <hb-transition type=${type} ?show=${show}
        ><div style="background: red;">블라블라</div></hb-transition
      >
    `
};
