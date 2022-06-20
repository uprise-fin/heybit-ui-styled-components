import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { theme } from "../../base";
import "./index";
import type { HbToast } from "./index";

export default {
  title: "components/molecule/hb-toast✓",
  component: "hb-toast",
  argTypes: {
    visibleIcon: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true
    },
  },
} as Meta;
interface HbToastExns extends HbToast {
  visibleIcon: boolean
  icons: string[]
  contents: string[]
}

const Template: Story<HbToastExns> = ({ visibleIcon,contents ,icons}) => {
  function reset() {
    const de = document.getElementById('toast')
    de.messages = []
  }
  function event() {
    const de = document.getElementById('toast')
    const msgRandom = Math.floor(Math.random() * (contents.length))
    const iconRandom = Math.floor(Math.random() * (icons.length))
    const message = {
      text: contents.slice()[msgRandom],
      icon: visibleIcon ? icons.slice()[iconRandom] : null
    }
    de.messages = [...de.messages, message]
  }
  return html`<hb-button theme=${theme.secondary} @event=${reset}>토스트리셋</hb-button><br><hb-button @event=${event}>토스트 추가하기</hb-button><hb-toast id="toast"></hb-toast>`;
}
export const primary: Story<HbToastExns> = Template.bind({});
primary.args = {
  contents: ["입금이 완료되었습니다.","공지사항이 도착했어요!","기한이 지나 취소가 불가합니다.","23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요."],
  icons: ['positive', 'negative', 'notice']
}