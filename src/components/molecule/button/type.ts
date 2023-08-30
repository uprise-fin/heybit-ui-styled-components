import type { Size } from '@/index';
export interface HbButtonProps {
  size?: Size;
  theme?: HbButtonTheme;
  loading?: boolean;
  type?: HbButtonType;
  baseLoadingDuration?: number;
  disabled?: boolean;
  'native-type'?: HbButtonNativeType;
  event?: () => void;
}
export const hbButtonNativeTypes = ['button', 'submit'] as const;
export type HbButtonNativeType = typeof hbButtonNativeTypes[number];
export type HbButtonSlots = 'slot--left' | 'slot--right';
export const hbButtonTypes = ['rectangle', 'radius', 'circle'] as const;
export type HbButtonType = typeof hbButtonTypes[number];
export const hbButtonThemes = [
  'primary',
  'secondary',
  'success',
  'error',
  'warning',
  'info',
  'tertiary',
  'quaternary',
  'harvest',
  'defi'
] as const;
export type HbButtonTheme = typeof hbButtonThemes[number];
