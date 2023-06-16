import packageConfig from '../package.json';
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';
import '!style-loader!css-loader!sass-loader!./style.css';
// import { colorPalette } from '../src/components/atom/variable/type';
// import '../src/components/atom/variable';
// import { serviceColors, systemColors } from '../src/components/atom/variable/type';
import { Preview } from '@storybook/web-components';

console.log(`%cVersion: v${packageConfig.version}`, 'color: #ff691e');
console.log('%cPlatform: Web', 'color: #ff691e');

const preview: Preview = {
  // colorPicker: {
  //   palettes: [
  //     {
  //       name: 'system color',
  //       palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
  //         if (!systemColors[k]) return a;
  //         const ov = Object.keys(v).reduce(
  //           (va, vv) =>
  //             isNaN(vv)
  //               ? va
  //               : {
  //                   ...va,
  //                   [`${k}--${vv}`]: v[vv]
  //                 },
  //           {}
  //         );
  //         return {
  //           ...a,
  //           ...ov
  //         };
  //       }, {})
  //     },
  //     {
  //       name: 'service color',
  //       palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
  //         if (!serviceColors[k]) return a;
  //         const ov = Object.keys(v).reduce(
  //           (va, vv) =>
  //             isNaN(vv)
  //               ? va
  //               : {
  //                   ...va,
  //                   [`${k}--${vv}`]: v[vv]
  //                 },
  //           {}
  //         );
  //         return {
  //           ...a,
  //           ...ov
  //         };
  //       }, {})
  //     }
  //   ]
  // }
  parameters: {
    options: {
      storySort: {
        method: '',
        order: ['Tokens', 'Layout', 'Container', 'Content'],
        locales: ''
      }
    }
  }
};

export default preview;

// import customElementsManifest from '../custom-elements.json';

// setCustomElementsManifest(customElementsManifest);

// // TODO: Remove support of 0.x CustomElementManifest format in 7.0
// // import customElements from '../custom-elements-experimental.json';
// // setCustomElements(customElements);

// export const parameters = {
//   a11y: {
//     config: {},
//     options: {
//       checks: { 'color-contrast': { options: { noScroll: true } } },
//       restoreScroll: true,
//     },
//   },
//   docs: {
//     iframeHeight: '200px',
//   },
// };

// export const globalTypes = {
//   locale: {
//     name: 'Locale',
//     description: 'Internationalization locale',
//     defaultValue: 'en',
//     toolbar: {
//       icon: 'globe',
//       items: [
//         { value: 'en', right: '🇺🇸', title: 'English' },
//         { value: 'es', right: '🇪🇸', title: 'Español' },
//         { value: 'fr', right: '🇫🇷', title: 'Français' },
//         { value: 'zh', right: '🇨🇳', title: '中文' },
//         { value: 'kr', right: '🇰🇷', title: '한국어' },
//       ],
//     },
//   },
// };
