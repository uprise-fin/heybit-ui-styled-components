import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import './index';
import type { HbSheetDialog } from './index';
interface HbSheetDialogExpns extends HbSheetDialog {
  content: string;
}

type Story = StoryObj<HbSheetDialogExpns>;

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-sheet-dialog',
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
    },
    hideCloseBtn: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false
    }
  }
} as Meta<HbSheetDialogExpns>;

const Template = (props: HbSheetDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-sheet-dialog
    ?open=${props.open}
    title=${props.title}
    buttonAlign=${props.buttonAlign}
    ?loading=${props.loading}
    baseLoadingDuration=${props.baseLoadingDuration}
    ?persistent=${props.persistent}
    ?hideCloseBtn=${props.hideCloseBtn}
    .buttons=${props.buttons}
    .anchor=${props.anchor}
  >
    <div
      style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
    >
      ${props.content}
    </div>
  </hb-sheet-dialog>
`;

export const Horizon: Story = {
  render: (args) => Template(args),
  args: {
    open: true,
    persistent: true,
    loading: false,
    baseLoadingDuration: 0,
    title: '팝업 예시입니다!',
    content: '팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.',
    buttons: [
      {
        name: '닫기',
        theme: 'primary',
        event: function () {
          console.log('1');
        }
      },
      {
        name: '열기',
        theme: 'secondary',
        event: function () {
          console.log('2');
        }
      },
      {
        name: '삼번',
        theme: 'tertiary',
        event: function () {
          console.log('3');
        }
      }
    ],
    buttonAlign: 'horizon'
  }
};

export const Vertical: Story = {
  render: (args) => Template(args),
  args: {
    ...Horizon.args,
    anchor: {
      name: '탈퇴하기',
      href: 'https://www.heybit.io'
    },
    buttonAlign: 'vertical'
  }
};
