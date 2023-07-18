import { HbList } from './hb-list';
import './hb-list.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Hb-List',
  tags: ['autodocs'],
  render: () => HbList(),
  controls: { hideNoControlsWarning: true },
  argTypes: {}
};

export const NoneStory = {
  args: {}
};
