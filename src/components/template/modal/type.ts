import {HbAnchorProps} from '@/components/atom/anchor/type';
import {HbTransitionType} from '@/components/atom/transition/type';
import {HorizonAlign, VerticalAlign} from '@/components/atom/variable/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {HbButtonProps} from '@/components/organism/button/type';
export interface HbModalProps {
  open: boolean;
  transitionType?: HbTransitionType;
  verticalAlign?: VerticalAlign;
  horizonAlign?: HorizonAlign;
  width?: number;
  persistent?: boolean;
}
export interface HbEventDialogProps extends HbModalProps {}
export interface HbDialogProps extends HbModalProps {
  baseLoadingDuration?: number;
  loading?: boolean;
  icon?: HbIconName;
  title?: string;
  hideCloseBtn?: boolean;
  anchor?: HbDialogAnchor;
  buttons?: HbDialogButton[];
}
export interface HbSheetDialogProps extends HbDialogProps {}

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
