import { getFolderName } from '@/utils';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbImg } from './index';

export default {
  title: `${getFolderName()}/molecule/hb-img`,
  component: 'hb-img'
} as Meta;
interface HbImgStorybookProps extends HbImg {
  width: number;
  height: number;
}
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbImgStorybookProps> = ({
  src,
  height,
  width,
  multiSource,
  breakPoint,
  loadingWidth,
  loadingHeight
}) =>
  html`
    <hb-img
      style="${width ? `width: ${width}px;` : ''}${height ? `height: ${height}px;` : ''}"
      loadingWidth=${loadingWidth}
      loadingHeight=${loadingHeight}
      src=${src}
      multiSource=${multiSource}
      breakPoint=${breakPoint}
    ></hb-img>
    djaklwdjlakwjd
  `;
export const primary: Story<HbImgStorybookProps> = Template.bind({});
primary.args = {
  src: 'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',
  multiSource: 0,
  breakPoint: 0,
  loadingWidth: 800,
  loadingHeight: 980,
  width: 800,
  height: 980
};
