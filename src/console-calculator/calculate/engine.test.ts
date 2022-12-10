import { firstPrioritiesCalc, secondPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  test.each([
    [[2, "*", 32], [64]],
    [[(2 * 32) / 4], [16]],
    [[2 * 8 * 4], [64]],
    [
      [2, "*", 32, "/", 4, "+", 5],
      [16, "+", 5],
    ],
    [
      [2, "+", 2, "*", 2],
      [2, "+", 4],
    ],
  ])("firstPrioritiesCalc(%p) = %p", (a, b) => {
    expect(firstPrioritiesCalc(a)).toEqual(b);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  test.each([
    [[1, "+", 32], 33],
    [[1, "+", 32, "-", 4], 29],
  ])("secondPrioritiesCalc(%p) = %p", (a, b) => {
    expect(secondPrioritiesCalc(a)).toEqual(b);
  });
});
