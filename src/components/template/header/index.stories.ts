import {dev} from '@/utils';
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

export default dev() &&
  ({
    title: 'components/template/hb-header',
    component: 'hb-header',
  } as Meta);

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
    title: '윤창원님 환영합니다.',
    email: 'matthew@heybit.io',
    loggedIn: false,
  },
  gnb: initialHeaderGnb,
  myMenu: initialHeaderMyMenu,
  authMenu: initialHeaderAuthMenu,
  defaultMenu: initialHeaderDefaultMenu,
};
