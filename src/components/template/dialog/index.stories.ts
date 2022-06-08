import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { theme } from "../../base";
import "./index";
import { buttonAlign, HbDialog } from "./index";
interface HbDialogExpns extends HbDialog {
  icon?: string;
  title: string;
  content: string;
  anchor?: string;
  button: {
    key: string;
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
      defaultValue: buttonAlign.horizon,
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
  title,
  content,
  button,
}) =>
  html`
    <div style="height:9999px;"></div>
    <hb-dialog
      ?open=${open}
      id="dialog"
      buttonAlign=${buttonAlign}
      ?persistent=${persistent}
      ?hideCloseBtn=${hideCloseBtn}
    >
      ${title
        ? html`
            <div slot="title">${title}</div>
          `
        : ""}
      ${content
        ? html`
            <div slot="content">
              <hb-select
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
              ></hb-select>
            </div>
          `
        : ""}
      ${button
        ? button.map(
            (x) =>
              html`
                <hb-button slot="button" theme=${x.theme} size="medium"
                  >${x.key}</hb-button
                >
              `
          )
        : ""}
      ${anchor
        ? html`
            <a href="#" slot="anchor">${anchor}</a>
          `
        : ""}
    </hb-dialog>
  `;

export const primary: Story<HbDialogExpns> = Template.bind({});
primary.args = {
  open: false,
  persistent: false,
  title: "내용을 입력해주세요.",
  content: "내용을 입력해 주세요.",
  buttonAlign: buttonAlign.horizon,
  anchor: "탈퇴하기",
  button: [
    {
      key: "닫기",
      theme: theme.primary,
    },
    {
      key: "열기",
      theme: theme.quaternary,
    },
    {
      key: "열기",
      theme: theme.quinary,
    },
  ],
};
