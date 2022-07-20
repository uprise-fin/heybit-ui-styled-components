import {HbListOption} from '@/components/molecule/list/type';

export interface HbSelectProps {
  open: boolean;
  search: boolean;
  attributeSync: boolean;
  value: string;
  options: HbListOption[];
}
