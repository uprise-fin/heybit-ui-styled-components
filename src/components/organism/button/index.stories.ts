import {Meta, Story} from '@storybook/web-components';
import {html} from 'lit';
import {size} from '../../atom/variable/type';
import {hbButtonTheme, hbButtonType} from '../../organism/button/type';
import './index';
import type {HbButton} from './index';

export default {
  title: 'components/organism/hb-button',
  argTypes: {
    theme: {
      options: Object.keys(hbButtonTheme),
      control: {type: 'radio'},
    },
    size: {
      options: Object.keys(size),
      control: {type: 'radio'},
      defaultValue: size.large,
    },
  },
} as Meta;

const NoTypeTemplate: Story<HbButton> = ({
  loading,
  disabled,
  theme,
  size,
  title,
  baseLoadingDuration,
}) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    >${title}</hb-button
  >`;

const Template: Story<HbButton> = ({
  type,
  loading,
  disabled,
  theme,
  size,
  title,
  baseLoadingDuration,
}) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    >${title}</hb-button
  >`;
const IconTemplate: Story<HbButton> = ({
  type,
  loading,
  disabled,
  theme,
  size,
  baseLoadingDuration,
}) =>
  html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type}
    baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    ><hb-icon icon="notice" size=${size}></hb-icon
  ></hb-button>`;

const args = {
  title: '내용을 입력해보세요',
  size: size.large,
  baseLoadingDuration: 500,
  loading: false,
  disabled: false,
};
export const rectangle: Story<HbButton> = Template.bind({});
rectangle.args = {
  ...args,
  type: hbButtonType.rectangle,
  theme: hbButtonTheme.primary,
};
export const radius: Story<HbButton> = Template.bind({});
radius.args = {
  ...args,
  theme: hbButtonTheme.primary,
  type: hbButtonType.radius,
};
export const circle: Story<HbButton> = IconTemplate.bind({});
circle.args = {
  ...args,
  theme: hbButtonTheme.primary,
  type: hbButtonType.circle,
};
export const noType: Story<HbButton> = NoTypeTemplate.bind({});
noType.args = {
  ...args,
};
