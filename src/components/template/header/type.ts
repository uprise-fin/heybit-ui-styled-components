export interface HbHeaderNavi {
  url: string;
  name: string;
  target?: '_self';
}

export interface HbHerderProps {
  navigations: HbHeaderNavi[];
}
