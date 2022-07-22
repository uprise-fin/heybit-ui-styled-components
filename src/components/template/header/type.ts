import {HbAnchorProps} from '@/components/atom/anchor/type';

export interface HbHeaderNavi extends HbAnchorProps {
  name: string;
}

export interface HbHerderProps {
  navigations: HbHeaderNavi[];
}
