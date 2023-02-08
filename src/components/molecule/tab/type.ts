import { HbTab } from '.';

export interface HbTabProps {
  value?: number;
}
export interface HbTabEvent extends Event {
  target: HbTab;
}
export type HbTabSlot = 'header';
