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
  'small'= 'small',
  'medium'= 'medium',
  'large' = 'large',
}
export enum theme {
  'black' ='black',
  'orange' ='orange',
  'yellow' ='yellow',
  'teal' ='teal',
  'green' ='green',
  'blue' ='blue',
  'purple' ='purple',
}
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
  
  static get themes() {
    return Object.keys(theme)
  }
  static get size() {
    return Object.keys(size)
  }
} 