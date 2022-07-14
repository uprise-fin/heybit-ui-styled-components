export enum HbToastTheme {
  'positive' = 'positive',
  'negative' = 'negative',
}
export interface HbToastMessage {
  text: string;
  theme?: HbToastTheme;
  // icon?: string;
  // color?: string;
  duration?: number;
}
