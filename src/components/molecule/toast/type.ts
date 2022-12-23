export interface HbToastProps {
  messages: HbToastMessage[];
  duration?: number;
}
export type HbToastTheme = 'positive' | 'negative';
export interface HbToastMessage {
  text: string;
  theme?: HbToastTheme;
  // icon?: string;
  // color?: string;
  duration?: number;
}
