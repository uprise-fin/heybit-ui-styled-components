import Matercolor from 'matercolors';
import {Color, ServiceColor, SystemColor} from './type';

const colors = {
  [SystemColor.white]: '#ffffff',
  [SystemColor.black]: '#404244',
  [SystemColor.orange]: '#ff602f',
  [SystemColor.yellow]: '#ffbe02',
  [SystemColor.green]: '#27ae60',
  [SystemColor.blue]: '#2f80ed',
  [ServiceColor.harvest]: '#039985',
  [ServiceColor.defi]: '#6f63f8',
};
export const colorPalette = Object.entries(colors).reduce(
  (a, [name, color]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {},
) as Record<Color, Matercolor>;
export const basicVariables = {
  font: {
    family: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", sans-serif`,
    color: {
      void: colorPalette[SystemColor.white][50],
      solid: colorPalette[SystemColor.black][900],
    },
    size: 16,
  },
  border: {
    width: 1,
    color: colorPalette[SystemColor.black][200],
    radius: 4,
  },
  background: {
    color: colorPalette[SystemColor.white][50],
  },
  transition: {
    duration: '300ms',
  },
};
export const componentVariables = {
  dim: {
    background: {
      color: colorPalette[SystemColor.black][900],
    },
  },
  list: {
    height: 50,
    padding: {
      right: 10,
      left: 10,
    },
    font: {
      size: basicVariables.font.size,
    },
    border: {
      width: basicVariables.border.width,
      color: basicVariables.border.color,
    },
  },

  icon: {
    color: colorPalette[SystemColor.black][900],
  },
  input: {
    height: 50,
    border: {
      width: basicVariables.border.width,
      color: basicVariables.border.color,
      'color--error': colorPalette.yellow[300],
    },
    padding: {
      right: 10,
      left: 10,
    },
    font: {
      size: basicVariables.font.size,
    },
  },
  button: {
    padding: {
      right: 10,
      left: 10,
    },
    font: {
      size: basicVariables.font.size,
    },
  },
  modal: {
    width: 380,
    margin: 20,
    background: colorPalette[SystemColor.white][50],
    dialog: {
      'padding-top': 52,
      'padding-right': 20,
      'padding-bottom': 24,
      'padding-left': 20,
    },
    'sheet-dialog': {
      'padding-top': 52,
      'padding-right': 20,
      'padding-bottom': 30,
      'padding-left': 20,
    },
  },
  spinner: {
    color: colorPalette[SystemColor.black][900],
  },
  select: {
    font: {
      size: basicVariables.font.size,
    },
  },
  toast: {
    'max-width': 340,
    'min-height': 52,
    margin: 20,
    padding: {
      top: 16,
      bottom: 16,
      right: 18,
      left: 19,
    },
    positive: {
      icon: 'system/filled/info',
      color: colorPalette[SystemColor.green][400],
    },
    negative: {
      icon: 'system/filled/danger',
      color: colorPalette[SystemColor.orange][600],
    },
  },
};
function setProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value);
}
function setGroupProperty(obj: Object, group?: string) {
  Object.entries(obj).map(([key, val]) => {
    group = group || '';
    if (typeof val === 'string') setProperty(`--${group}${key}`, val);
    else if (typeof val === 'number')
      setProperty(`--${group}${key}`, val + 'px');
    else setGroupProperty(val, `${group}${key}__`);
  });
}
export default (function setRootStyleProperty() {
  if (
    !document.documentElement.style.getPropertyValue(`--${colorPalette.black}`)
  ) {
    // pallete
    Object.entries(colorPalette).forEach(
      ([origin, obj]: [Color, Matercolor]) => {
        setProperty(`--${origin}`, colors[origin]);
        Object.entries(obj).forEach(([level, color]) => {
          if (!(+level > 0)) return;
          if (colors[origin] === color)
            setProperty(`--${origin}--primary`, level);
          setProperty(`--${origin}--${level}`, color);
        });
      },
    );

    // another variables
    setGroupProperty({...basicVariables, ...componentVariables});
  }
})();
