import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '../../../utils';
import './index';
import type {HbIf} from './index';

export default dev() &&
  ({
    title: 'components/atom/hb-if',
    component: 'hb-if',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbIf> = ({value}) =>
  html`<hb-if ?value=${value}>ddwadawd</hb-if>`;
export const primary: Story<HbIf> = Template.bind({});
primary.args = {
  value: false,
};
