import { Meta, Story } from "@storybook/web-components";
import Base from "../../base";
import { html } from "lit";
import "./index";
import "../../layers/hb-spinner/index";
import type { HbButton } from "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/forms/hb-button",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbButton> = ({ loading, disabled, type }) =>
  html`
    ${Base.themes.map((theme) =>
      Base.size.map(
        (size) => html`<hb-button
            theme="${theme}"
            label=${`${theme} ${size} ${type}`}
            size=${size}
            type=${type}
            ?loading=${loading}
            ?disabled=${disabled}
          >
          </hb-button>
          <br />`
      )
    )}
  `;

export const normal: Story<HbButton> = Template.bind({});
normal.args = {
  type: "block",
  loading: false,
  disabled: false,
};
