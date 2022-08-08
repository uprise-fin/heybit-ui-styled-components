import type {HbAnchorProps, HbButtonProps} from '@/index';
export interface HbHeaderNavi extends HbAnchorProps {
  name: string;
  img?: string;
  chip?: string;
}

export interface HbHeaderProps {
  gnb: HbHeaderNavi[];
  myMenu: HbHeaderMyMenu[];
  authMenu: HbHeaderNavi[];
  defaultMenu: HbHeaderDefaultMenu[];
  user: HbHeaderUser;
  event?: () => void;
}
export interface HbHeaderDefaultMenu {
  name: string;
  event?: () => void;
}
export interface HbHeaderMyMenu extends HbButtonProps {
  name: string;
  img?: string;
  chip?: string;
  event: () => void;
}
export interface HbHeaderUser {
  name: string;
  loggedIn: boolean;
  pending?: boolean;
  email?: string;
}
