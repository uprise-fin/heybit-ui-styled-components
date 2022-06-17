import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbToast } from "./index";

export default {
  title: "components/molecule/hb-toast✓",
  component: "hb-toast",
} as Meta;
console.log(process.env.dev)
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbToast> = ({messages}) =>
  html`<hb-toast .messages=${messages}></hb-toast>`;
export const noIcon: Story<HbToast> = Template.bind({});
noIcon.args = { messages: [
  {
    "text": "입금이 완료되었습니다.",
    'icon': 'positive',
  },
  {
    "text": "공지사항이 도착했어요!",
    'icon': 'notice',
  },
  {
    "text": "기한이 지나 취소가 불가합니다.",
    'icon': 'negative',
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    'icon': 'positive',
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    'icon': 'notice',
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    'icon': 'negative',
  },
] };
export const icon: Story<HbToast> = Template.bind({});
icon.args = { messages: [
  {
    "text": "입금이 완료되었습니다.",
  },
  {
    "text": "공지사항이 도착했어요!",
  },
  {
    "text": "기한이 지나 취소가 불가합니다.",
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
  },
] };
export const duration: Story<HbToast> = Template.bind({});
duration.args = { messages: [
  {
    "text": "입금이 완료되었습니다.",
    duration: 1000
  },
  {
    "text": "공지사항이 도착했어요!",
    duration: 8000
  },
  {
    "text": "기한이 지나 취소가 불가합니다.",
    duration: 5000
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    duration: 4000
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    duration: 4500
  },
  {
    "text": "23년 1월 1일 전에 일부라도 중도 해지하면25%의 추가 보상 혜택을 받을 수 없어요.",
    duration: 3000
  },
] };
