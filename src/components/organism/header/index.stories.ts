import BetaBadge from '~/static/label_beta.svg';
import RewardBadge from '~/static/reward.svg';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbHeader } from './index';
import {
  HbHeaderUser,
  initialHeaderAuthMenu,
  initialHeaderDefaultMenu,
  initialHeaderGnb,
  initialHeaderMyMenu
} from './type';

export default {
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
  close?: Function;
  _user: { name: string; email: string };
  pending: boolean;
  loggedIn: boolean;
}

type Story = StoryObj<HbHeaderExps>;

const Template = ({
  _user,
  gnb,
  myMenu,
  authMenu,
  defaultMenu,
  event,
  close,
  pending,
  type,
  loggedin
}: HbHeaderExps) => {
  const user: HbHeaderUser = {
    ..._user
  };
  return html`<hb-header
    @event=${event}
    @close=${close}
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
export const korea: Story = {
  render: (args) => Template(args),
  args: {
    event: () => console.log('로고클릭'),
    close: () => console.log('닫기'),
    loggedin: true,
    pending: false,
    _user: {
      name: '윤창원',
      email: 'matthew@heybit.io'
    },
    gnb: initialHeaderGnb.map((x) => {
      if (x.name === '리워드') {
        return {
          ...x,
          chip: {
            src: RewardBadge,
            alt: 'beta'
          }
        };
      }
      if (x.name === '디파이') {
        return {
          ...x,
          chip: {
            src: BetaBadge,
            alt: 'beta'
          }
        };
      }
      return x;
    }),
    type: 'normal',
    myMenu: initialHeaderMyMenu,
    authMenu: initialHeaderAuthMenu,
    defaultMenu: initialHeaderDefaultMenu
  }
};
