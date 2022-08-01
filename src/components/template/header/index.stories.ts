import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbHeader} from './index';
import {
  initialHeaderAuthMenu,
  initialHeaderDefaultMenu,
  initialHeaderGnb,
  initialHeaderMyMenu,
} from './type';

export default {
  title: 'components/template/hb-header',
  component: 'hb-header',
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbHeader> = ({
  user,
  gnb,
  myMenu,
  authMenu,
  defaultMenu,
  event,
}) => html` <hb-header
  @event=${event}
  .user=${user}
  .gnb=${gnb}
  .myMenu=${myMenu}
  .authMenu=${authMenu}
  .defaultMenu=${defaultMenu}
></hb-header>`;
export const korea: Story<HbHeader> = Template.bind({});
korea.args = {
  event: () => console.log('로고클릭'),
  user: {
    name: '윤창원',
    email: 'matthew@heybit.io',
    loggedIn: false,
    pending: true,
  },
  gnb: initialHeaderGnb,
  myMenu: initialHeaderMyMenu,
  authMenu: initialHeaderAuthMenu,
  defaultMenu: initialHeaderDefaultMenu,
};
