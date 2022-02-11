import { Meta, Story } from "@storybook/web-components";
import Base from "../../base";
import { html } from "lit";
import "./fab";
import type { HbButtonFab } from "./fab";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/forms/hb-button",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbButtonFab> = ({ loading, disabled, type }) =>
  html`
    ${Base.themes.map((theme) =>
      Base.size.map(
        (size) => html`<hb-button--fab
            theme="${theme}"
            label=${`${theme} ${size}`}
            size=${size}
            type="fab"
            ?loading=${loading}
            ?disabled=${disabled}
          ></hb-button--fab>
          <br />`
      )
    )}
  `;

export const fab: Story<HbButtonFab> = Template.bind({});
