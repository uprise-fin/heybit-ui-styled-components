import {LitElement} from 'lit';
// export interface MouseCustomEvent extends Event {
//   clientX: number;
//   clientY: number;
// }
// type Props<T> = {
//   [key in keyof T]: unknown;
// };
export class Base extends LitElement {
  event: (ev: unknown) => void;

  #tabindex: string;

  get tabindex() {
    return this.#tabindex;
  }

  set tabindex(value: string) {
    this.tabIndex = +value;
    this.#tabindex = value;
    this.setAttribute('tabindex', value);
  }

  #disabled: boolean;

  get disabled() {
    return this.#disabled;
  }

  set disabled(value: boolean) {
    this.#disabled = value;
    if (value) this.setAttribute('disabled', '');
    else this.removeAttribute('disabled');
  }

  stopPropagation(ev: Event) {
    ev.stopPropagation();
  }

  onEvent(ev: CustomEvent) {
    if (ev instanceof CustomEvent) {
      if (this.event) return this.event(ev);
      return this.dispatchEvent(new CustomEvent('event', ev));
    }
  }
}
export class InitAttribute<T> extends Base {
  initialAttributes: (keyof T)[];

  requestUpdate() {
    if (this.initialAttributes) this.initAttribute();
    super.requestUpdate();
  }

  initAttribute() {
    this.initialAttributes.forEach(key => {
      const attr = key as string;
      const value = (this as unknown)[key as keyof T];
      if (value && this.getAttribute(attr) !== value)
        this.setAttribute(attr, value as string);
    });
  }
}
