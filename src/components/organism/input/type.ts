import type {HbInput} from '.';
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
export enum HbInputType {
  text = 'text',
  number = 'number',
  password = 'password',
}
export enum HbInputSlots {
  'slot--left' = 'slot--left',
  'slot--right' = 'slot--right',
}
export interface HbInputEvent extends InputEvent {
  target: HbInput;
}
