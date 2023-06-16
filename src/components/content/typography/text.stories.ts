import { Text } from './text';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Content/Text',
  tags: ['autodocs'],
  render: () => Text({}),
};

export const NoneStory = {
  args: {},
};
