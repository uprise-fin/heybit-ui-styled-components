import { Paper } from './paper';
import './paper.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Paper',
  tags: ['autodocs'],
  render: (args: any) => Paper(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large', 'form']
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'success', 'warning', 'danger', 'desc', 'dark']
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
