import { sizes } from '@/components/atom/variable/type';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbButton } from './index';
import { hbButtonThemes, hbButtonTypes } from './type';

const handleClick = () => alert('Clicked!');

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
    <span slot="slot--left">ㅇㅇㅇ</span>
    ${label}
  </hb-button>`,
  argTypes: {
    label: {
      description: 'Slot only'
    },
    size: {
      table: {
        type: { summary: 'xsmall | small | medium | large | xlarge' }
      },
      options: sizes,
      control: { type: 'select' }
    },
    baseLoadingDuration: {
      table: {
        type: { summary: 'number' }
      }
    },
    type: {
      description: 'circle 타입 버튼에는 보통 아이콘을 넣어 사용합니다.',
      table: {
        type: { summary: 'rectangle | radius | circle' }
      },
      options: hbButtonTypes,
      control: { type: 'select' }
    },
    theme: {
      table: {
        type: { summary: 'primary | secondary | tertiary | quaternary' }
      },
      options: hbButtonThemes,
      control: { type: 'select' }
    }
  }
} as Meta<HbButton>;

type Story = StoryObj<HbButton>;

export const rectangle: Story = {
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

export const radius: Story = {
  args: {
    label: 'Rounded Button',
    size: 'large',
    type: 'radius',
    theme: 'primary'
  }
};

export const circle: Story = {
  render: ({ size, type, theme }) => html`<hb-button theme="${theme}" size=${size} type=${type}>
    <hb-icon icon="system/filled/add" size=${size} style="--icon__color: #fff;"></hb-icon>
  </hb-button>`,
  args: {
    size: 'large',
    type: 'circle',
    theme: 'primary'
  }
};

export const noType: Story = {
  render: ({ label, size }) => html`<hb-button size=${size}> ${label} </hb-button>`,
  args: {
    label: 'Text Only',
    size: 'large'
  }
};
