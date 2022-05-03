import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import { HbDialog } from "./index";
interface HbDialogExpns extends HbDialog {
  header: string;
  content: string;
  footer: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/layers/hb-dialog",
  component: "hb-dialog",
  argTypes: {
    open: {
      options: ["true", "false"],
      control: { type: "radio" },
    },
    ddd: {
      control: {
        type: "html",
      },
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbDialogExpns> = ({
  open,
  // storybook 옵션
  header,
  content,
  footer,
}) =>
  html`
    <hb-dialog ?open=${open}>
      ${header
        ? html`
            <div slot="header">${header}</div>
          `
        : ""}
      ${content
        ? html`
            <div slot="content">${content}</div>
          `
        : ""}
      ${footer
        ? html`
            <div slot="footer">${footer}</div>
          `
        : ""}
    </hb-dialog>
  `;

export const primary: Story<HbDialogExpns> = Template.bind({});
primary.args = {
  open: false,
  header: "내용을 입력해주세요.",
  content: "내용을 입력해 주세요.",
  footer: "ddjawlkjda",
};
