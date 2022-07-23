import {HbAnchorProps} from '@/components/atom/anchor/type';
import {HbTransitionType} from '@/components/atom/transition/type';
import {HorizonAlign, VerticalAlign} from '@/components/atom/variable/type';
import {HbButtonProps} from '@/components/organism/button/type';
export interface HbModalProps {
  open: boolean;
  verticalAlign: VerticalAlign;
  horizonAlign: HorizonAlign;
  transitionType: HbTransitionType;
  width?: number;
  persistent?: boolean;
}
export interface HbDialogButton extends HbButtonProps {
  name: string;
}
export interface HbDialogAnchor extends HbAnchorProps {
  name: string;
}

export enum HbModalButtonAlign {
  'vertical' = 'vertical',
  'horizon' = 'horizon',
}
