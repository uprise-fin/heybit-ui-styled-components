import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import "../../layers/hb-spinner/index";
import type { HbButton } from "./index";

export default {
  title: "components/forms/hb-button",
} as Meta;

const Template: Story<HbButton> = ({ loading, disabled, type, theme, size }) =>
  html`<hb-button
    theme="${theme}"
    label=${`${theme} ${size} ${type}`}
    size=${size}
    type=${type}
    ?loading=${loading}
    ?disabled=${disabled}
  >
  </hb-button>`;

export const primary: Story<HbButton> = Template.bind({});
primary.args = {
  theme: "primary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};

export const secondary: Story<HbButton> = Template.bind({});
secondary.args = {
  theme: "secondary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};
export const tertiary: Story<HbButton> = Template.bind({});
tertiary.args = {
  theme: "tertiary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};
export const quaternary: Story<HbButton> = Template.bind({});
quaternary.args = {
  theme: "quaternary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};
export const quinary: Story<HbButton> = Template.bind({});
quinary.args = {
  theme: "quinary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};
export const senary: Story<HbButton> = Template.bind({});
senary.args = {
  theme: "senary",
  size: "large",
  type: "block",
  loading: false,
  disabled: false,
};
