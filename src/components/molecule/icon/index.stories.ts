import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {ServiceColor, Size, SystemColor} from '@/components/atom/variable/type';
import './index';
import type {HbIcon} from './index';
import SVG from './svg';
interface HbIconExpns extends HbIcon {
  color: string;
}
export default {
  title: 'components/molecule/hb-icon',
  component: 'hb-icon',
  argTypes: {
    icon: {
      defaultValue: 'system/filled/add',
      options: Object.keys(SVG),
      control: {type: 'radio'},
    },
    size: {
      defaultValue: Size.large,
      options: Object.keys(Size),
      control: {type: 'radio'},
    },
    color: {
      defaultValue: SystemColor.black,
      options: Object.keys(SystemColor).concat(Object.keys(ServiceColor)),
      control: {type: 'radio'},
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIconExpns> = ({icon, size, color}) =>
  html`<hb-icon icon=${icon} size=${size} color="var(--${color})"></hb-icon>`;
export const primary: Story<HbIconExpns> = Template.bind({});
primary.args = {size: Size.small, color: SystemColor.black};
