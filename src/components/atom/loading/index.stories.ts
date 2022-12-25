import { getFolderName } from '@/utils';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbLoading } from './index';

export default {
  title: `${getFolderName()}/atom/hb-loading`,
  component: 'hb-loading'
} as Meta;

const Template: Story<HbLoading> = () => html` <style>
    .loading {
      width: 300px;
      height: 300px;
    }
  </style>
  <hb-loading class="loading"></hb-loading>`;

export const float: Story<HbLoading> = Template.bind({});
