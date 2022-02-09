import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import "./index";
import type { HbSelect } from './index';
interface HbSelectExpns extends HbSelect {
  value: string;
  options: {value: string; label: string}[]
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "hb-select",
  component: "hb-select",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbSelectExpns> = ({ value, label,options }) =>
  html`
    <hb-select value=${value} label=${label}>
      ${options
        ? options.map(
            (opt) => html`
              <div
                slot="option"
                data-value=${opt.value}
                data-label=${opt.label}
              >
                ${opt.label}
              </div>
            `
          )
        : ""}
    </hb-select>
  `;

export const primary: Story<HbSelectExpns> = Template.bind({});
primary.args = {
  value: "uprise",
  label: "업라이즈",
  options: [
    { value: "uprise", label: "업라이즈" },
    { value: "toss", label: "토스" },
  ],
};
