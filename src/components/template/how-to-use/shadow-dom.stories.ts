import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {HbButton} from '../../organism/button';
import {hbButtonType} from '../../organism/button/type';
export default {
  title: 'how-to-use/shadow-dom',
} as Meta;
const Template: Story<HbButton> = () =>
  html`
    <hb-button
      theme="primary"
      size="large"
      type=${hbButtonType.rectangle}
      tabindex="0"
      >primary large block</hb-button
    >
  `;
export const hbButton: Story<HbButton> = Template.bind({});
