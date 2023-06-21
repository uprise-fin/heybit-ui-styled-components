import { Card } from './card';
import './card.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Card',
  tags: ['autodocs'],
  render: (args: any) => Card(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'form']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'desc']
    },
    outline: {
      control: { type: 'select' },
      options: ['false', 'true']
    }
  }
};

export const NoneStory = {
  args: {}
};
