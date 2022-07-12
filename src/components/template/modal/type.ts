import {HbButtonTheme} from '@/components/organism/button/type';

export interface HbDialogButton {
  event: Function;
  theme: HbButtonTheme;
  name: string;
  loading?: boolean;
}
export interface HbDialogAnchor {
  event?: Function;
  href?: string;
  target?: string;
  name?: string;
}

export enum HbModalButtonAlign {
  'vertical' = 'vertical',
  'horizon' = 'horizon',
}
