import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {
  Color,
  levels,
  Level,
  ServiceColor,
  Size,
  SystemColor,
} from '@/components/atom/variable/type';
import './index';
import type {HbIcon} from './index';
import SVG from './svg';
import {colorPalette} from '@/components/atom/variable';
interface HbIconExpns extends HbIcon {
  theme: string;
  level: Level;
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
    theme: {
      defaultValue: SystemColor.black,
      options: Object.keys(SystemColor).concat(Object.keys(ServiceColor)),
      control: {type: 'radio'},
    },
    level: {
      defaultValue: 900,
      options: levels,
      control: {type: 'radio'},
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIconExpns> = ({icon, size, theme, level}) =>
  html`<hb-icon
    icon=${icon}
    size=${size}
    style="--icon__color: ${colorPalette[theme as Color][level]};"
  ></hb-icon>`;
export const primary: Story<HbIconExpns> = Template.bind({});
primary.args = {size: Size.small, theme: SystemColor.black, level: 900};
