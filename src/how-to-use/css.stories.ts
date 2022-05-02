import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "how-to-use/css",
} as Meta;
const Template: Story<any> = () =>
  html`
    <div
      class="hb-button"
      theme="primary"
      label="primary large block"
      size="large"
      type="block"
      tabindex="0"
    >
      <!---->
      <!-- <div
        name="slot--left"
        part="slot--left"
        class="hb-button__slot hb-button__slot--left"
      ></div> -->
      <div class="hb-button__label">
        primary large block
      </div>
      <!-- <div
        name="slot--right"
        part="slot--right"
        class="hb-button__slot hb-button__slot--right"
      ></div> -->
      <hb-spinner
        class="hb-button__spinner"
        loading="false"
        data-hb-styled="true"
      ></hb-spinner>
    </div>
  `;
export const hbButton: Story<any> = Template.bind({});