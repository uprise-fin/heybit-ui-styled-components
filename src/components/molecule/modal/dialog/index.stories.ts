import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import './index';
import type { HbDialog } from './index';
interface HbDialogExpns extends HbDialog {
  content: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-dialog',
  argTypes: {
    layout: {
      type: { name: 'string', required: false },
      defaultValue: 'normal',
      options: ['normal', 'page'],
      description:
        '반응형으로 적용하려면 모바일 디바이스에서는 page layout, 데스크탑 이상의 크기(1020px)에서는 normal layout을 사용합니다.',
      table: {
        type: { summary: 'normal | page' },
        defaultValue: { summary: 'normal' }
      },
      control: { type: 'select' }
    },
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
    // buttonAlign: {
    //   options: Object.keys(buttonAlign),
    //   control: { type: "radio" },
    //   defaultValue: buttonAlign.vertical,
    // },
  }
} as Meta<HbDialogExpns>;

type Story = StoryObj<HbDialogExpns>;

const Template = (props: HbDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-dialog
    @event=${function () {
      console.log('djakldjawlkjadwlk');
    }}
    layout="${props.layout}"
    width=${props.width}
    height=${props.height}
    ?open=${props.open}
    .icon=${props.icon}
    .title=${props.title}
    .buttonAlign=${props.buttonAlign}
    ?loading=${props.loading}
    .baseLoadingDuration=${props.baseLoadingDuration}
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
  </hb-dialog>
`;

export const Horizon: Story = {
  render: (args) => Template(args),
  args: {
    layout: 'normal',
    width: '1000px',
    height: '0px',
    open: true,
    persistent: true,
    loading: false,
    disabled: false,
    baseLoadingDuration: 0,
    icon: thunderImg,
    title: '팝업 예시입니다!',
    content: '팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.',
    buttons: [
      {
        name: '닫기',
        theme: 'primary',
        event: async function () {
          await new Promise((resolve) => setTimeout(() => resolve(true), 5000));
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
