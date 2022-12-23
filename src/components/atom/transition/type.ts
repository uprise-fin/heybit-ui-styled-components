export interface HbTransitionProps {
  show: boolean;
  delete?: boolean;
  type: HbTransitionType;
}

export type HbTransitionType =
  | 'fade'
  | 'zoom'
  | 'bottom-up-height'
  | 'bottom-up'
  | 'top-down'
  | 'right-left';
