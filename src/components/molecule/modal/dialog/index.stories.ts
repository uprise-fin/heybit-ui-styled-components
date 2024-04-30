import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import './index';
import type { HbDialog } from './index';
import { dialogLayout } from '../type';
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
        console.log('test');
      }}
      layout="${props.layout}"
      width=${props.width}
      height=${props.height}
      ?open=${props.open}
      .headAlign=${props.headAlign}
      .icon=${props.icon}
      .iconColor=${props.iconColor}
      .image=${props.image}
      .title=${props.title}
      .caption=${props.caption}
      .buttonAlign=${props.buttonAlign}
      ?loading=${props.loading}
      ?persistent=${props.persistent}
      ?hideCloseBtn=${props.hideCloseBtn}
      .buttons=${props.buttons}
      .anchor=${props.anchor}
    >
      ${props.content}
    </hb-dialog>`,
  argTypes: {
    layout: {
      type: { name: 'string', required: false },
      options: dialogLayout,
      table: {
        type: { summary: dialogLayout.join(' | ') },
        defaultValue: { summary: 'normal' }
      },
      control: { type: 'radio' }
    },
    preventBodyScroll: {
      description: `dialog가 열릴 때, modal-open 클래스 추가 여부를 결정합니다. 클래스가 있는 경우, body { overflow: hidden; }을 주어 스크롤 제어가 가능합니다.`,
      table: {
        defaultValue: { summary: 'true' }
      }
    },
    open: {
      type: { name: 'boolean', required: true },
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
    layout: 'dialog',
    preventBodyScroll: true,
    open: true,
    persistent: false,
    loading: false,
    disabled: false,
    hideCloseBtn: false,
    buttonAlign: 'horizon',
    headAlign: 'center',
    image: thunderImg,
    // icon: 'system/filled/logo-naver',
    // iconColor: 'var(--hb__harvest--800)',
    title: 'Title( 팝업 타이틀 )',
    caption: 'Caption( 팝업 캡션 )',
    content:
      'Content ( 팝업 컨텐츠 ), Content ( 팝업 컨텐츠 ), Content ( 팝업 컨텐츠 ), Content ( 팝업 컨텐츠 ), Content ( 팝업 컨텐츠 ), Content ( 팝업 컨텐츠 )',
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
        baseLoadingDuration: 500,
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
    open: false,
    buttonAlign: 'vertical'
  }
};

export const Dialog: Story = {
  args: {
    ...Horizon.args,
    open: false
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
    open: false,
    buttonAlign: 'vertical'
  }
};
