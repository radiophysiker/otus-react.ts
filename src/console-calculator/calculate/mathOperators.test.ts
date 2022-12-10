import { mul, div, add, minus } from "./mathOperators";

describe("mathOperators test cases", () => {
  test.each([
    [1, 2, 2],
    [2, 2, 4],
  ])("mul(%p, %p) = %p", (a, b, result) => {
    expect(mul(a, b)).toBe(result);
  });

  test.each([
    [2, 2, 1],
    [6, 2, 3],
  ])("div %p / %p = %p", (a, b, result) => {
    expect(div(a, b)).toBe(result);
  });

  test.each([
    [2, 3, 5],
    [6, 2, 8],
  ])("%p + %p = %p", (a, b, result) => {
    expect(add(a, b)).toBe(result);
  });

  test.each([
    [2, 3, -1],
    [6, 2, 4],
  ])("%p - %p = %p", (a, b, result) => {
    expect(minus(a, b)).toBe(result);
  });
});
