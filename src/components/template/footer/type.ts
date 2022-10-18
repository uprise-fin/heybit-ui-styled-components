import { HbIconName, type HbAnchorProps } from '@/index';
export interface HbFooterMenu {
  name: string;
  children: HbFooterChildren[];
}

export interface HbFooterChildren extends HbAnchorProps {
  name: string;
  accent?: boolean;
}

export interface HbFooterSocialMenu extends HbAnchorProps {
  icon: HbIconName;
}
export interface HbFooterProps {
  menu?: HbFooterMenu[];
  socialMenu?: HbFooterSocialMenu[];
  upriseInfo?: string[];
  copy?: string;
  tel?: string;
}
