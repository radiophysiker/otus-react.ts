import { parser } from "./parser";
import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

export const calculate = (line: string): number => {
  const arrayOperand = parser(line);

  const firstPrioritiesRes = firstPrioritiesCalc(arrayOperand);

  if (arrayOperand.length === 1) {
    return Number(firstPrioritiesRes[0]);
  }

  return secondPrioritiesCalc(firstPrioritiesRes);
};
