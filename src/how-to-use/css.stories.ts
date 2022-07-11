import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import type {HbButton} from '../components/organism/button';
// const variables = Object.values(
//   require("./initial.scss").default.styleSheet.cssRules
// ).find((x: CSSStyleRule) => x.selectorText === ":root") as CSSStyleRule;

// console.log(variables.cssText);
// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'how-to-use/css',
} as Meta;
const Template: Story<HbButton> = () =>
  html`
    <div
      class="hb-button"
      theme="primary"
      size="large"
      type="rectangle"
      tabindex="0"
    >
      <!---->
      <!-- <div
        name="slot--left"
        part="slot--left"
        class="hb-button__slot hb-button__slot--left"
      ></div> -->
      <div class="hb-button__label">primary large block</div>
      <!-- <div
        name="slot--right"
        part="slot--right"
        class="hb-button__slot hb-button__slot--right"
      ></div> -->
    </div>
  `;
export const hbButton: Story<HbButton> = Template.bind({});
