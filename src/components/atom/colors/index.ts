import Matercolor from 'matercolors';
import {
  ColorV2,
  statusColorV2,
  colorsV2,
  StatusColorV2,
  colorPaletteV2,
  statusColorPaletteV2,
  prefixV2,
  basicVariablesV2,
  componentVariablesV2,
  statusColorPrimaryV2
} from './type';

function setProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value);
}
// function setGroupProperty(obj: Object, group?: string) {
//   Object.entries(obj).map(([key, val]) => {
//     group = group || '';
//     if (typeof val === 'string') setProperty(`--${group}${key}`, val);
//     else if (typeof val === 'number')
//       setProperty(`--${group}${key}`, val + 'px');
//     else setGroupProperty(val, `${group}${key}__`);
//   });
// }
function setGroupProperty(obj: Object, group?: string) {
  Object.entries(obj).map(([key, val]) => {
    group = group || '';
    // const divider = group ? (key.indexOf('--') === 0 ? '' : '__') : '';
    const divider = group && key.indexOf('--') !== 0 ? '__' : '';
    if (typeof val === 'string') setProperty(`--${group}${divider}${key}`, val);
    else if (typeof val === 'number') setProperty(`--${group}${divider}${key}`, val + 'px');
    else setGroupProperty(val, `${group}${divider}${key}`);
  });
}

export default (function setRootStyleProperty() {
  if (!document.documentElement.style.getPropertyValue(`--${prefixV2}__${colorPaletteV2.black}`)) {
    // pallete
    Object.entries(colorPaletteV2).forEach(([origin, obj]: [ColorV2, Matercolor]) => {
      setProperty(`--${prefixV2}__${origin}`, colorsV2[origin]);
      Object.entries(obj).forEach(([level, color]) => {
        if (!(+level > 0)) return;
        // if (colorsV2[origin] === color) setProperty(`--${prefixV2}__${origin}--primary`, level);
        setProperty(`--${prefixV2}__${origin}--${level}`, color);
      });
    });

    Object.entries(statusColorPaletteV2).forEach(([origin, obj]: [StatusColorV2, Matercolor]) => {
      setProperty(`--${prefixV2}__${origin}`, statusColorV2[origin]);
      Object.entries(obj).forEach(([level, color]) => {
        if (!(+level > 0)) return;
        if (statusColorPrimaryV2[origin] === color)
          setProperty(`--${prefixV2}__${origin}--primary`, level);
        setProperty(`--${prefixV2}__${origin}--${level}`, color);
      });
    });

    // another variables
    setGroupProperty({ [prefixV2]: { ...basicVariablesV2, ...componentVariablesV2 } });
  }
})();
