import type {HbInput} from '.';
import {HbInputType} from './const';
export interface HbInputProps {
  value: string;
  attributeSync?: boolean;
  type?: HbInputType;
  placeholder?: string;
  maxlength?: number;
  comma?: number;
  decimal?: number;
  error?: boolean;
  readonly?: boolean;
}
export interface HbInputEvent extends InputEvent {
  target: HbInput;
}
