import { HbLoadingProps } from '@/index';

export interface HbSkeletonProps extends HbLoadingProps {
  type: HbSkeletonType;
}
export const hbSkeletonTypes = ['card', 'drop-menu-top', 'drop-menu-bottom', 'hamburger'] as const;
export type HbSkeletonType = typeof hbSkeletonTypes[number];
