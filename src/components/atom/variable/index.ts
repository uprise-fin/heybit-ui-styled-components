import Matercolor from 'matercolors';
import {
  Color,
  colors,
  colorPalette,
  prefix,
  basicVariables,
  componentVariables,
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
    else if (typeof val === 'number')
      setProperty(`--${group}${divider}${key}`, val + 'px');
    else setGroupProperty(val, `${group}${divider}${key}`);
  });
}
export default (function setRootStyleProperty() {
  if (
    !document.documentElement.style.getPropertyValue(
      `--${prefix}__${colorPalette.black}`,
    )
  ) {
    // pallete
    Object.entries(colorPalette).forEach(
      ([origin, obj]: [Color, Matercolor]) => {
        setProperty(`--${prefix}__${origin}`, colors[origin]);
        Object.entries(obj).forEach(([level, color]) => {
          if (!(+level > 0)) return;
          if (colors[origin] === color)
            setProperty(`--${prefix}__${origin}--primary`, level);
          setProperty(`--${prefix}__${origin}--${level}`, color);
        });
      },
    );

    // another variables
    setGroupProperty({[prefix]: {...basicVariables, ...componentVariables}});
  }
})();
