export interface HbTransitionProps {
  show: boolean;
  delete?: boolean;
  type: HbTransitionType;
}

export enum HbTransitionType {
  fade = 'fade',
  zoom = 'zoom',
  bottomUpHeight = 'bottom-up-height',
  bottomUp = 'bottom-up',
  topDown = 'top-down',
  rightLeft = 'right-left'
}
