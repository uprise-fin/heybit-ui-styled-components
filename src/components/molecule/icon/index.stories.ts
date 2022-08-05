import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbIcon} from './index';
import SVG from './svg';
import {HbIconName, colorPalette, Size, SystemColor} from '@/const';
interface HbIconExpns extends HbIcon {
  color: string;
}
export default {
  title: 'components/molecule/hb-icon',
  component: 'hb-icon',
  argTypes: {
    icon: {
      defaultValue: 'system/filled/add',
      options: Object.keys(SVG) as HbIconName[],
      control: {type: 'radio'},
    },
    size: {
      defaultValue: Size.large,
      options: Object.keys(Size),
      control: {type: 'radio'},
    },
    color: {
      control: {type: 'text'},
      defaultValue: colorPalette[SystemColor.black][900],
    },
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['color'], // Must match argType key
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIconExpns> = ({icon, size, color}) =>
  html`<hb-icon
    icon=${icon}
    size=${size}
    style="--icon__color: ${color};"
  ></hb-icon>`;
export const primary: Story<HbIconExpns> = Template.bind({});
primary.args = {size: Size.small};
primary.parameters = {
  colorPicker: {
    applyColorTo: ['color'], // Pass empty array to clear extra controls
  },
};
