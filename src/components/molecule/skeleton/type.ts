import {HbLoadingProps} from '@/index';

export interface HbSkeletonProps extends HbLoadingProps {
  type: HbSkeletonType;
}
export enum HbSkeletonType {
  card = 'card',
  dropMenuTop = 'drop-menu-top',
  dropMenuBottom = 'drop-menu-bottom',
  hamburger = 'hamburger',
}
