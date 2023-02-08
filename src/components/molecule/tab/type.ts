import { HbTab } from '.';

export interface HbTabProps {
  value?: string;
}
export interface HbTabEvent extends Event {
  target: HbTab;
}
export type HbTabSlot = 'header';
