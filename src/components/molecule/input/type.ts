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
export interface HbInputEvent extends InputEvent {
  target: HbInput;
}

export type HTMLInputTypeAttribute =
  | 'button'
  | 'checkbox'
  | 'color'
  | 'date'
  | 'datetime-local'
  | 'email'
  | 'file'
  | 'hidden'
  | 'image'
  | 'month'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'reset'
  | 'search'
  | 'submit'
  | 'tel'
  | 'text'
  | 'time'
  | 'url'
  | 'week';

export type HbInputType = HTMLInputTypeAttribute | 'currency' | 'english';
// export type HbInputType = 'text' | 'number' | 'currency' | 'password' | 'english';
export type HbInputSlots = 'slot--left' | 'slot--right';
