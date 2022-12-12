import type { HbList } from '.';
export interface HbListProps {
  options: HbListOption[];
  value: string;
  emptyText?: string;
  attributeSync?: boolean;
}
export interface HbListOption {
  label: string;
  value: string;
  disabled?: boolean;
}
export interface HbListEvent extends Event {
  target: HbList;
}
