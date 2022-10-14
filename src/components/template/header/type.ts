import { Size, type HbAnchorProps } from '@/index';
import { HbButtonProps, HbButtonTheme, HbButtonType } from '@/components/organism/button/type';
export interface HbHeaderChip {
  src: string;
  alt: string;
  background: string;
}
export interface HbHeaderGroup extends HbAnchorProps {
  name: string;
  desc: string;
}
export interface HbHeaderNavi extends HbAnchorProps {
  name: string;
  chip?: HbHeaderChip;
  group?: HbHeaderGroup[];
  groupOpen?: boolean;
}

export interface HbHeaderProps {
  gnb: HbHeaderNavi[];
  myMenu: HbHeaderMyMenu[];
  authMenu: HbHeaderNavi[];
  defaultMenu: HbHeaderDefaultMenu[];
  user?: HbHeaderUser;
  loggedin?: boolean;
  pending?: boolean;
  event?: () => void;
}
export interface HbHeaderDefaultMenu {
  name: string;
  event?: () => void;
}
export interface HbHeaderMyMenu extends HbButtonProps {
  name: string;
  chip?: HbHeaderChip;
  event: () => void;
}
export interface HbHeaderUser {
  name?: string;
  email?: string;
}
export const initialHeaderGnb: HbHeaderNavi[] = [
  {
    name: '예치상품',
    group: [
      {
        name: '하베스트',
        desc: '디지털자산 예치상품',
        href: '/iframe2.html'
      },
      {
        name: '하베스트 락업',
        desc: '디지털자산 중장기 예치상품',
        event: () => console.log('예치상품2')
      }
    ],
    href: '/iframe.html'
  },
  {
    name: '디파이',
    event: () => console.log('디파이')
  },
  {
    name: '회사소개',
    event: () => console.log('회사소개')
  },
  {
    name: '인사이트',
    event: () => console.log('인사이트')
  },
  {
    name: '고객지원',
    event: () => console.log('고객지원')
  }
];
export const initialHeaderMyMenu: HbHeaderMyMenu[] = [
  {
    name: '나의 현황',
    type: HbButtonType.rectangle,
    theme: HbButtonTheme.primary,
    size: Size.medium,
    event: () => console.log('나의 현황')
  },
  {
    name: '예치상품',
    type: HbButtonType.rectangle,
    theme: HbButtonTheme.quaternary,
    size: Size.medium,
    event: () => console.log('예치상품')
  }
];
export const initialHeaderAuthMenu: HbHeaderNavi[] = [
  {
    name: '인증 • 계정정보',
    event: () => console.log('인증 • 계정정보')
  },
  {
    name: '로그아웃',
    event: () => console.log('로그아웃')
  }
];
export const initialHeaderDefaultMenu: HbHeaderDefaultMenu[] = [
  {
    name: '로그인',
    event: () => console.log('로그인')
  },
  {
    name: '가입',
    event: () => console.log('가입')
  }
];
