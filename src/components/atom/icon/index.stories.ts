import { colorPalette, Size } from '@/index';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbIcon } from './index';
import SVG from './svg';
import { HbIconName } from './type';
interface HbIconExpns extends HbIcon {
  color: string;
}
const iconList = Object.keys(SVG) as HbIconName[];
export default {
  title: 'components/atom/hb-icon',
  component: 'hb-icon',
  argTypes: {
    icon: {
      defaultValue: 'system/filled/add',
      options: iconList,
      control: { type: 'radio' }
    },
    size: {
      defaultValue: 'large',
      options: ['xsmall', 'small', 'medium', 'large', 'xlarge'] as Size[],
      control: { type: 'radio' }
    },
    color: {
      control: { type: 'text' },
      defaultValue: colorPalette.black[900]
    }
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['color'] // Must match argType key
    }
  }
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const OneTemplate: Story<HbIconExpns> = ({ icon, size, color }) =>
  html`<hb-icon icon=${icon} size=${size} style="--husc__icon__color: ${color};"></hb-icon>`;
export const icon: Story<HbIconExpns> = OneTemplate.bind({});
icon.args = { size: 'large' };
icon.parameters = {
  colorPicker: {
    applyColorTo: ['color'] // Pass empty array to clear extra controls
  }
};
const SeveralTemplate: Story<HbIconExpns> = ({ size, color }) =>
  html` <style>
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
    )}`;
export const icons: Story<HbIconExpns> = SeveralTemplate.bind({});
icons.args = { size: 'large' };
icons.parameters = {
  colorPicker: {
    applyColorTo: ['color'] // Pass empty array to clear extra controls
  }
};
