import type Matercolor from 'matercolors';
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
