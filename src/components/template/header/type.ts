export interface HbHeaderNavi {
  url: string;
  name: string;
  target?: string;
}

export interface HbHerderProps {
  navigations: HbHeaderNavi[];
}
