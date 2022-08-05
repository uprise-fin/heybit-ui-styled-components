import type {HbAnchorProps} from '@/type';
import {HbIconName} from '@/const';
export interface HbFooterMenu extends HbAnchorProps {
  name: string;
  accent?: true;
}
export interface HbFooterSocialMenu extends HbAnchorProps {
  icon: HbIconName;
}

export interface HbFooterProps {
  menu: HbFooterMenu[];
  socialMenu: HbFooterSocialMenu[];
  upriseInfo: string[];
  copy: string;
}
