import { Container } from './container';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Layout/Container',
  tags: ['autodocs'],
  render: (args: any) => Container(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large']
    }
  }
};

export const NoneStory = {
  args: {}
};
