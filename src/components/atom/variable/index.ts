import Matercolor from "matercolors";
import { theme } from "../../base";
export const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const white = "#fff";

const colors: Obj<string, theme> = {
  [theme.black]: "#404244",
  [theme.orange]: "#ff602f",
  [theme.yellow]: "#ffbe02",
  [theme.teal]: "#039985",
  [theme.green]: "#27ae60",
  [theme.blue]: "#2f80ed",
  [theme.purple]: "#6f63f8",
};
export const colorPalette = Object.entries(colors).reduce(
  (a, [name, color]: [theme, string]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {}
) as Obj<Matercolor, theme>;
export const variables = {
  font: {
    family: `Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto,
  "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR",
  "Malgun Gothic", sans-serif`,
    color: {
      void: white,
      solid: colorPalette[theme.black][900],
    },
    size: 16,
  },
  border: {
    width: 1,
    color: colorPalette[theme.black][200],
    radius: 4,
  },
  background: {
    color: white,
  },
  transition: {
    duration: "300ms",
  },
};
export const components = {
  dim: {
    background: {
      color: colorPalette[theme.black][900],
    },
  },
  list: {
    height: 50,
    padding: {
      right: 10,
      left: 10,
    },
    font: {
      size: variables.font.size,
    },
    border: {
      width: variables.border.width,
      color: variables.border.color,
    },
  },
  select: {
    font: {
      size: variables.font.size,
    },
  },
  input: {
    height: 50,
    border: {
      width: variables.border.width,
      color: variables.border.color,
      "color--error": colorPalette.yellow[300],
    },
    padding: {
      right: 10,
      left: 10,
    },
    font: {
      size: variables.font.size,
    },
  },
  modal: {
    width: 380,
    margin: 20,
    background: white,
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
      ([origin, obj]: [theme, Matercolor]) => {
        setProperty(`--${origin}`, colors[origin]);
        Object.entries(obj).forEach(([level, color]) => {
          if (!(+level > 0)) return;
          if (colors[origin] === color)
            setProperty(`--${origin}--level`, level);
          setProperty(`--${origin}__${level}`, color);
        });
      }
    );

    // another variables
    setGroupProperty({ ...variables, ...components });
  }
})();
