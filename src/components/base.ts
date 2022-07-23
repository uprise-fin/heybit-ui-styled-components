import {LitElement} from 'lit';
// export interface MouseCustomEvent extends Event {
//   clientX: number;
//   clientY: number;
// }
// type Props<T> = {
//   [key in keyof T]: unknown;
// };
export class Base<T> extends LitElement {
  initialAttributes: (keyof T)[];

  event: (ev: unknown) => void;

  requestUpdate() {
    if (this.initialAttributes) this.initAttribute();
    super.requestUpdate();
  }

  initAttribute() {
    this.initialAttributes.forEach(key => {
      const attr = key as string;
      const value = (this as unknown)[key as keyof T];
      if (value && !this.getAttribute(attr))
        this.setAttribute(attr, value as string);
    });
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  onEvent<E extends Event>(ev: E) {
    if (this.event) return this.event(ev);
    this.dispatchEvent(new CustomEvent('event', ev));
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
