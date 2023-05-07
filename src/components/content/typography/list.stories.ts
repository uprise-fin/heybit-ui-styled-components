import { List } from './list';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Content/List',
  tags: ['autodocs'],
  render: () => List({}),
};

export const NoneStory = {
  args: {},
};
