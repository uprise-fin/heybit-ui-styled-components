import { Paper } from './paper';
import './paper.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Paper',
  tags: ['autodocs'],
  render: (args: any) => Paper(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {}
};

export const NoneStory = {
  args: {}
};
