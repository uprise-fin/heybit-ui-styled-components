import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbEventDialog } from './index';
import desktopImg from '~/static/sample-desktop.png';

export default {
  component: 'hb-event-dialog',
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' }
    },
    persistent: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as Meta<HbEventDialog>;

type Story = StoryObj<HbEventDialog>;

const Template = (props: HbEventDialog) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-event-dialog
    ?open=${props.open}
    image=${props.image}
    href=${props.href}
    textLongClose=${props.textLongClose}
    textClose=${props.textClose}
  >
  </hb-event-dialog>
`;
export const Primary: Story = {
  render: (args) => Template(args),
  args: {
    open: true,
    persistent: true,
    href: 'https://www.heybit.io/harvest/',
    image:
      'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',
    textLongClose: '3일간 보지 않기',
    textClose: '닫기'
  }
};
