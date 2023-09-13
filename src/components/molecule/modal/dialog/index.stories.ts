import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import './index';
import type { HbDialog } from './index';
import { horizonAligns } from '@/components/atom/variable/type';
interface HbDialogExpns extends HbDialog {
  content: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  component: 'hb-dialog',
  tags: ['autodocs'],
  render: (props) => html` <style>
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
      .headAlign=${props.headAlign}
      .icon=${props.icon}
      .title=${props.title}
      .caption=${props.caption}
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
    </hb-dialog>`,
  argTypes: {
    layout: {
      type: { name: 'string', required: false },
      options: ['normal', 'page', 'sheet'],
      description:
        '반응형으로 적용하려면 모바일 디바이스에서는 page 또는 sheet layout , 데스크탑 이상의 크기(1020px)에서는 normal layout을 사용합니다.',
      table: {
        type: { summary: 'normal | page | sheet' },
        defaultValue: { summary: 'normal' }
      },
      control: { type: 'radio' }
    },
    width: {
      description: 'normal type dialog에만 해당합니다.'
    },
    preventBodyScroll: {
      description: `dialog가 열릴 때, modal-open 클래스 추가 여부를 결정합니다. 클래스가 있는 경우, body { overflow: hidden; }을 주어 스크롤 제어가 가능합니다.`,
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    open: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    persistent: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    loading: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    hideCloseBtn: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    headAlign: {
      options: horizonAligns,
      control: { type: 'radio' },
      table: {
        defaultValue: { summary: 'center' }
      }
    },
    buttonAlign: {
      options: ['horizon', 'vertical'],
      control: { type: 'radio' }
    }
  }
} as Meta<HbDialogExpns>;

type Story = StoryObj<HbDialogExpns>;

export const Horizon: Story = {
  args: {
    layout: 'normal',
    width: '340px',
    preventBodyScroll: true,
    open: false,
    persistent: false,
    loading: false,
    disabled: false,
    hideCloseBtn: false,
    buttonAlign: 'horizon',
    baseLoadingDuration: 0,
    headAlign: 'center',
    icon: thunderImg,
    title: '팝업 예시입니다!',
    caption: '캡션 예시입니다.',
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
    ]
  }
};

export const Vertical: Story = {
  args: {
    ...Horizon.args,
    anchor: {
      name: '탈퇴하기',
      href: 'https://www.heybit.io'
    },
    open: true,
    buttonAlign: 'vertical'
  }
};

export const Page: Story = {
  args: {
    ...Horizon.args,
    layout: 'page',
    width: ''
  }
};

export const Sheet: Story = {
  args: {
    ...Horizon.args,
    layout: 'sheet',
    anchor: {
      name: '탈퇴하기',
      href: 'https://www.heybit.io'
    },
    buttonAlign: 'vertical',
    width: ''
  }
};
