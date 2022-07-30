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
  defaultMenu: HbHeaderNavi[];
  user: HbHeaderUser;
  event?: () => void;
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
export const initialHeaderGnb: HbHeaderNavi[] = [
  {
    name: '예치상품',
    event: () => console.log('예치상품'),
  },
  {
    name: '회사소개',
    event: () => console.log('회사소개'),
  },
  {
    name: '인사이트',
    event: () => console.log('인사이트'),
  },
  {
    name: '고객지원',
    event: () => console.log('고객지원'),
  },
];
export const initialHeaderMyMenu: HbHeaderMyMenu[] = [
  {
    name: '하베스트',
    loggedIn: false,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => console.log('하베스트'),
  },
  {
    name: '디파이',
    loggedIn: false,
    theme: HbButtonTheme.primary,
    size: Size.large,
    event: () => console.log('디파이'),
  },
];
export const initialHeaderAuthMenu: HbHeaderNavi[] = [
  {
    name: '인증 • 계정정보',
    event: () => console.log('인증'),
  },
  {
    name: '로그아웃',
    event: () => console.log('로그아웃'),
  },
];
export const initialHeaderDefaultMenu: HbHeaderNavi[] = [
  {
    name: '로그인',
    event: () => console.log('로그인'),
  },
  {
    name: '가입',
    event: () => console.log('가입'),
  },
];
