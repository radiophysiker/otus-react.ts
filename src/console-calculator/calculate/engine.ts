import { NumberOrString } from "./utils";
import { mathOperators, mathOperatorsPriorities } from "./mathOperators";

export const firstPrioritiesCalc = (str: NumberOrString[]): NumberOrString[] => {
  const emptyArray = [];
  for (let index = 0; index < str.length; index++) {
    const value = str[index];
    if (typeof value === "string" && mathOperatorsPriorities[value] === 1) {
      emptyArray.splice(
        emptyArray.length - 1,
        1,
        mathOperators[value](Number(emptyArray[emptyArray.length - 1]), Number(str[index + 1])),
      );
      index++;
    } else {
      emptyArray.push(value);
    }
  }
  return emptyArray;
};

export const secondPrioritiesCalc = (str: NumberOrString[]): number => {
  let emptyResult = Number(str[0]);
  for (let index = 0; index < str.slice(1).length; index++) {
    const value = str[index];
    if (typeof value === "string" && mathOperatorsPriorities[value] === 2) {
      emptyResult = mathOperators[value](emptyResult, Number(str[index + 1]));
      index++;
    }
  }
  return emptyResult;
};
