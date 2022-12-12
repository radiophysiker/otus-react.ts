export type NumberOrString = number | string;
export const isNumber = (s: string): boolean => /^[-]?\d+([.])?(\d+)?$/.test(s);
