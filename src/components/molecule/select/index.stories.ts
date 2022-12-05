import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbSelect } from './index';

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/molecule/hb-select',
  component: 'hb-select'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const OpionSlotTmpl: Story<HbSelect> = ({ value, options, emptyText }) =>
  html`
    <style>
      .wrap {
        position: relative;
        display: inline-block;
        overflow: scroll;
        width: 500px;
        /* height: 900px; */
        padding: 30px;
        background: blue;
      }
    </style>
    <div class="wrap">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div style="height: 299px;"></div>
      <hb-select
        value=${value}
        .emptyText=${emptyText}
        .options=${options}
        @event=${($event: Event) => console.log($event)}
      ></hb-select>
      <div style="height: 99999px;"></div>
    </div>
  `;

export const primary: Story<HbSelect> = OpionSlotTmpl.bind({});
primary.args = {
  value: '5',
  // options: undefined,
  emptyText: '내용이없습니다.',
  options: [
    { label: '1번', value: '1' },
    { label: '2번', value: '2' },
    { label: '3번', value: '3' },
    { label: '4번', value: '4' },
    { label: '5번', value: '5' },
    { label: '6번', value: '6' },
    { label: '7번', value: '7' },
    { label: '8번', value: '8' },
    { label: '9번', value: '9' },
    { label: '10번', value: '10' },
    { label: '11번', value: '11' },
    { label: '12번', value: '12' },
    { label: '13번', value: '13' },
    { label: '14번', value: '14' },
    { label: '15번', value: '15' },
    { label: '16번', value: '16' },
    { label: '17번', value: '17' },
    { label: '18번', value: '18' },
    { label: '19번', value: '19' },
    { label: '20번', value: '20' },
    { label: '21번', value: '21' },
    { label: '22번', value: '22' },
    { label: '23번', value: '23' },
    { label: '24번', value: '24' }
  ]
};
