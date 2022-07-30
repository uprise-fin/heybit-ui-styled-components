import {HbAnchorProps} from '@/components/atom/anchor/type';
import {HbIconName} from '@/components/molecule/icon/type';
export interface HbFooterMenu extends HbAnchorProps {
  name: string;
}
export interface HbFooterSocialMenu extends HbAnchorProps {
  icon: HbIconName;
}

export interface HbFooterProps {
  menu: HbFooterMenu[];
  socialMenu: HbFooterSocialMenu[];
}

export const initialFooterMenu: HbFooterMenu[] = [
  {
    name: '이용약관',
    event: () => console.log('이용약관'),
  },
  {name: '개인정보 처리방침', href: '테스트링크'},
  {name: '문의', event: () => console.log('문의')},
  {name: '사업제휴', event: () => console.log('사업제휴')},
  {name: '채용', event: () => console.log('채용')},
];
export const initialFooterSocialMenu: HbFooterSocialMenu[] = [
  {
    icon: HbIconName['system/filled/logo-facebook'],
    event: () => console.log('facebook'),
  },
  {
    icon: HbIconName['system/filled/naver'],
    event: () => console.log('naver'),
  },
  {
    icon: HbIconName['system/filled/logo-telegram'],
    event: () => console.log('telegram'),
  },
];
