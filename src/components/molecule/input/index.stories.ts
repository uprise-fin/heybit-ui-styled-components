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
      @event=${($event: HbInputEvent) => console.log($event.target.originalValue)}
    ></hb-input>
  `
} as Meta<HbInput>;

type Story = StoryObj<HbInput>;

const submit = (e: Event) => {
  e.preventDefault();
  console.dir(e);
};

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

export const Form: Story = {
  render: () => html`<form
    @submit=${submit}
    style="display: flex; flex-flow: column wrap; gap: 20px 0;"
  >
    <hb-input type="text"></hb-input>
    <hb-input type="text"></hb-input>
    <hb-button theme="secondary" size="medium" type="rectangle"> Submit </hb-button>
  </form>`
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
