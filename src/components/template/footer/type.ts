import {HbIconName, type HbAnchorProps} from '@/index';
export interface HbFooterMenu extends HbAnchorProps {
  name: string;
  accent?: true;
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
    target: '_blank',
    href: 'https://r.heybit.io/c/policy-ko/',
  },
  {
    name: '개인정보 처리방침',
    target: '_blank',
    href: 'https://r.heybit.io/c/privacy-ko/',
    accent: true,
  },
  {name: '문의', href: 'mailto:help@heybit.io'},
  {name: '사업제휴', href: 'mailto:business@heybit.io'},
  {
    name: '채용',
    target: '_blank',
    href: 'https://uprise.career.greetinghr.com/',
  },
];
export const initialFooterCopy = '© 2021 Uprise, Inc. all rights reserved.';
export const initialFooterUpriseInfo: string[] = [
  '업라이즈 주식회사 대표 이충엽',
  '사업자등록번호 596-87-01059',
  '통신판매업신고 제2022-서울강남-04072호',
  '주소 서울시 강남구 강남대로 374번지 케이스퀘어2, 13층',
];
export const initialFooterSocialMenu: HbFooterSocialMenu[] = [
  {
    icon: HbIconName['system/filled/logo-facebook'],
    target: '_blank',
    href: 'https://r.heybit.io/c/facebook/',
  },
  {
    icon: HbIconName['system/filled/naver'],
    target: '_blank',
    href: 'https://m.post.naver.com/my.nhn?memberNo=40921089/',
  },
  {
    icon: HbIconName['system/filled/logo-telegram'],
    target: '_blank',
    href: 'https://t.me/joinchat/BAm18UqMJPcwYTI1/',
  },
];
export const initialFooterTell = '대표전화 1577-9069';
