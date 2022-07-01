import { LitElement } from "lit";
export enum verticalAlign {
  middle,
  top,
  bottom,
}
export enum horizonAlign {
  center,
  right,
  left,
}
export enum size {
  'xsmall'= 'xsmall',
  'small'= 'small',
  'medium'= 'medium',
  'large' = 'large',
}
export enum systemColor {
  'white' ='white',
  'black' ='black',
  'orange' ='orange',
  'yellow' ='yellow',
  'green' ='green',
  'blue' ='blue',
}
export enum serviceColor {
  'harvest' ='harvest',
  'defi' ='defi',
}
export type Color = systemColor | serviceColor;
export class Base extends LitElement {
  override async connectedCallback() {
    super.connectedCallback();
    // this.dataset.hbStyled = "true";
    await this.customConnectedCallback()
  }
  async customConnectedCallback(){}

  stopPropagation(e: Event) {
    e.stopPropagation();
  }
  
  static get size() {
    return Object.keys(size)
  }
} 