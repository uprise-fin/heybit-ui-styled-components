import Matercolor from "matercolors";
import { systemColor, serviceColor, Color } from "../../base";
export const levels: [50, 100, 200, 300, 400, 500, 600, 700, 800, 900] = [
  50,
  100,
  200,
  300,
  400,
  500,
  600,
  700,
  800,
  900,
];

const colors: Obj<string, Color> = {
  [systemColor.white]: "#ffffff",
  [systemColor.black]: "#404244",
  [systemColor.orange]: "#ff602f",
  [systemColor.yellow]: "#ffbe02",
  [systemColor.green]: "#27ae60",
  [systemColor.blue]: "#2f80ed",
  [serviceColor.harvest]: "#039985",
  [serviceColor.defi]: "#6f63f8",
};
export const colorPalette = Object.entries(colors).reduce(
  (a, [name, color]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {}
) as Obj<Matercolor, Color>;
export const basicVariables = {
  font: {
    family: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", sans-serif`,
    color: {
      void: colorPalette[systemColor.white][50],
      solid: colorPalette[systemColor.black][900],
    },
    size: 16,
  },
  border: {
    width: 1,
    color: colorPalette[systemColor.black][200],
    radius: 4,
  },
  background: {
    color: colorPalette[systemColor.white][50],
  },
  transition: {
    duration: "300ms",
  },
};
export const componentVariables = {
  dim: {
    background: {
      color: colorPalette[systemColor.black][900],
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
  select: {
    font: {
      size: basicVariables.font.size,
    },
  },
  toast: {
    "max-width": 340,
    "min-height": 54,
    margin: 20,
    padding: {
      top: 16,
      bottom: 16,
      right: 20,
      left: 20,
    },
  },
  input: {
    height: 50,
    border: {
      width: basicVariables.border.width,
      color: basicVariables.border.color,
      "color--error": colorPalette.yellow[300],
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
  spinner: {
    color: colorPalette[systemColor.black][900],
  },
  modal: {
    width: 380,
    margin: 20,
    background: colorPalette[systemColor.white][50],
    dialog: {
      "padding-top": 52,
      "padding-right": 20,
      "padding-bottom": 24,
      "padding-left": 20,
    },
    "sheet-dialog": {
      "padding-top": 52,
      "padding-right": 20,
      "padding-bottom": 30,
      "padding-left": 20,
    },
  },
};
function setProperty(key: string, value: string) {
  document.documentElement.style.setProperty(key, value);
}
function setGroupProperty(obj: Obj<string, unknown>, group?: string) {
  Object.entries(obj).map(([key, val]) => {
    const _group = group || "";
    if (typeof val === "string") setProperty(`--${_group}${key}`, val);
    else if (typeof val === "number")
      setProperty(`--${_group}${key}`, val + "px");
    else setGroupProperty(val, `${_group}${key}__`);
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
      }
    );

    // another variables
    setGroupProperty({ ...basicVariables, ...componentVariables });
  }
})();
