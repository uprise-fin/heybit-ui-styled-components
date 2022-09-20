import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {dev} from '@/utils';
import './index';
import type {HbTextarea} from './index';
import {HbInputEvent, HbInputType} from '../type';

export default dev() &&
  ({
    title: 'components/organism/hb-textarea',
    component: 'hb-textarea',
  } as Meta);

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbTextarea> = ({
  type,
  maxlength,
  placeholder,
  decimal,
  comma,
  error,
  value,
  readonly,
}) => html`
  <hb-textarea
    type=${type}
    placeholder=${placeholder}
    ?error=${error}
    ?readonly=${readonly}
    .maxlength=${maxlength}
    .decimal=${decimal}
    .comma=${comma}
    .value=${value}
    @event=${($event: HbInputEvent) => console.log($event.target.originalValue)}
  ></hb-textarea>
`;

export const text: Story<HbTextarea> = Template.bind({});
text.args = {
  type: HbInputType.text,
  maxlength: 10,
  value:
    '글자입력해주세요글자글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요글자입력해주세요',
  placeholder: '글자입력해주세요',
  error: false,
  readonly: false,
};
export const number: Story<HbTextarea> = Template.bind({});
number.args = {
  type: HbInputType.number,
  maxlength: 10,
  placeholder: '숫자를써볼까요?',
  decimal: 2,
  comma: 3,
  error: false,
  readonly: false,
};
