import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { size, theme } from "../../base";
import "./index";
import type { HbButton } from "./index";
import { type } from './index';

export default {
  title: "components/organism/hb-button",
  argTypes: {
    theme: {
      options: Object.keys(theme),
      control: { type: 'radio' },
      defaultValue: theme.primary
    },
    size: {
      options: Object.keys(size),
      control: { type: 'radio' },
      defaultValue: size.large
    },
  },
} as Meta;

const BlockTem: Story<HbButton> = ({ loading, disabled, theme, size, title }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type.block}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;

export const block: Story<HbButton> = BlockTem.bind({});
block.args = {
  title: '내용을 입력해보세요',
  theme: theme.primary,
  size: size.large,
  loading: false,
  disabled: false,
};
const InlineTem: Story<HbButton> = ({ loading, disabled, theme, size, title }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type.inline}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;
export const inline: Story<HbButton> = InlineTem.bind({});
inline.args = {
  ...block.args,
};
const FabTem: Story<HbButton> = ({ loading, disabled, theme, size, title }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type.fab}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;
export const fab: Story<HbButton> = FabTem.bind({});
fab.args = {
  ...block.args,
};