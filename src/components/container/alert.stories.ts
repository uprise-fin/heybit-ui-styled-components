import { Alert } from './alert';
import './alert.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Alert',
  tags: ['autodocs'],
  render: (args: any) => Alert(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {
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
