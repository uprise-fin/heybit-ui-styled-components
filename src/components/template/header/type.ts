import {HbAnchorProps} from '@/components/atom/anchor/type';
import {Size} from '@/components/atom/variable/type';
import {HbIconName} from '@/components/molecule/icon/type';
import {HbButtonProps, HbButtonTheme} from '@/components/organism/button/type';
export interface HbHeaderNavi extends HbAnchorProps {
  name: string;
}

export interface HbHeaderProps {
  gnb: HbHeaderNavi[];
  myMenu: HbHeaderMyMenu[];
  authMenu: HbHeaderNavi[];
  user: HbHeaderUser;
}
export interface HbHeaderMyMenu extends HbButtonProps {
  name: string;
  loggedIn: boolean;
  icon?: HbIconName;
  event: () => void;
}
export interface HbHeaderUser {
  title: string;
  loggedIn: boolean;
  email?: string;
}
export const gnb: HbHeaderNavi[] = [
  {
    name: '예치상품',
  },
  {
    name: '회사소개',
  },
  {
    name: '인사이트',
  },
  {
    name: '고객지원',
  },
];
export const myMenu: HbHeaderMyMenu[] = [
  {
    name: '예치상품',
    loggedIn: false,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => false,
  },
  {
    name: '회사소개',
    loggedIn: false,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => false,
  },
  {
    name: '인사이트',
    loggedIn: true,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => false,
  },
  {
    name: '고객지원',
    loggedIn: true,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => false,
  },
];
export const authMenu: HbHeaderNavi[] = [
  {
    name: '인증 • 계정정보',
  },
  {
    name: '로그아웃',
  },
];
