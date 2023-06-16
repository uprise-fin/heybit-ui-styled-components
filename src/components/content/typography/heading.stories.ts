import { Heading } from './heading';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Content/Heading',
  tags: ['autodocs'],
  render: () => Heading({}),
  controls: { hideNoControlsWarning: true },
  // argTypes: {},
};

export const NoneStory = {
  args: {},
};
