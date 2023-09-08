import { sizes } from '@/components/atom/variable/type';
import { Meta, StoryObj } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbButton } from './index';
import { hbButtonThemes, hbButtonTypes, hbButtonNativeTypes } from './type';

const handleClick = () => console.log('Clicked!');

const submit = (e: Event) => {
  e.preventDefault();
  console.dir(e);
};

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
    target,
    rel,
    'native-type': nativeType
  }) => html`<hb-button
    theme="${theme}"
    size=${size}
    type=${type}
    .baseLoadingDuration=${baseLoadingDuration}
    ?plain=${plain}
    ?loading=${loading}
    ?disabled=${disabled}
    .href=${href}
    .target=${target}
    .rel=${rel}
    .native-type=${nativeType}
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
        type: { summary: 'number' },
        defaultValue: { summary: 0 }
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
    'native-type': {
      options: hbButtonNativeTypes,
      description:
        'Native 속성입니다. form 안에서 hb-input과 함께 동작합니다. (reset 타입은 추가 예정)',
      table: {
        type: { summary: 'button | submit' }
      },
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
    },
    rel: {
      description:
        "Native 속성입니다. target: _blank인 경우에는 'noreferrer noopener'로 기본 동작합니다.",
      table: {
        type: { summary: 'string' }
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
    theme: 'primary',
    'native-type': 'button'
  }
};

export const Form: Story = {
  render: () => html`<form
    @submit=${submit}
    style="display: flex; flex-flow: column wrap; gap: 20px 0;"
  >
    <hb-input type="text"></hb-input>
    <hb-input type="text"></hb-input>
    <div class="buttons" style="display: contents">
      <hb-button theme="secondary" size="medium" type="rectangle"> Submit </hb-button>
      <hb-button theme="secondary" size="medium" type="rectangle" native-type="button" plain>
        Normal Button
      </hb-button>
    </div>
  </form>`
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
