import type {HbList} from '.';
export interface HbSelectOption {
  label: string;
  value: string;
}
export interface HbListEvent extends Event {
  target: HbList;
}
