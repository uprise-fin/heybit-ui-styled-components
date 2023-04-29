import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import './index';
import type { HbPageDialog } from './index';
interface HbPageDialogExpns extends HbPageDialog {
  content: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-page-dialog',
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' }
    },
    persistent: {
      options: [true, false],
      control: { type: 'radio' }
    },
    hideCloseBtn: {
      options: [true, false],
      control: { type: 'radio' }
    }
  }
} as Meta<HbPageDialogExpns>;

type Story = StoryObj<HbPageDialogExpns>;

const Template = (props: HbPageDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-page-dialog
    @event=${function () {
      console.log('djakldjawlkjadwlk');
    }}
    ?open=${props.open}
    .icon=${props.icon}
    ?loading=${props.loading}
    .baseLoadingDuration=${props.baseLoadingDuration}
    ?persistent=${props.persistent}
    ?hideCloseBtn=${props.hideCloseBtn}
  >
    <div
      style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
    >
      ${props.content}
    </div>
  </hb-dialog>
`;

export const Horizon: Story = {
  render: (args) => Template(args),
  args: {
    open: true,
    persistent: true,
    loading: false,
    disabled: false,
    baseLoadingDuration: 0,
    icon: thunderImg,
    hideCloseBtn: false
  }
};
