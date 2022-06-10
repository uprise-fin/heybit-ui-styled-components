import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { theme } from "../../base";
import "./index";
import { buttonAlign, HbDialog } from "./index";
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
    <div style="height:9999px;"></div>
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
        <div slot="content" style="background: red;">
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

export const primary: Story<HbDialogExpns> = Template.bind({});
primary.args = {
  open: false,
  persistent: false,
  buttonAlign: buttonAlign.vertical,

  icon:
    "data:image/png;base64,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",
  title: "내용을 입력해주세요.",
  content: "여기는 컨텐츠 영역입니다. 커스텀",
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
  anchor,
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
