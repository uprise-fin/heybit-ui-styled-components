import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import '../../../dist/hb-dialog';
// import "./index";
import type { HbDialog } from './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: "dialog/Button",
  component: "hb-dialog",
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbDialog> = ({ value }) =>
  html`
    <hb-dialog class="open">
      <div slot="header">ddd</div>
      <button slot="footer">ddd</button>
      <button slot="footer">222</button>
    </hb-dialog>
  `;

export const Primary: Story<HbDialog> = Template.bind({});
Primary.args = {
  value: 'ddd',
};