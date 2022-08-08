import type {HTMLAttributeAnchorTarget} from 'react';
export interface HbAnchorProps {
  href?: string;
  target?: HTMLAttributeAnchorTarget;
  disabled?: boolean;
  event?: () => void;
}
