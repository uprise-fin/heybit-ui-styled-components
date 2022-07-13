import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {ServiceColor, Size, SystemColor} from '@/components/atom/variable/type';
import {dev} from '@/utils';
import './index';
import type {HbIcon} from './index';
import SVG from './svg';

export default dev() &&
  ({
    title: 'components/molecule/hb-icon',
    component: 'hb-icon',
    argTypes: {
      icon: {
        defaultValue: 'filled/ic-system-add',
        options: Object.keys(SVG),
        control: {type: 'radio'},
      },
      size: {
        options: Object.keys(Size),
        control: {type: 'radio'},
      },
      color: {
        options: Object.keys(SystemColor).concat(Object.keys(ServiceColor)),
        control: {type: 'radio'},
      },
    },
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIcon> = ({icon, size, color}) =>
  html`<hb-icon
    icon=${icon}
    size=${size}
    style=${'fill:var(--' + color + ')'}
  ></hb-icon>`;
export const primary: Story<HbIcon> = Template.bind({});
primary.args = {size: Size.small, color: SystemColor.black};
