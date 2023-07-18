import { Grid } from './grid';


// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Layout/Grid',
  tags: ['autodocs'],
  render: () => Grid(),
  controls: { hideNoControlsWarning: true },
  argTypes: {},
};

export const NoneStory = {
  args: {},
};
