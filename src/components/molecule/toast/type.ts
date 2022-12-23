export interface HbToastProps {
  messages: HbToastMessage[];
  duration?: number;
}
export const hbToastTheme = ['positive', 'negative'] as const;
export type HbToastTheme = typeof hbToastTheme[number];
export interface HbToastMessage {
  text: string;
  theme?: HbToastTheme;
  // icon?: string;
  // color?: string;
  duration?: number;
}
