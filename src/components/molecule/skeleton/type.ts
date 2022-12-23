import { HbLoadingProps } from '@/index';

export interface HbSkeletonProps extends HbLoadingProps {
  type: HbSkeletonType;
}
export type HbSkeletonType = 'card' | 'drop-menu-top' | 'drop-menu-bottom' | 'hamburger';
