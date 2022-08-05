import {HbListOption} from '@/';

export interface HbSelectProps {
  open: boolean;
  search: boolean;
  attributeSync: boolean;
  value: string;
  options: HbListOption[];
}
