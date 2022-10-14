import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbEventDialog } from './index';
import desktopImg from '~/static/sample-desktop.png';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/template/hb-event-dialog',
  component: 'hb-event-dialog',
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true
    },
    persistent: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true
    }
  }
} as Meta;
const Template = (props: HbEventDialog) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-event-dialog
    ?open=${props.open}
    ?persistent=${props.persistent}
    image=${props.image}
    href=${props.href}
  >
  </hb-event-dialog>
`;
export const primary: Story<HbEventDialog> = Template.bind({});
primary.args = {
  open: true,
  persistent: true,
  href: 'https://www.heybit.io/harvest/',
  image:
    'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png'
};
