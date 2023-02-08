import type { HbListOption } from '@/index';
import type { HbCombo } from '.';
export interface HbComboProps {
  open?: boolean;
  search?: boolean;
  attributeSync?: boolean;
  value?: string;
  placeholder?: string;
  emptyText?: string;
  options?: HbListOption[];
}

export interface HbComboEvent extends Event {
  target: HbCombo;
}
