import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { theme } from "../../base";
import "./index";
import { buttonAlign, HbDialog } from "./index";
import thunderImg from "/static/sample-thunder.svg";
import desktopImg from "/static/sample-desktop.png";
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
    // buttonAlign: {
    //   options: Object.keys(buttonAlign),
    //   control: { type: "radio" },
    //   defaultValue: buttonAlign.vertical,
    // },
  },
} as Meta;
const Template = (props: HbDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-dialog
    ?open=${props.open}
    id="dialog"
    icon=${props.icon}
    title=${props.title}
    buttonAlign=${props.buttonAlign}
    ?persistent=${props.persistent}
    ?hideCloseBtn=${props.hideCloseBtn}
  >
    ${html`
      <div
        slot="content"
        style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
      >
        ${props.content}
      </div>
    `}
    ${props.button
      ? props.button.map(
          (x) =>
            html`
              <hb-button slot="button" theme=${x.theme} size="medium"
                >${x.name}</hb-button
              >
            `
        )
      : ""}
    ${props.anchor
      ? html`
          <hb-anchor onclick="console.log('djawkldjaw')" slot="anchor"
            >${props.anchor}</hb-anchor
          >
        `
      : ""}
  </hb-dialog>
`;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const HorizonTemplate: Story<HbDialogExpns> = (props) => {
  props.buttonAlign = buttonAlign.horizon;
  return Template(props);
};
const VerticalTemplate: Story<HbDialogExpns> = (props) => {
  props.buttonAlign = buttonAlign.vertical;
  return Template(props);
};

export const horizon: Story<HbDialogExpns> = HorizonTemplate.bind({});
horizon.args = {
  open: false,
  persistent: false,
  icon: thunderImg,
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
export const vertical: Story<HbDialogExpns> = VerticalTemplate.bind({});
vertical.args = {
  ...horizon.args,
  anchor: "탈퇴하기",
};
const EventPopupTemplate: Story<HbDialogExpns> = ({
  open,
  persistent,
  hideCloseBtn,
  // storybook 옵션
  icon,
  title,
  content,
  button,
}) =>
  html`
    <style>
      body {
        background-image: url(${desktopImg});
      }
    </style>
    <hb-dialog
      width=${420}
      ?open=${open}
      id="dialog"
      icon=${icon}
      title=${title}
      buttonAlign=${buttonAlign.horizon}
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
