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
    color: {
      void: white,
      solid: colorPalette[theme.black][900],
    },
  },
  border: {
    radius: 4,
  },
};
export const components = {
  modal: {
    width: 380,
    margin: 20,
    dim: colorPalette[theme.black][900],
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
