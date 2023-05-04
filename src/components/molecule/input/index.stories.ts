import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbInput } from './index';
import { HbInputEvent } from './type';

export default {
  component: 'hb-input',
  render: ({
    type,
    maxlength,
    value,
    placeholder,
    decimal,
    comma,
    error,
    readonly,
    disabled
  }) => html`
    <hb-input
      type=${type}
      placeholder=${placeholder}
      ?error=${error}
      ?readonly=${readonly}
      ?disabled=${disabled}
      .maxlength=${maxlength}
      .decimal=${decimal}
      .comma=${comma}
      value=${value}
      @submit=${($event: HbInputEvent) => console.log($event.target.originalValue, 'submit')}
      @event=${($event: HbInputEvent) => console.log($event.target.originalValue)}
    ></hb-input>
    <button @click=${() => console.log(document.querySelector('hb-input').value)}>submit</button>
  `
} as Meta<HbInput>;

type Story = StoryObj<HbInput>;

// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
export const Template: Story = {
  args: {
    type: 'text',
    maxlength: 10,
    value: 'value 123 sample',
    placeholder: '글자입력해주세요',
    error: false,
    readonly: false,
    disabled: false
  }
};

export const Digit: Story = {
  args: {
    type: 'number',
    maxlength: 9,
    placeholder: '숫자를써볼까요?',
    decimal: 2,
    comma: 3,
    error: false,
    value: '123456789',
    readonly: false,
    disabled: false
  }
};

export const Currency: Story = {
  args: {
    type: 'currency',
    maxlength: 9,
    placeholder: '숫자를써볼까요?',
    decimal: 2,
    value: '123456789',
    comma: 3,
    error: false,
    readonly: false,
    disabled: false
  }
};

export const English: Story = {
  args: {
    type: 'english',
    maxlength: 9,
    placeholder: '영어만 써봅니다?',
    decimal: 2,
    value: 'value sample',
    comma: 3,
    error: false,
    readonly: false,
    disabled: false
  }
};
