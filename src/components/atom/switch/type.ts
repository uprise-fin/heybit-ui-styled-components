import type { HbSwitch } from '.';
export interface HbSwitchProps {
  value?: boolean;
  loading?: boolean;
}
export interface HbSwitchEvent extends Event {
  target: HbSwitch;
}
