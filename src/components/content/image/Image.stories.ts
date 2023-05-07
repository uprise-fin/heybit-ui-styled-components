import { Image } from './Image';


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Content/Image',
  tags: ['autodocs'],
  render: () => Image({}),
  controls: { hideNoControlsWarning: true },
  // argTypes: {},
};

export const NoneStory = {
  args: {},
};
