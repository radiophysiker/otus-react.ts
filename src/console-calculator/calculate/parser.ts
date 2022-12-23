import { isNumber, NumberOrString } from "./utils";
import { mathOperators } from "./mathOperators";

export const parser = (line: string): NumberOrString[] => {
  const arrayOperand = line.split(" ");
  if (checkValidArrayOperand(arrayOperand)) {
    return arrayOperand.map((el) => (isNumber(el) ? Number(el) : el));
  } else {
    throw new TypeError("Unexpected string");
  }
};

const checkValidArrayOperand = (list: string[]): boolean => {
  let prevElement = list[0];
  for (const el of list.slice(1)) {
    if (
      isNumber(el) === isNumber(prevElement) ||
      (!isNumber(el) && !mathOperators.hasOwnProperty(el))
    ) {
      return false;
    } else {
      prevElement = el;
    }
  }
  return true;
};
