import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./fab";
import type { HbButtonFab } from "./fab";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/forms/hb-button--fab",
} as Meta;

const Template: Story<HbButtonFab> = ({
  loading,
  disabled,
  type,
  theme,
  size,
}) =>
  html`<hb-button--fab
    theme="${theme}"
    label=${`${theme} ${size} ${type}`}
    size=${size}
    type=${type}
    ?loading=${loading}
    ?disabled=${disabled}
  >
  </hb-button--fab>`;

export const primary: Story<HbButtonFab> = Template.bind({});
primary.args = {
  theme: "primary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};

export const secondary: Story<HbButtonFab> = Template.bind({});
secondary.args = {
  theme: "secondary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};
export const tertiary: Story<HbButtonFab> = Template.bind({});
tertiary.args = {
  theme: "tertiary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};
export const quaternary: Story<HbButtonFab> = Template.bind({});
quaternary.args = {
  theme: "quaternary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};
export const quinary: Story<HbButtonFab> = Template.bind({});
quinary.args = {
  theme: "quinary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};
export const senary: Story<HbButtonFab> = Template.bind({});
senary.args = {
  theme: "senary",
  size: "large",
  type: "fab",
  loading: false,
  disabled: false,
};
