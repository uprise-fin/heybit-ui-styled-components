export enum verticalAlign {
  middle,
  top,
  bottom,
}
export enum horizonAlign {
  center,
  right,
  left,
}
export enum size {
  'xsmall' = 'xsmall',
  'small' = 'small',
  'medium' = 'medium',
  'large' = 'large',
}
export enum systemColor {
  'white' = 'white',
  'black' = 'black',
  'orange' = 'orange',
  'yellow' = 'yellow',
  'green' = 'green',
  'blue' = 'blue',
}
export enum serviceColor {
  'harvest' = 'harvest',
  'defi' = 'defi',
}
export type Color = systemColor | serviceColor;
