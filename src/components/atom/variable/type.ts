import Matercolor from 'matercolors';

export const prefix = 'husc';
export type Level = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
export const levels: Level[] = [
  50, 100, 200, 300, 400, 500, 600, 700, 800, 900,
];
export enum VerticalAlign {
  middle,
  top,
  bottom,
}
export enum HorizonAlign {
  center,
  right,
  left,
}
export enum Size {
  'xsmall' = 'xsmall',
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}
export enum SystemColor {
  'white' = 'white',
  'black' = 'black',
  'orange' = 'orange',
  'yellow' = 'yellow',
  'green' = 'green',
  'blue' = 'blue',
}
export enum ServiceColor {
  'harvest' = 'harvest',
  'defi' = 'defi',
}
export type Color = SystemColor | ServiceColor;
export type AllColor = Record<Color, Matercolor>;

export const colors = {
  [SystemColor.white]: '#ffffff',
  [SystemColor.black]: '#404244',
  [SystemColor.orange]: '#ff602f',
  [SystemColor.yellow]: '#ffbe02',
  [SystemColor.green]: '#27ae60',
  [SystemColor.blue]: '#2f80ed',
  [ServiceColor.harvest]: '#039985',
  [ServiceColor.defi]: '#6d40c6',
};
export const colorPalette = Object.entries(colors).reduce(
  (a, [name, color]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {},
) as Record<Color, Matercolor>;
export const basicVariables = {
  //기본 변수. 그냥도 사용하지만 컴포넌트로 확장됨
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
  size: {
    [Size.large]: 32,
    [Size.medium]: 24,
    [Size.small]: 18,
    [Size.xsmall]: 16,
  },
  layout: {
    gutter: 22,
    media: 780,
    'content-width': {
      '--mobile': 460,
      '--desktop': 1160,
    },
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
    duration: {
      '--ms': '300ms',
      number: 300,
    },
    'delay-start': {
      '--ms': '0ms',
      number: 0,
    },
    'delay-end': {
      '--ms': '0ms',
      number: 0,
    },
  },
};
export const componentVariables = {
  //컴포넌트 변수
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
    size: basicVariables.size,
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
    width: 400,
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
    size: basicVariables.size,
  },
  select: {
    font: {
      size: basicVariables.font.size,
    },
  },
  toast: {
    'max-width': 340,
    'min-height': 52,
    margin: {
      left: 20,
      right: 20,
      top: 10,
      bottom: 10,
    },
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
  header: {
    height: {
      '--mobile': 60,
      '--desktop': 77,
    },
    logo: {
      width: 77,
    },
  },
};
