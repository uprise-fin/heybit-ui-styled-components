import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbToast } from './index';
import { hbToastTheme, HbToastTheme } from './type';

export default {
  component: 'hb-toast',
  argTypes: {
    theme: {
      options: hbToastTheme,
      control: { type: 'radio' }
    }
  }
} as Meta<HbToastExns>;
interface HbToastExns extends HbToast {
  visibleIcon: boolean;
  contents: string[];
  theme: HbToastTheme;
}

type Story = StoryObj<HbToastExns>;

let element: HbToast;

function resetToast() {
  if (!element) element = document.getElementById('toast') as HbToast;
  element.messages = [];
}

function addToast({ visibleIcon, contents, theme }: HbToastExns) {
  if (!element) element = document.getElementById('toast') as HbToast;
  const msgRandom = Math.floor(Math.random() * contents.length);
  const message = {
    text: contents.slice()[msgRandom],
    theme: visibleIcon ? theme : null
  };
  if (!element.messages) element.messages = [];
  element.messages = [...element.messages, message];
}

const Template = (args: HbToastExns) => {
  return html`<hb-button type="rectangle" theme="primary" size="large" @event=${() => resetToast()}
      >토스트리셋</hb-button
    ><br /><hb-button type="rectangle" theme="secondary" size="large" @event=${() => addToast(args)}
      >토스트 추가하기</hb-button
    ><hb-toast id="toast"></hb-toast>`;
};

export const Primary: Story = {
  render: (args) => Template(args),
  args: {
    visibleIcon: true,
    contents: [
      '입금이 완료되었습니다.',
      '공지사항이 도착했어요!',
      '기한이 지나 취소가 불가합니다.',
      '23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.',
      'dshjajhwlkdjawkdjlawjdlkawjdlkawjdkljwaldkajwdlkajwdlkawjdlkawjdlakwjdlawkjdlkawjdlakw'
    ],
    theme: 'positive'
  }
};
