import { Size, sizes } from '@/components/atom/variable/type';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbButton } from './index';
import { hbButtonThemes } from './type';

export default {
  title: 'components/molecule/hb-button',
  argTypes: {
    theme: {
      options: hbButtonThemes,
      control: { type: 'radio' }
    },
    size: {
      options: sizes,
      control: { type: 'radio' },
      defaultValue: 'large'
    },
    color: {
      control: { type: 'text' }
    }
  },
  parameters: {
    colorPicker: {
      applyColorTo: ['color'] // Must match argType key
    }
  }
} as Meta;
interface HbButtonIconExps extends HbButton {
  color: string;
}

const NoTypeTemplate: Story<HbButton> = ({
  loading,
  disabled,
  theme,
  size,
  title,
  baseLoadingDuration
}) =>
  html`<hb-button
    .theme="${theme}"
    .size=${size}
    .baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    >${title}</hb-button
  >`;
const ddd = () => console.log('zmfkajdkawd');
const Template: Story<HbButton> = ({
  type,
  loading,
  disabled,
  theme,
  size,
  title,
  baseLoadingDuration
}) =>
  html`<hb-button
    .theme="${theme}"
    .size=${size}
    .type=${type}
    @event=${ddd}
    .baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    >${title}</hb-button
  >`;
const IconTemplate: Story<HbButtonIconExps> = ({
  type,
  loading,
  disabled,
  theme,
  color,
  size,
  baseLoadingDuration
}) =>
  html`<hb-button
    .theme="${theme}"
    .size=${size}
    .type=${type}
    .baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    ><hb-icon icon="system/filled/add" size=${size} style="--icon__color: ${color};"></hb-icon
  ></hb-button>`;

const args = {
  title: '내용을 입력해보세요',
  size: 'large' as Size,
  baseLoadingDuration: 500,
  loading: false,
  disabled: false
};
export const rectangle: Story<HbButton> = Template.bind({});
rectangle.args = {
  ...args,
  type: 'rectangle',
  theme: 'primary'
};
export const radius: Story<HbButton> = Template.bind({});
radius.args = {
  ...args,
  theme: 'primary',
  type: 'radius'
};
export const circle: Story<HbButtonIconExps> = IconTemplate.bind({});
circle.args = {
  ...args,
  theme: 'primary',
  type: 'circle'
};
circle.parameters = {
  colorPicker: {
    applyColorTo: ['color'] // Pass empty array to clear extra controls
  }
};

export const noType: Story<HbButton> = NoTypeTemplate.bind({});
noType.args = {
  ...args
};
