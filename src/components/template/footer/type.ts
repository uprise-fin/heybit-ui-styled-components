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
  tell?: string;
}

export const initialFooterMenu: HbFooterMenu[] = [
  {
    name: '이용약관',
    children: [
      {
        name: '서비스 이용약관',
        target: '_blank',
        href: 'https://r.heybit.io/c/policy-ko/'
      },
      {
        name: '개인정보 처리방침',
        target: '_blank',
        href: 'https://r.heybit.io/c/privacy-ko/',
        accent: true
      }
    ]
  },
  {
    name: '고객지원',
    children: [
      { name: '서비스 문의', href: 'mailto:help@heybit.io' },
      { name: '사업제휴', href: 'mailto:business@heybit.io' }
    ]
  },
  {
    name: '팀',
    children: [
      {
        name: '채용',
        target: '_blank',
        href: 'https://uprise.career.greetinghr.com/'
      }
    ]
  }
];
export const initialFooterCopy = '© 2021 Uprise, Inc. all rights reserved.';
export const initialFooterCompany = '업라이즈(주)';
export const initialFooterUpriseInfo: string[] = [
  '사업자등록번호: 596-87-01059',
  '대표이사 이충엽',
  '서울시 강남구 강남대로 374번지 케이스퀘어2, 13층',
  '통신판매업신고: 제2022-서울강남-04072호'
];
export const initialFooterSocialMenu: HbFooterSocialMenu[] = [
  {
    icon: HbIconName['system/filled/logo-facebook'],
    target: '_blank',
    href: 'https://r.heybit.io/c/facebook/'
  },
  {
    icon: HbIconName['system/filled/naver'],
    target: '_blank',
    href: 'https://m.post.naver.com/my.nhn?memberNo=40921089/'
  },
  {
    icon: HbIconName['system/filled/logo-twitter'],
    target: '_blank',
    href: 'https://twitter.com/heybit_io/'
  },
  {
    icon: HbIconName['system/filled/logo-instagram'],
    target: '_blank',
    href: 'https://www.instagram.com/heybit_io/'
  }
];
export const initialFooterTell = '대표전화 1577-9069';
