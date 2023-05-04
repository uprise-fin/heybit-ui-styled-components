import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';
import '!style-loader!css-loader!sass-loader!./style.css';
import { colorPalette } from '../src/index';
import { colorPaletteV2 } from '../src/index';
import '../src/components/atom/variable';
import '../src/components/atom/colors';
import { serviceColors, systemColors } from '../src/components/atom/variable/type';
import { serviceColorsV2, systemColorsV2 } from '../src/components/atom/colors/type';
export const parameters = {
  colorPicker: {
    palettes: [
      {
        name: 'system color',
        palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
          if (!systemColors[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv]
                  },
            {}
          );
          return {
            ...a,
            ...ov
          };
        }, {})
      },
      {
        name: 'service color',
        palette: Object.entries(colorPalette).reduce((a, [k, v]) => {
          if (!serviceColors[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv]
                  },
            {}
          );
          return {
            ...a,
            ...ov
          };
        }, {})
      }
    ]
  }
};
export const parametersV2 = {
  colorPicker: {
    palettes: [
      {
        name: 'system color V2',
        palette: Object.entries(colorPaletteV2).reduce((a, [k, v]) => {
          if (!systemColorsV2[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv]
                  },
            {}
          );
          return {
            ...a,
            ...ov
          };
        }, {})
      },
      {
        name: 'service color V2',
        palette: Object.entries(colorPaletteV2).reduce((a, [k, v]) => {
          if (!serviceColorsV2[k]) return a;
          const ov = Object.keys(v).reduce(
            (va, vv) =>
              isNaN(vv)
                ? va
                : {
                    ...va,
                    [`${k}--${vv}`]: v[vv]
                  },
            {}
          );
          return {
            ...a,
            ...ov
          };
        }, {})
      }
    ]
  }
};
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
