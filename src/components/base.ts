import {LitElement} from 'lit';
import {Size} from './atom/variable/type';
// export interface MouseCustomEvent extends Event {
//   clientX: number;
//   clientY: number;
// }
// type Props<T> = {
//   [key in keyof T]: unknown;
// };
export class Base<T> extends LitElement {
  props: (keyof T)[] = [];

  async connectedCallback() {
    super.connectedCallback();
    this.props.forEach(key => {
      const value = (this as unknown)[key as keyof T];
      if (value) this.setAttribute(key as string, value as string);
    });
    await this.customConnectedCallback();
  }

  customConnectedCallback() {}

  // async customConnectedCallback() {}

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  static get size() {
    return Object.keys(Size);
  }

  // touchStart(fn: EventListener) {
  //   this.ontouchstart = (event: TouchEvent) => {
  //     fn({
  //       ...event,
  //       clientX: event.touches[0].clientX,
  //       clientY: event.touches[0].clientY,
  //     } as MouseCustomEvent);
  //   };
  //   this.onmousedown = (event: MouseEvent) => {
  //     fn(event as MouseCustomEvent);
  //   };
  // }
  // touchEnd(fn: EventListener) {
  //   this.ontouchend = (event: TouchEvent) => {
  //     fn({
  //       ...event,
  //       clientX: event.touches[0].clientX,
  //       clientY: event.touches[0].clientY,
  //     } as MouseCustomEvent);
  //   };
  //   this.onmouseup = (event: MouseEvent) => {
  //     fn(event as MouseCustomEvent);
  //   };
  // }
}
