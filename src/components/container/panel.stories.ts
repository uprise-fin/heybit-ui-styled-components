import { Panel } from './panel';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Panel',
  tags: ['autodocs'],
  render: (args: any) => Panel(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {}
};

export const NoneStory = {
  args: {}
};
