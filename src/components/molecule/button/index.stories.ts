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
  render: ({
    label,
    size,
    baseLoadingDuration,
    plain,
    loading,
    disabled,
    type,
    theme,
    href,
    target
  }) => html`<hb-button
    .theme="${theme}"
    .size=${size}
    .type=${type}
    .baseLoadingDuration=${baseLoadingDuration}
    ?plain=${plain}
    ?loading=${loading}
    ?disabled=${disabled}
    .href=${href}
    .target=${target}
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
    plain: {
      description: 'tertiary theme와 같이 사용할 경우 디자인이 어색합니다.',
      table: {
        defaultValue: { summary: 'false' }
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
      control: { type: 'select' }
    },
    href: {
      description: 'Native 속성입니다. 값이 있으면 a 태그로 렌더링됩니다.',
      table: {
        type: { summary: 'string' }
      }
    },
    target: {
      description: 'Native 속성입니다. href가 있어야만 동작합니다.',
      table: {
        type: { summary: '_self | _blank | _parent | _top' }
      }
    }
  }
} as Meta<HbButton>;

type Story = StoryObj<HbButton>;

export const Rectangle: Story = {
  args: {
    label: '내용을 입력하세요',
    size: 'medium',
    baseLoadingDuration: 500,
    plain: false,
    loading: false,
    disabled: false,
    type: 'rectangle',
    theme: 'primary'
  }
};

export const Plain: Story = {
  args: {
    ...Rectangle.args,
    plain: true
  }
};

export const Secondary: Story = {
  args: {
    ...Rectangle.args,
    label: 'Secondary',
    theme: 'secondary'
  }
};

export const Radius: Story = {
  args: {
    ...Rectangle.args,
    label: 'Rounded Button',
    type: 'radius',
    theme: 'success'
  }
};

export const Link: Story = {
  args: {
    ...Rectangle.args,
    label: '헤이비트 홈 바로가기',
    href: 'https://www.heybit.io',
    target: '_blank'
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
  render: ({ label }) => html`<hb-button>
    ${label}
    <hb-icon icon="system/outline/arrow_right" size="small" style="--icon__color: #fff;"></hb-icon>
  </hb-button>`,
  args: {
    label: 'Text Only'
  }
};
