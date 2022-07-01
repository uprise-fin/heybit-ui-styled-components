import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { size } from "../../base";
import "./index";
import type { HbButton } from "./index";
import { hbButtonTheme, hbButtonType } from './index';

export default {
  title: "components/organism/hb-button",
  argTypes: {
    theme: {
      options: Object.keys(hbButtonTheme),
      control: { type: 'radio' },
    },
    size: {
      options: Object.keys(size),
      control: { type: 'radio' },
      defaultValue: size.large
    },
    type: {
      options: Object.keys(hbButtonType),
      control: { type: 'radio' },
      defaultValue: hbButtonType.rectagle
    },
  },
} as Meta;

const Template: Story<HbButton> = ({ type,loading, disabled, theme, size, title ,baseLoadingDuration }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;
const IconTemplate: Story<HbButton> = ({ type,loading, disabled, theme, size ,baseLoadingDuration }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
  ><hb-icon icon="notice" size=${size}></hb-icon></hb-button>`;

const args = {
  title: '내용을 입력해보세요',
  type: hbButtonType.rectagle,
  size: size.large,
  baseLoadingDuration: 500,
  loading: false,
  disabled: false,
};
export const rectagle: Story<HbButton> = Template.bind({});
rectagle.args = {
  ...args,
  theme: hbButtonTheme.primary,
};
export const radius: Story<HbButton> = Template.bind({});
radius.args = {
  ...args,
  theme: hbButtonTheme.primary,
  type: hbButtonType.radius,
};
export const circle: Story<HbButton> = IconTemplate.bind({});
circle.args = {
  ...args,
  theme: hbButtonTheme.primary,
  type: hbButtonType.circle,
};
export const custom: Story<HbButton> = Template.bind({});
custom.args = {
  ...args,
  type: hbButtonType.custom,
};