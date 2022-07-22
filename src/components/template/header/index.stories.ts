import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '../../../utils';
import './index';
import type {HbHeader} from './index';

export default dev() &&
  ({
    title: 'components/template/hb-header',
    component: 'hb-header',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbHeader> = ({navigations}) =>
  html` <hb-header .navigations=${navigations}></hb-header>`;
export const korea: Story<HbHeader> = Template.bind({});
korea.args = {
  navigations: [
    {
      name: '예치상품',
      path: 'harvest',
    },
    {
      name: '회사소개',
      path: 'about-us',
      target: '_self',
    },
    {
      name: '인사이트',
      path: 'blog',
    },
    {
      name: '고객지원',
      path: 'blog',
    },
  ],
};
