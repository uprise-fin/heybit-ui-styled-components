import { sizes } from '@/components/atom/variable/type';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbButton } from './index';
import { hbButtonThemes, hbButtonTypes } from './type';

const handleClick = () => console.log('Clicked!');

export default {
  component: 'hb-button',
  tags: ['autodocs'],
  render: ({ label, size, baseLoadingDuration, loading, disabled, type, theme }) => html`<hb-button
    .theme="${theme}"
    .size=${size}
    .type=${type}
    .baseLoadingDuration=${baseLoadingDuration}
    ?loading=${loading}
    ?disabled=${disabled}
    @event=${handleClick}
  >
    ${label}
  </hb-button>`,
  argTypes: {
    label: {
      name: '',
      description: 'Slot content'
    },
    size: {
      options: sizes,
      control: { type: 'radio' }
    },
    baseLoadingDuration: {
      table: {
        type: { summary: 'number' }
      }
    },
    loading: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    disabled: {
      table: {
        defaultValue: { summary: 'false' }
      }
    },
    type: {
      options: hbButtonTypes,
      control: { type: 'radio' }
    },
    theme: {
      options: hbButtonThemes,
      control: { type: 'radio' }
    }
  }
} as Meta<HbButton>;

type Story = StoryObj<HbButton>;

export const Rectangle: Story = {
  args: {
    label: '내용을 입력하세요',
    size: 'large',
    baseLoadingDuration: 500,
    loading: false,
    disabled: false,
    type: 'rectangle',
    theme: 'primary'
  }
};

export const Secondary: Story = {
  args: {
    label: 'Secondary',
    size: 'medium',
    type: 'rectangle',
    theme: 'secondary'
  }
};

export const Radius: Story = {
  args: {
    label: 'Rounded Button',
    size: 'medium',
    type: 'radius',
    theme: 'quaternary'
  }
};

export const Circle: Story = {
  render: ({ size, type, theme }) => html`<hb-button theme="${theme}" size=${size} type=${type}>
    <hb-icon icon="system/filled/add" size="large" style="--icon__color: #fff;"></hb-icon>
  </hb-button>`,
  args: {
    size: 'large',
    type: 'circle',
    theme: 'primary'
  }
};

export const NoType: Story = {
  render: ({ label, size }) => html`<hb-button size=${size}>
    ${label}
    <hb-icon icon="system/outline/arrow_right" size="small" style="--icon__color: #fff;"></hb-icon>
  </hb-button>`,
  args: {
    label: 'Text Only',
    size: 'medium'
  }
};
