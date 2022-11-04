import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbInput } from './index';
import { HbInputEvent, HbInputType } from './type';

export default {
  title: 'components/molecule/hb-input',
  component: 'hb-input'
} as Meta;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const Template: Story<HbInput> = ({
  type,
  maxlength,
  value,
  placeholder,
  decimal,
  comma,
  error,
  allowedFirstZero,
  readonly
}) => html`
  <hb-input
    type=${type}
    placeholder=${placeholder}
    ?error=${error}
    ?allowedFirstZero=${allowedFirstZero}
    ?readonly=${readonly}
    .maxlength=${maxlength}
    .decimal=${decimal}
    .comma=${comma}
    .value=${value}
    @submit=${($event: HbInputEvent) => console.log($event.target.originalValue, '서브밋')}
    @event=${($event: HbInputEvent) => console.log($event.target.originalValue)}
  ></hb-input>
`;

export const text: Story<HbInput> = Template.bind({});
text.args = {
  type: HbInputType.text,
  maxlength: 10,
  value: 'dawkldjlkajdklawjdlkwajdklawdjlawdjlkawjdlawjdlwajdklawjdlkawjdlkajwlkdawjdlawkjdl',
  placeholder: '글자입력해주세요',
  error: false,
  readonly: false
};
export const number: Story<HbInput> = Template.bind({});
number.args = {
  type: HbInputType.number,
  maxlength: 10,
  placeholder: '숫자를써볼까요?',
  decimal: 2,
  comma: 3,
  error: false,
  allowedFirstZero: true,
  readonly: false
};
