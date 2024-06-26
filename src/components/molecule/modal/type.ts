import type {
  HbButtonProps,
  HbAnchorProps,
  HbTransitionType,
  HorizonAlign,
  VerticalAlign
} from '@/index';
export interface HbModalProps {
  open?: boolean;
  transitionType?: HbTransitionType;
  verticalAlign?: VerticalAlign;
  horizonAlign?: HorizonAlign;
  width?: number;
  persistent?: boolean;
}
export interface HbEventDialogProps extends HbModalProps {
  image: string;
  href: string;
}
export interface HbPageDialogProps extends HbModalProps {}
export interface HbDialogProps extends HbModalProps {
  baseLoadingDuration?: number;
  loading?: boolean;
  icon?: string;
  title?: string;
  hideCloseBtn?: boolean;
  anchor?: HbDialogAnchor;
  buttons?: HbDialogButton[];
  buttonAlign?: HbModalButtonAlign;
}
export interface HbSheetDialogProps extends HbDialogProps {}

export interface HbDialogButton extends HbButtonProps {
  name: string;
}
export interface HbDialogAnchor extends HbAnchorProps {
  name: string;
}

export type HbModalButtonAlign = 'vertical' | 'horizon';

export const dialogLayout = ['dialog', 'normal', 'sheet'] as const;
export type HbDialogLayout = (typeof dialogLayout)[number];
