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
      defaultValue: hbButtonTheme.primary
    },
    size: {
      options: Object.keys(size),
      control: { type: 'radio' },
      defaultValue: size.large
    },
  },
} as Meta;

const BlockTem: Story<HbButton> = ({ loading, disabled, theme, size, title ,baseLoadingDuration }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;

export const block: Story<HbButton> = BlockTem.bind({});
block.args = {
  title: '내용을 입력해보세요',
  theme: hbButtonTheme.primary,
  size: size.large,
  baseLoadingDuration: 500,
  loading: false,
  disabled: false,
};
const InlineTem: Story<HbButton> = ({ loading, disabled, theme, size, title,baseLoadingDuration }) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${hbButtonType.inline}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
  >${title}</hb-button>`;
export const inline: Story<HbButton> = InlineTem.bind({});
inline.args = {
  ...block.args,
};
// const FabTem: Story<HbButton> = ({ loading, disabled, theme, size, title,baseLoadingDuration }) =>
// {
//   function ddd () {
//     console.log('djaklwdjaw')
//   }
//   return html`<hb-button
//     @event=${ddd}
//     theme="${theme}"
//     size=${size}
//     type=${hbButtonType.fab}
//     baseLoadingDuration=${baseLoadingDuration}
//     ?loading=${loading}
//     ?disabled=${disabled}
//   >${title}</hb-button>`;
// }
  
// export const fab: Story<HbButton> = FabTem.bind({});
// fab.args = {
//   ...block.args,
// };