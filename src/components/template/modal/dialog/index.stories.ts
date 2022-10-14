import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';
import './index';
import type { HbDialog } from './index';
import desktopImg from '~/static/sample-desktop.png';
import thunderImg from '~/static/sample-thunder.svg';
import { HbButtonTheme } from '@/components/organism/button/type';
import { HbModalButtonAlign } from '@/components/template/modal/type';
interface HbDialogExpns extends HbDialog {
  content: string;
}

// More on default export: https://storybook.js.org/docs/web-components/writing-stories/introduction#default-export
export default {
  title: 'components/template/hb-dialog',
  component: 'hb-dialog',
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
const Template = (props: HbDialogExpns) => html`
  <style>
    body {
      background: url(${desktopImg}) no-repeat top center;
    }
  </style>
  <hb-dialog
    @event=${function () {
      console.log('djakldjawlkjadwlk');
    }}
    width=${props.width}
    ?open=${props.open}
    .icon=${props.icon}
    .title=${props.title}
    .buttonAlign=${props.buttonAlign}
    ?loading=${props.loading}
    .baseLoadingDuration=${props.baseLoadingDuration}
    ?persistent=${props.persistent}
    ?hideCloseBtn=${props.hideCloseBtn}
    .buttons=${props.buttons}
    .anchor=${props.anchor}
  >
    <div
      style="font-weight: 400;font-size: 14px;line-height: 140%;text-align: center;color: #828486;"
    >
      ${props.content}
    </div>
  </hb-dialog>
`;
// More on component templates: https://storybook.js.org/docs/web-components/writing-stories/introduction#using-args
const HorizonTemplate: Story<HbDialogExpns> = (props) => {
  props.buttonAlign = HbModalButtonAlign.horizon;
  return Template(props);
};
const VerticalTemplate: Story<HbDialogExpns> = (props) => {
  props.buttonAlign = HbModalButtonAlign.vertical;
  return Template(props);
};
export const horizon: Story<HbDialogExpns> = HorizonTemplate.bind({});
horizon.args = {
  width: '1000px',
  open: true,
  persistent: true,
  loading: false,
  disabled: false,
  baseLoadingDuration: 0,
  icon: thunderImg,
  title: '팝업 예시입니다!',
  content: '팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.팝업 텍스트입니다.',
  buttons: [
    {
      name: '닫기',
      theme: HbButtonTheme.primary,
      event: async function () {
        await new Promise((resolve) => setTimeout(() => resolve(true), 5000));
      }
    },
    {
      name: '열기',
      theme: HbButtonTheme.secondary,
      event: function () {
        console.log('2');
      }
    },
    {
      name: '삼번',
      theme: HbButtonTheme.tertiary,
      event: function () {
        console.log('3');
      }
    }
  ]
};
export const vertical: Story<HbDialogExpns> = VerticalTemplate.bind({});
vertical.args = {
  ...horizon.args,
  anchor: {
    name: '탈퇴하기',
    href: 'https://www.heybit.io'
  }
};
// const EventPopupTemplate: Story<HbDialogExpns> = ({
//   open,
//   persistent,
//   hideCloseBtn,
//   // storybook 옵션
//   icon,
//   title,
//   content,
//   button,
// }) =>
//   html`
//     <style>
//       body {
//         background-image: url(${desktopImg});
//       }
//     </style>
//     <hb-dialog
//       width=${460}
//       ?open=${open}
//       icon=${icon}
//       title=${title}
//       buttonAlign=${buttonAlign.horizon}
//       ?persistent=${persistent}
//       ?hideCloseBtn=${hideCloseBtn}
//     >
//       <hb-img
//         style="display: block;"
//         slot="content"
//         src=${content}
//         loadingWidth="400"
//         loadingHeight="490"
//       ></hb-img>
//       ${button
//         ? button.map(
//             (x) =>
//               html`
//                 <hb-button slot="button" theme=${x.theme} size="medium"
//                   >${x.name}</hb-button
//                 >
//               `
//           )
//         : ""}
//     </hb-dialog>
//   `;

// export const event: Story<HbDialogExpns> = EventPopupTemplate.bind({});
// event.args = {
//   open: true,
//   persistent: true,
//   content:
//     "https://storage.googleapis.com/heybit-dev-aiden.appspot.com/banners/web/1651803570_bn-popup-kr-pcw-harvest event-400x490.png",
//   button: [
//     {
//       name: "닫기",
//       theme: theme.primary,
//     },
//     {
//       name: "3일동안 안열기",
//       theme: theme.quinary,
//     },
//   ],
// };
