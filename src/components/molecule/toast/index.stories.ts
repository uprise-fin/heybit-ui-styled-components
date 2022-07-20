import {Size} from '@/components/atom/variable/type';
import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {HbButtonTheme, HbButtonType} from '../../organism/button/type';
import './index';
import type {HbToast} from './index';
import {HbToastTheme} from './type';

export default {
  title: 'components/molecule/hb-toast✓',
  component: 'hb-toast',
  argTypes: {
    visibleIcon: {
      options: [true, false],
      control: {type: 'radio'},
      defaultValue: true,
    },
    theme: {
      options: Object.keys(HbToastTheme),
      control: {type: 'radio'},
      defaultValue: HbToastTheme.positive,
    },
  },
} as Meta;
interface HbToastExns extends HbToast {
  visibleIcon: boolean;
  contents: string[];
  theme: HbToastTheme;
}

const Template: Story<HbToastExns> = ({visibleIcon, contents, theme}) => {
  let element: HbToast;
  function reset() {
    if (!element) element = document.getElementById('toast') as HbToast;
    element.messages = [];
  }
  function event() {
    if (!element) element = document.getElementById('toast') as HbToast;
    const msgRandom = Math.floor(Math.random() * contents.length);
    const message = {
      text: contents.slice()[msgRandom],
      theme: visibleIcon ? theme : null,
    };
    element.messages = [...element.messages, message];
  }
  return html`<hb-button
      type=${HbButtonType.rectangle}
      theme=${HbButtonTheme.primary}
      size=${Size.large}
      @event=${reset}
      >토스트리셋</hb-button
    ><br /><hb-button
      type=${HbButtonType.rectangle}
      theme=${HbButtonTheme.secondary}
      size=${Size.large}
      @event=${event}
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
  theme: HbToastTheme.positive,
};
