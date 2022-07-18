import {HbTransitionType} from '@/components/atom/transition/type';
import {HorizonAlign, VerticalAlign} from '@/components/atom/variable/type';
import {HbButtonTheme} from '@/components/organism/button/type';
export interface HbModalProps {
  open: boolean;
  verticalAlign: VerticalAlign;
  horizonAlign: HorizonAlign;
  transitionType: HbTransitionType;
  width?: number;
  persistent?: boolean;
}
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
