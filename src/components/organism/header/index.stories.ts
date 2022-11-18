import BetaBadge from '~/static/img_beta.svg';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbHeader } from './index';
import {
  HbHeaderType,
  HbHeaderUser,
  initialHeaderAuthMenu,
  initialHeaderDefaultMenu,
  initialHeaderGnb,
  initialHeaderMyMenu
} from './type';

export default {
  title: 'components/organism/hb-header',
  component: 'hb-header',
  argTypes: {
    pending: {
      options: [false, true],
      defaultValue: false
    },
    loggedin: {
      options: [false, true],
      defaultValue: false
    }
  }
} as Meta;
interface HbHeaderExps extends HbHeader {
  _user: { name: string; email: string };
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
  type,
  loggedin
}) => {
  const user: HbHeaderUser = {
    ..._user
  };
  return html`<hb-header
    @event=${event}
    ?pending=${pending}
    ?loggedin=${loggedin}
    .user=${user}
    .type=${type}
    .gnb=${gnb}
    .myMenu=${myMenu}
    .authMenu=${authMenu}
    .defaultMenu=${defaultMenu}
  ></hb-header>`;
};
export const korea: Story<HbHeaderExps> = Template.bind({});
korea.args = {
  event: () => console.log('로고클릭'),
  loggedin: true,
  pending: false,
  _user: {
    name: '윤창원',
    email: 'matthew@heybit.io'
  },
  gnb: initialHeaderGnb.map((x) => {
    if (x.name === '디파이') {
      return {
        ...x,
        chip: {
          src: BetaBadge,
          alt: 'beta',
          background: '#EEE8F8'
        }
      };
    }
    return x;
  }),
  type: HbHeaderType.normal,
  myMenu: initialHeaderMyMenu,
  authMenu: initialHeaderAuthMenu,
  defaultMenu: initialHeaderDefaultMenu
};
