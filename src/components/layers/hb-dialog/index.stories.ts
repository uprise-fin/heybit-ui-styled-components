import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import type { HbDialog } from "./index";
interface HbDialogExpns extends HbDialog {
  header: string;
  content: string;
  footer: string[];
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/layers/hb-dialog",
  component: "hb-dialog",
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
      ${header ? html`<div slot="header">${header}</div>` : ""}
      ${content ? html`<div slot="content">${content}</div>` : ""}
      ${footer
        ? footer.map((f) => html`<button slot="footer">${f}</button>`)
        : ""}
    </hb-dialog>
  `;

export const primary: Story<HbDialogExpns> = Template.bind({});
primary.args = {
  open: true,
  header: "내용을 입력해주세요.",
  content: "내용을 입력해 주세요.",
  footer: ["가나", "다라"],
};
