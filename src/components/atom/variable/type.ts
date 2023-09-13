import Matercolor from 'matercolors';

export const prefix = 'hb';
export const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] as const;
export type Level = (typeof levels)[number];
export const verticalAligns = ['middle', 'top', 'bottom'] as const;
export type VerticalAlign = (typeof verticalAligns)[number];
export const horizonAligns = ['center', 'right', 'left'] as const;
export type HorizonAlign = (typeof horizonAligns)[number];
export const sizes = ['xsmall', 'small', 'medium', 'large', 'xlarge'] as const;
export type Size = (typeof sizes)[number];
export const systemColors = ['black', 'brown', 'yellow', 'red', 'green', 'blue', 'purple'] as const;
export type SystemColor = (typeof systemColors)[number];
export const serviceColors = ['heybit', 'harvest', 'reward'] as const;
export type ServiceColor = (typeof serviceColors)[number];
export type CreateColor = SystemColor | ServiceColor;
export type AllColor = Record<CreateColor, Matercolor>;

export const systemThemes = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info'
] as const;
export type SystemTheme = (typeof systemThemes)[number];

export const createColors: Record<CreateColor, string> = {
  black: '#36373a',
  brown: '#A3978E',
  yellow: '#FB7D28',
  red: '#CC281D',
  green: '#8ED2A6',
  blue: '#1386FC',
  purple: '#DED5FE',
  heybit: '#C04707',
  harvest: '#114D24',
  reward: '#848EF3'
};

export const statusColors: Record<SystemTheme, string> = {
  primary: '#FF7D41',
  secondary: '#36373a',
  success: '#00A652',
  warning: '#FFC93A',
  danger: '#F8452A',
  info: '#0095FF'
};

export const primaryColors: Record<CreateColor, string> = {
  black: '#36373a', //800
  brown: '#665b53', //700
  yellow: '#fea930', //700
  red: '#f55447', //400
  green: '#33b46b', //400
  blue: '#1a73e8', //700
  purple: '#8a6df4', //500
  heybit: '#ff7d41', //400
  harvest: '#54aa6c', //400
  reward: '#6872ef' //400
};

export const colorPalette = Object.entries(createColors).reduce(
  (a, [name, color]) => ({
    ...a,
    [name]: new Matercolor(color)
  }),
  {}
) as AllColor;

export const basicVariables = {
  //기본 변수. 그냥도 사용하지만 컴포넌트로 확장됨
  font: {
    family: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", sans-serif`,
    color: {
      void: '#FFFFFF',
      solid: colorPalette.black[800]
    },
    size: 16
  },
  size: {
    xlarge: 40,
    large: 32,
    medium: 24,
    small: 18,
    xsmall: 16
  },
  layout: {
    gutter: 20,
    media: 1020,
    'content-width': {
      '--mobile': 460,
      '--desktop': 1024
    }
  },
  border: {
    width: 1,
    color: colorPalette.black[200],
    radius: 4
  },
  background: {
    color: '#FFFFFF'
  },
  transition: {
    duration: {
      '--ms': '300ms'
    },
    type: 'ease',
    'delay-start': {
      '--ms': '0ms'
    },
    'delay-end': {
      '--ms': '0ms'
    }
  }
};
export const componentVariables = {
  //컴포넌트 변수
  dim: {
    background: {
      color: colorPalette.black[800]
    }
  },
  list: {
    height: 50,
    padding: {
      right: 18,
      left: 18
    },
    font: {
      size: basicVariables.font.size
    },
    border: {
      width: basicVariables.border.width,
      color: basicVariables.border.color
    }
  },
  icon: {
    color: colorPalette.black[800],
    size: basicVariables.size
  },
  // input: {
  //   height: 56,
  //   border: {
  //     width: basicVariables.border.width,
  //     'width--error': basicVariables.border.width * 2,
  //     'width--focus': basicVariables.border.width * 2,
  //     color: basicVariables.border.color,
  //     'color--error': colorPalette.orange[300],
  //     'color--readonly': colorPalette.black[400],
  //     'color--focus': colorPalette.black[800],
  //   },
  //   padding: {
  //     top: 0,
  //     bottom: 0,
  //     right: 18,
  //     left: 18,
  //   },
  //   font: {
  //     size: basicVariables.font.size,
  //   },
  // },
  input: {
    minHeight: 50,
    maxHeight: 71,
    border: {
      width: basicVariables.border.width,
      'width--error': basicVariables.border.width * 2,
      'width--focus': basicVariables.border.width * 2,
      color: basicVariables.border.color,
      'color--error': '#FF5252',
      'color--disabled': colorPalette.black[100],
      'color--focus': colorPalette.black[800]
    },
    padding: {
      top: 13.5,
      bottom: 13.5,
      right: 18,
      left: 18
    },
    font: {
      size: basicVariables.font.size,
      color: {
        '--placeholder': colorPalette.black[400]
      }
    }
  },
  button: {
    padding: {
      right: 10,
      left: 10
    },
    font: {
      size: basicVariables.font.size
    }
  },
  modal: {
    width: {
      sheet: 375,
      dialog: 280
    },
    margin: 20,
    background: '#FFFFFF',
    dialog: {
      'padding-top': 52,
      'padding-right': 20,
      'padding-bottom': 24,
      'padding-left': 20
    },
    'sheet-dialog': {
      'padding-top': 52,
      'padding-right': 20,
      'padding-bottom': 30,
      'padding-left': 20
    }
  },
  spinner: {
    color: colorPalette.black[800],
    size: basicVariables.size
  },
  select: {
    font: {
      size: basicVariables.font.size
    }
  },
  toast: {
    'max-width': 340,
    'min-height': 52,
    margin: {
      left: 20,
      right: 20,
      top: 10,
      bottom: 10
    },
    padding: {
      top: 16,
      bottom: 16,
      right: 18,
      left: 19
    },
    positive: {
      icon: 'system/filled/info',
      color: colorPalette.green[400]
    },
    negative: {
      icon: 'system/filled/danger',
      color: colorPalette.red[600]
    }
  },
  header: {
    height: {
      '--mobile': 60,
      '--desktop': 72
    },
    logo: {
      width: {
        '--mobile': 77,
        '--desktop': 80
      }
    }
  }
};
