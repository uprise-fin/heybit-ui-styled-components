import { getFolderName } from '@/utils';
import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import './index';
import type { HbNoticeDialog } from './index';
interface HbNoticeDialogExpns extends HbNoticeDialog {
  content: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: `${getFolderName()}/molecule/hb-notice-dialog`,
  component: 'hb-notice-dialog',
  argTypes: {
    open: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true
    },
    persistent: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: true
    },
    hideCloseBtn: {
      options: [true, false],
      control: { type: 'radio' },
      defaultValue: false
    }
    // buttonAlign: {
    //   options: Object.keys(buttonAlign),
    //   control: { type: "radio" },
    //   defaultValue: buttonAlign.vertical,
    // },
  }
} as Meta;
const Template = (props: HbNoticeDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-notice-dialog
    @event=${function () {
      console.log('djakldjawlkjadwlk');
    }}
    width=${props.width}
    ?open=${props.open}
    .icon=${props.icon}
    .title=${props.title}
    .image=${props.image}
    .buttonAlign=${props.buttonAlign}
    ?loading=${props.loading}
    .baseLoadingDuration=${props.baseLoadingDuration}
    ?persistent=${props.persistent}
    ?hideCloseBtn=${props.hideCloseBtn}
  >
    <div
      style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
    >
      ${props.content}
    </div>
  </hb-notice-dialog>
`;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const HorizonTemplate: Story<HbNoticeDialogExpns> = (props) => {
  props.buttonAlign = 'horizon';
  return Template(props);
};

export const horizon: Story<HbNoticeDialogExpns> = HorizonTemplate.bind({});
horizon.args = {
  width: '1000px',
  open: true,
  image:
    'https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png',
  persistent: true,
  loading: false,
  disabled: false,
  baseLoadingDuration: 0,
  icon: thunderImg,
  title: '팝업 예시입니다!',
  content: '팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.'
};
