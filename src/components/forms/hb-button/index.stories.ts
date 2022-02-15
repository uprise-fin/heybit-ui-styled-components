import { Meta, Story } from "@storybook/web-components";
import Base from "../../base";
import { html } from "lit";
import "./index";
import "../../layers/hb-spinner/index";
import type { HbButton } from "./index";

export default {
  title: "components/forms/hb-button",
} as Meta;

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

const IconSlot: Story<HbButton> = ({ loading, disabled, type }) =>
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
            <div slot="slot--left">ddd</div>
          </hb-button>
          <br />`
      )
    )}
  `;
const CaretSlot: Story<HbButton> = ({ loading, disabled, type }) =>
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
            <div slot="slot--right">ddd</div>
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
export const icon: Story<HbButton> = IconSlot.bind({});
icon.args = {
  type: "block",
  loading: false,
  disabled: false,
};
export const caret: Story<HbButton> = CaretSlot.bind({});
caret.args = {
  type: "block",
  loading: false,
  disabled: false,
};
