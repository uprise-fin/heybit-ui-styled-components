import type {HbTransitionType} from '@/const';

export interface HbTransitionProps {
  show: boolean;
  delete?: boolean;
  type: HbTransitionType;
}
