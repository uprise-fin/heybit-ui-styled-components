import { HbRow } from './hb-row';
import './hb-row.scss';

// More on how to set up stories at: https://storybook.js.org/docs/web-components/writing-stories/introduction
export default {
  title: 'Container/Hb-Row',
  tags: ['autodocs'],
  render: (args: any) => HbRow(args),
  controls: { hideNoControlsWarning: true },
  argTypes: {
    align: {
      control: { type: 'select' },
      options: ['top', 'bottom']
    }
  }
};

export const NoneStory = {
  args: {}
};
