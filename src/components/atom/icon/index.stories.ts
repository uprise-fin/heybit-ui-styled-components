import { colorPalette } from '@/index';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import { sizes } from '../variable/type';
import './index';
import type { HbIcon } from './index';
import SVG from './svg';
import { HbIconName } from './type';
interface HbIconExpns extends HbIcon {
  color: string;
}
const iconList = Object.keys(SVG) as HbIconName[];
export default {
  component: 'hb-icon',
  argTypes: {
    size: {
      table: {
        type: { summary: 'xsmall | small | medium | large | xlarge' }
      },
      options: sizes,
      control: { type: 'select' }
    },
    color: {
      control: { type: 'color' }
    },
    icon: {
      options: iconList,
      control: { type: 'select' }
    }
  },
  args: {
    size: 'large',
    color: colorPalette.black[900]
  }
} as Meta<HbIconExpns>;

type Story = StoryObj<HbIconExpns>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const OneTemplate: Story = {
  render: ({ icon, size, color }) =>
    html`<hb-icon icon=${icon} size=${size} style="--husc__icon__color: ${color}"></hb-icon>`,
  args: { icon: 'system/filled/add' }
};

export const SeveralTemplate: Story = {
  render: ({ size, color }) => html` <style>
      .table {
        display: flex;
        align-items: center;
        border: 1px solid;
      }
      .table > * {
        flex: auto;
        padding: 10px;
      }
      hb-icon {
        flex: none !important;
      }
    </style>
    ${iconList.map(
      (x) =>
        html`<div class="table">
          <hb-icon icon=${x} size=${size} style="--husc__icon__color: ${color};"></hb-icon>
          <span>${x}</span>
        </div>`
    )}`
};
