import {Size} from '@/components/atom/variable/type';
export interface HbButtonProps {
  size: Size;
  theme: HbButtonTheme;
  loading?: boolean;
  type?: HbButtonType;
  baseLoadingDuration?: number;
  disabled?: boolean;
}
export enum HbButtonSlots {
  'slot--left' = 'slot--left',
  'slot--right' = 'slot--right',
}
export enum HbButtonType {
  'rectangle' = 'rectangle',
  'radius' = 'radius',
  'circle' = 'circle',
}
export enum HbButtonTheme {
  'primary' = 'primary',
  'secondary' = 'secondary',
  'tertiary' = 'tertiary',
  'quaternary' = 'quaternary',
}
export enum HbButtonSize {
  'xsmall' = Size.xsmall,
  'small' = Size.small,
  'medium' = Size.medium,
  'large' = Size.large,
}
