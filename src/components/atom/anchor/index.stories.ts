import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '../../../utils';
import './index';
import type {HbAnchor} from './index';

export default dev() &&
  ({
    title: 'components/atom/hb-anchor',
    component: 'hb-anchor',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbAnchor> = ({path, text}) =>
  html`<hb-anchor path=${path}>${text}</hb-anchor>`;
export const primary: Story<HbAnchor> = Template.bind({});
primary.args = {
  text: '탈퇴하기',
  path: '?viewMode=story&id=components-atom-hb-anchor--primary&args=',
};
