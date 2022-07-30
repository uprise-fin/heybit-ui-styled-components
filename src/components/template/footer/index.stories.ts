import {dev} from '@/utils';
import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbFooter} from './index';
import {initialFooterMenu, initialFooterSocialMenu} from './type';

export default dev() &&
  ({
    title: 'components/template/hb-footer',
    component: 'hb-footer',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbFooter> = ({menu, socialMenu}) => html` <hb-footer
  .menu=${menu}
  .socialMenu=${socialMenu}
></hb-footer>`;
export const korea: Story<HbFooter> = Template.bind({});
korea.args = {
  menu: initialFooterMenu,
  socialMenu: initialFooterSocialMenu,
};
