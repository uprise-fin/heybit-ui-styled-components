import { Section } from './section';


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Layout/Section',
  tags: ['autodocs'],
  render: () => Section({}),
  controls: { hideNoControlsWarning: true },
  // argTypes: {},
};

export const NoneStory = {
  args: {},
};
