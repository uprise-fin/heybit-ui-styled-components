import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbFooter } from './index';
import {
  initialFooterCompany,
  initialFooterCopy,
  initialFooterMenu,
  initialFooterSocialMenu,
  initialFooterTell,
  initialFooterUpriseInfo
} from './type';

export default {
  title: 'components/template/hb-footer',
  component: 'hb-footer'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbFooter> = ({
  menu,
  socialMenu,
  company,
  upriseInfo,
  copy,
  tell
}) => html` <hb-footer
  .menu=${menu}
  .socialMenu=${socialMenu}
  company=${company}
  .upriseInfo=${upriseInfo}
  copy=${copy}
  tell=${tell}
></hb-footer>`;
export const korea: Story<HbFooter> = Template.bind({});
korea.args = {
  menu: initialFooterMenu,
  socialMenu: initialFooterSocialMenu,
  company: initialFooterCompany,
  upriseInfo: initialFooterUpriseInfo,
  copy: initialFooterCopy,
  tell: initialFooterTell
};
