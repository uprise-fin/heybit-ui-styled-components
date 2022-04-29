import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import "./index";
import {type} from './index'
import "../../layers/hb-spinner/index";
import type { HbButton } from "./index";
import { size, theme } from "../../base";

export default {
  title: "components/forms/hb-button",
  argTypes: {
    theme: {
      options: Object.keys(theme),
      control: { type: 'select' },
    },
    size: {
      options: Object.keys(size),
      control: { type: 'select' },
    },
  },
} as Meta;

const BlockTem: Story<HbButton> = ({ loading, disabled, theme, size, label }) =>
  html`<hb-button
    theme="${theme}"
    label=${label}
    size=${size}
    type=${type.block}
    ?loading=${loading}
    ?disabled=${disabled}
  >
  </hb-button>`;

export const block: Story<HbButton> = BlockTem.bind({});
block.args = {
  label: '내용을 입력해보세요',
  theme: theme.primary,
  size: size.large,
  loading: false,
  disabled: false,
};
const InlineTem: Story<HbButton> = ({ loading, disabled, theme, size, label }) =>
  html`<hb-button
    theme="${theme}"
    label=${label}
    size=${size}
    type=${type.inline}
    ?loading=${loading}
    ?disabled=${disabled}
  >
  </hb-button>`;
export const inline: Story<HbButton> = InlineTem.bind({});
inline.args = {
  ...block.args,
};
const FabTem: Story<HbButton> = ({ loading, disabled, theme, size, label }) =>
  html`<hb-button
    theme="${theme}"
    label=${label}
    size=${size}
    type=${type.fab}
    ?loading=${loading}
    ?disabled=${disabled}
  >
  </hb-button>`;
export const fab: Story<HbButton> = FabTem.bind({});
fab.args = {
  ...block.args,
};