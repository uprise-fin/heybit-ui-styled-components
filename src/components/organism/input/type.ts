import type {HbInput} from '.';

export enum HbInputType {
  text = 'text',
  number = 'number',
  password = 'password',
}
export interface HbInputEvent extends InputEvent {
  target: HbInput;
}
