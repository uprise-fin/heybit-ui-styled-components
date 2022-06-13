import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { theme } from "../../base";
import "./index";
import { buttonAlign, HbDialog } from "./index";
import imageFile from "/static/sample-thunder.svg";
interface HbDialogExpns extends HbDialog {
  icon: string;
  title: string;
  content: string;
  anchor?: string;
  button: {
    name: string;
    theme: theme;
  }[];
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/template/hb-dialog",
  component: "hb-dialog",
  argTypes: {
    open: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
    persistent: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
    hideCloseBtn: {
      options: [true, false],
      control: { type: "radio" },
      defaultValue: false,
    },
    buttonAlign: {
      options: Object.keys(buttonAlign),
      control: { type: "radio" },
      defaultValue: buttonAlign.vertical,
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbDialogExpns> = ({
  open,
  persistent,
  hideCloseBtn,
  buttonAlign,
  anchor,
  // storybook 옵션
  icon,
  title,
  content,
  button,
}) =>
  html`
    <hb-dialog
      ?open=${open}
      id="dialog"
      icon=${icon}
      title=${title}
      buttonAlign=${buttonAlign}
      ?persistent=${persistent}
      ?hideCloseBtn=${hideCloseBtn}
    >
      ${html`
        <div
          slot="content"
          style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
        >
          ${content}
          <!-- <hb-select
                .options="${[
            { label: "1번", value: "1" },
            { label: "2번", value: "2" },
            { label: "3번", value: "3" },
            { label: "4번", value: "4" },
            { label: "5번", value: "5" },
            { label: "6번", value: "6" },
            { label: "7번", value: "7" },
            { label: "8번", value: "8" },
            { label: "9번", value: "9" },
            { label: "10번", value: "10" },
            { label: "11번", value: "11" },
            { label: "12번", value: "12" },
            { label: "13번", value: "13" },
            { label: "14번", value: "14" },
            { label: "15번", value: "15" },
            { label: "16번", value: "16" },
            { label: "17번", value: "17" },
            { label: "18번", value: "18" },
            { label: "19번", value: "19" },
            { label: "20번", value: "20" },
            { label: "21번", value: "21" },
            { label: "22번", value: "22" },
            { label: "23번", value: "23" },
            { label: "24번", value: "24" },
          ]}"
                @change=${($event: any) => console.log($event)}
              ></hb-select> -->
        </div>
      `}
      ${button
        ? button.map(
            (x) =>
              html`
                <hb-button slot="button" theme=${x.theme} size="medium"
                  >${x.name}</hb-button
                >
              `
          )
        : ""}
      ${anchor
        ? html`
            <a href="javascript:alert('클릭됨');" slot="anchor">${anchor}</a>
          `
        : ""}
    </hb-dialog>
  `;

export const horizon: Story<HbDialogExpns> = Template.bind({});
horizon.args = {
  open: false,
  persistent: false,
  buttonAlign: buttonAlign.horizon,

  icon: imageFile,
  title: "팝업 예시입니다!",
  content:
    "팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.",
  button: [
    {
      name: "닫기",
      theme: theme.primary,
    },
    {
      name: "열기",
      theme: theme.quaternary,
    },
    {
      name: "열기",
      theme: theme.quinary,
    },
  ],
};
export const vertical: Story<HbDialogExpns> = Template.bind({});
vertical.args = {
  open: false,
  persistent: false,
  buttonAlign: buttonAlign.vertical,

  icon: imageFile,
  title: "팝업 예시입니다!",
  content:
    "팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.",
  anchor: "탈퇴하기",
  button: [
    {
      name: "닫기",
      theme: theme.primary,
    },
    {
      name: "열기",
      theme: theme.quaternary,
    },
    {
      name: "열기",
      theme: theme.quinary,
    },
  ],
};
const EventPopupTemplate: Story<HbDialogExpns> = ({
  open,
  persistent,
  hideCloseBtn,
  buttonAlign,
  // storybook 옵션
  icon,
  title,
  content,
  button,
}) =>
  html`
    <hb-dialog
      width=${400}
      ?open=${open}
      id="dialog"
      icon=${icon}
      title=${title}
      buttonAlign=${buttonAlign}
      ?persistent=${persistent}
      ?hideCloseBtn=${hideCloseBtn}
    >
      <hb-img
        style="display: block;"
        slot="content"
        src=${content}
        loadingWidth="400"
        loadingHeight="490"
      ></hb-img>
      ${button
        ? button.map(
            (x) =>
              html`
                <hb-button slot="button" theme=${x.theme} size="medium"
                  >${x.name}</hb-button
                >
              `
          )
        : ""}
    </hb-dialog>
  `;

export const event: Story<HbDialogExpns> = EventPopupTemplate.bind({});
event.args = {
  open: false,
  persistent: false,
  buttonAlign: buttonAlign.horizon,
  content:
    "https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png",
  button: [
    {
      name: "닫기",
      theme: theme.primary,
    },
    {
      name: "3일동안 안열기",
      theme: theme.quinary,
    },
  ],
};
