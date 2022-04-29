import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
export default {
  title: "how-to-use/shadow-dom",
} as Meta;
const Template: Story<any> = () =>
  html`
    <hb-button
      theme="primary"
      label="primary large block"
      size="large"
      type="block"
      tabindex="0"
    ></hb-button>
  `;
export const hbButton: Story<any> = Template.bind({});
