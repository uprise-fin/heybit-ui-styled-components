import {Size} from '@/const';
import {HbButtonTheme, HbButtonType} from './const';
export interface HbButtonProps {
  size?: Size;
  theme?: HbButtonTheme;
  loading?: boolean;
  type?: HbButtonType;
  baseLoadingDuration?: number;
  disabled?: boolean;
  event?: () => void;
}
