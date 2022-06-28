import Matercolor from "matercolors";
import { theme } from "../../base";
export const levels = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export const colors = {
  [theme.primary]: "#f05014",
  [theme.secondary]: "#323436",
  [theme.tertiary]: "#C6C2BE",
};
export const palette = Object.entries(colors).reduce(
  (a, [name, color]: [theme, string]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {}
);
export function setRootStyleProperty() {
  if (
    document.documentElement.style.getPropertyValue(`--${theme.primary}`) !==
    colors[theme.primary]
  )
    Object.entries(palette).forEach(([origin, obj]: [theme, Matercolor]) => {
      document.documentElement.style.setProperty(`--${origin}`, colors[origin]);
      Object.entries(obj).forEach(([level, color]) => {
        if (!(+level > 0)) return;
        document.documentElement.style.setProperty(
          `--${origin}__${level}`,
          color
        );
      });
    });
}
