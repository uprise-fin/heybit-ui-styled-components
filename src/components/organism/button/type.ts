import {Size} from '@/components/atom/variable/type';
export interface HbButtonProps {
  type?: HbButtonType;
  size: Size;
  loading?: boolean;
  baseLoadingDuration?: number;
  disabled?: boolean;
  theme?: HbButtonTheme;
  slot: HbButtonSlots;
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
