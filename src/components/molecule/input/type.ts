import type { HbInput } from '.';
export interface HbInputProps {
  value?: string;
  attributeSync?: boolean;
  type?: HbInputType;
  placeholder?: string;
  maxlength?: number;
  comma?: number;
  decimal?: number;
  error?: boolean;
  readonly?: boolean;
}
export type HbInputType = 'text' | 'number' | 'currency' | 'password' | 'english';
export type HbInputSlots = 'slot--left' | 'slot--right';
export interface HbInputEvent extends InputEvent {
  target: HbInput;
}
