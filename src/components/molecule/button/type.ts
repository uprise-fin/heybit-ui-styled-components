import type { Size } from '@/index';
export interface HbButtonProps {
  size?: Size;
  theme?: HbButtonTheme;
  loading?: boolean;
  type?: HbButtonType;
  baseLoadingDuration?: number;
  disabled?: boolean;
  event?: () => void;
}
export type HbButtonSlots = 'slot--left' | 'slot--right';
export type HbButtonType = 'rectangle' | 'radius' | 'circle';
export type HbButtonTheme = 'primary' | 'secondary' | 'tertiary' | 'quaternary';
