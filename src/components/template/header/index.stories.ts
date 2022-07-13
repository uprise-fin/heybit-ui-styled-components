import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '../../../utils';
import './index';
import type {HbHeader} from './index';

export default dev() &&
  ({
    title: 'components/molecule/hb-anchor',
    component: 'hb-anchor',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbHeader> = () => html`<hb-header></hb-header>`;
export const primary: Story<HbHeader> = Template.bind({});
// primary.args = {text: '탈퇴하기'};
