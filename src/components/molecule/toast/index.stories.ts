import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {hbButtonTheme, hbButtonType} from '../../..';
import './index';
import type {HbToast} from './index';

export default {
  title: 'components/molecule/hb-toast✓',
  component: 'hb-toast',
  argTypes: {
    visibleIcon: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    },
  },
} as Meta;
interface HbToastExns extends HbToast {
  visibleIcon: boolean;
  icons: string[];
  contents: string[];
}

const Template: Story<HbToastExns> = ({visibleIcon, contents, icons}) => {
  let element: HbToast;
  function reset() {
    if (!element) element = document.getElementById('toast') as HbToast;
    element.messages = [];
  }
  function event() {
    if (!element) element = document.getElementById('toast') as HbToast;
    const msgRandom = Math.floor(Math.random() * contents.length);
    const iconRandom = Math.floor(Math.random() * icons.length);
    const message = {
      text: contents.slice()[msgRandom],
      icon: visibleIcon ? icons.slice()[iconRandom] : null,
    };
    element.messages = [...element.messages, message];
  }
  return html`<hb-button
      type=${hbButtonType.rectangle}
      theme=${hbButtonTheme.primary}
      @event=${reset}
      >토스트리셋</hb-button
    ><br /><hb-button type=${hbButtonType.rectangle} @event=${event}
      >토스트 추가하기</hb-button
    ><hb-toast id="toast"></hb-toast>`;
};
export const primary: Story<HbToastExns> = Template.bind({});
primary.args = {
  contents: [
    '입금이 완료되었습니다.',
    '공지사항이 도착했어요!',
    '기한이 지나 취소가 불가합니다.',
    '23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.',
  ],
  icons: ['positive', 'negative', 'notice'],
};
