import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbHeader} from './index';
import {
  HbHeaderUser,
  initialHeaderAuthMenu,
  initialHeaderDefaultMenu,
  initialHeaderGnb,
  initialHeaderMyMenu,
} from './type';

export default {
  title: 'components/template/hb-header',
  component: 'hb-header',
  argTypes: {
    pending: {
      options: [false, true],
      control: {type: 'radio'},
      defaultValue: false,
    },
    loggedIn: {
      options: [false, true],
      control: {type: 'radio'},
      defaultValue: false,
    },
  },
} as Meta;
interface HbHeaderExps extends HbHeader {
  _user: {name: string; email: string};
  pending: boolean;
  loggedIn: boolean;
}
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbHeaderExps> = ({
  _user,
  gnb,
  myMenu,
  authMenu,
  defaultMenu,
  event,
  pending,
  loggedIn,
}) => {
  const user: HbHeaderUser = {
    ..._user,
    pending,
    loggedIn,
  };
  return html`<hb-header
    @event=${event}
    .user=${user}
    .gnb=${gnb}
    .myMenu=${myMenu}
    .authMenu=${authMenu}
    .defaultMenu=${defaultMenu}
  ></hb-header>`;
};
export const korea: Story<HbHeaderExps> = Template.bind({});
korea.args = {
  event: () => console.log('로고클릭'),
  loggedIn: false,
  pending: false,
  _user: {
    name: '윤창원',
    email: 'matthew@heybit.io',
  },
  gnb: initialHeaderGnb,
  myMenu: initialHeaderMyMenu,
  authMenu: initialHeaderAuthMenu,
  defaultMenu: initialHeaderDefaultMenu,
};
