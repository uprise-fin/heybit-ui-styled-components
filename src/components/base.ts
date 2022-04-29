import { LitElement } from "lit";
export enum size {
  'small'= 'small' ,
  'medium'= 'medium',
  'large' = 'large',
}
export enum theme {
  'primary' ='primary',
'secondary' ='secondary',
'tertiary' ='tertiary',
'quaternary' ='quaternary',
'quinary' ='quinary',
'senary' ='senary',
}
export default class extends LitElement {
  override connectedCallback() {
    super.connectedCallback();
    this.dataset.hbStyled = "true";
    this.customConnectedCallback()
  }
  customConnectedCallback(){}

  
  static get themes() {
    return Object.keys(theme)
  }
  static get size() {
    return Object.keys(size)
  }
} 