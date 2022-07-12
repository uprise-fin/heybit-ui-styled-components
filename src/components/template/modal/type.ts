import {hbButtonTheme} from '../../organism/button/type';

export interface HbDialogButton {
  event: Function;
  theme: hbButtonTheme;
  name: string;
  loading?: boolean;
}
export interface HbDialogAnchor {
  event?: Function;
  href?: string;
  target?: string;
  name?: string;
}

export enum hbModalButtonAlign {
  'vertical' = 'vertical',
  'horizon' = 'horizon',
}
