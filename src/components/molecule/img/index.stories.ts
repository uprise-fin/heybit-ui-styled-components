import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import './index';
import type {HbImg} from './index';

export default {
  title: 'components/molecule/hb-img✓',
  component: 'hb-img',
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbImg> = ({
  src,
  multiSource,
  breakPoint,
  loadingWidth,
  loadingHeight,
}) =>
  html`
    <hb-img
      style="width: ${loadingWidth}px; height: ${loadingHeight}px;"
      loadingWidth=${loadingWidth}
      loadingHeight=${loadingHeight}
      src=${src}
      multiSource=${multiSource}
      breakPoint=${breakPoint}
    ></hb-img>
  `;
export const primary: Story<HbImg> = Template.bind({});
primary.args = {
  src: 'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',
  multiSource: 0,
  breakPoint: 0,
  loadingWidth: 800,
  loadingHeight: 980,
};
