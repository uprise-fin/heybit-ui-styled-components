import { Meta, Story } from "@storybook/web-components";
import { html } from "lit";
import { size, theme } from "../../base";
import "./index";
import type { HbSpinner } from "./index";

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "components/molecule/hb-spinner",
  component: "hb-spinner",
  argTypes: {
    theme: {
      options: Object.keys(theme),
      control: { type: 'radio' },
      defaultValue: theme.senary
    },
    size: {
      options: Object.keys(size),
      control: { type: 'radio' },
      defaultValue: size.large
    },
  },
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSpinner> = ({theme,size}) => html`<hb-spinner theme=${theme} size=${size}></hb-spinner>`;

export const primary: Story<HbSpinner> = Template.bind({});
primary.args = {
  theme: theme.senary,
  size: size.large
};
