export interface HbTransitionProps {
  show: boolean;
  delete?: boolean;
  type: HbTransitionType;
}

export const hbTransitionTypes = [
  'fade',
  'zoom',
  'bottom-up-height',
  'bottom-up',
  'top-down',
  'right-left'
] as const;
export type HbTransitionType = typeof hbTransitionTypes[number];
