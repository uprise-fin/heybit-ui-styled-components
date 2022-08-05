import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '@/utils';
import './index';
import type {HbInput} from './index';
import {HbInputType} from '@/const';
import type {HbInputEvent} from '@/index';

export default dev() &&
  ({
    title: 'components/organism/hb-input',
    component: 'hb-input',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbInput> = ({
  type,
  maxlength,
  placeholder,
  decimal,
  comma,
  error,
}) => html`
  <hb-input
    type=${type}
    placeholder=${placeholder}
    ?error=${error}
    .maxlength=${maxlength}
    .decimal=${decimal}
    .comma=${comma}
    @event=${($event: HbInputEvent) => console.log($event.target.originalValue)}
  ></hb-input>
`;

export const text: Story<HbInput> = Template.bind({});
text.args = {
  type: HbInputType.text,
  maxlength: 10,
  placeholder: '글자입력해주세요',
  error: false,
};
export const number: Story<HbInput> = Template.bind({});
number.args = {
  type: HbInputType.number,
  maxlength: 10,
  placeholder: '숫자를써볼까요?',
  decimal: 2,
  comma: 3,
  error: false,
};
