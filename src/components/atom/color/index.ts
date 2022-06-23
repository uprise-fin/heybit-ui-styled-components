import Matercolor from "matercolors";
import { theme } from "../../base";
export const colors = {
  [theme.primary]: "#f05014",
  [theme.secondary]: "#323436",
  [theme.tertiary]: "#323436",
  [theme.quaternary]: "#323436",
  [theme.quinary]: "#f2f4f6",
  [theme.senary]: "#ffffff",
};
export const palette = Object.entries(colors).reduce(
  (a, [name, color]: [theme, string]) => ({
    ...a,
    [name]: new Matercolor(color),
  }),
  {}
);

Object.entries(palette).forEach(([origin, obj]: [theme, Matercolor]) => {
  document.documentElement.style.setProperty(`--${origin}`, colors[origin]);
  Object.entries(obj).forEach(([level, color]) => {
    if (+level > 0)
      document.documentElement.style.setProperty(
        `--${origin}__${level}`,
        color
      );
  });
});
