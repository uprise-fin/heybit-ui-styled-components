import type {HbToastTheme} from '@/const';

export interface HbToastProps {
  messages: HbToastMessage[];
  duration?: number;
}
export interface HbToastMessage {
  text: string;
  theme?: HbToastTheme;
  // icon?: string;
  // color?: string;
  duration?: number;
}
