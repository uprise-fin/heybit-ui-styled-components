import type { HbListOption } from '@/index';

export interface HbComboProps {
  open?: boolean;
  search?: boolean;
  attributeSync?: boolean;
  value?: string;
  placeholder?: string;
  emptyText?: string;
  options?: HbListOption[];
}
