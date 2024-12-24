export type HbCarouselEventStatus = 'start' | 'doing' | 'done' | 'fake';
export interface HbCarouselProps {
  auto?: boolean;
  draggable?: boolean;
  infinite?: boolean;
  indicate?: boolean;
  duration?: number | string;
  speed?: number | string;
  pause?: boolean;
  visibleLength?: number | string;
  index?: number;
}
