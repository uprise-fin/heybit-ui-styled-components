import { LitElement } from 'lit';
// export interface MouseCustomEvent extends Event {
//   clientX: number;
//   clientY: number;
// }
// type Props<T> = {
//   [key in keyof T]: unknown;
// };
export class Base extends LitElement {
  event: (ev: unknown) => void;

  submit: (ev: unknown) => void;

  #tabindex: string;

  get tabindex() {
    return this.#tabindex;
  }

  set tabindex(value: string) {
    this.tabIndex = +value;
    this.#tabindex = value;
    this.setAttribute('tabindex', value);
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

  onSubmit(ev: CustomEvent) {
    if (ev instanceof CustomEvent) {
      if (this.submit) return this.submit(ev);
      return this.dispatchEvent(new CustomEvent('submit', ev));
    }
  }
}
