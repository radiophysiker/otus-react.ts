export type NumberOrString = number | string;
export const isNumber = (s: NumberOrString): boolean => !isNaN(Number(s));
