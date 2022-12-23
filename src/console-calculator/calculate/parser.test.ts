import { parser } from "./parser";

describe("Simple test", () => {
  test.each([
    ["1 + 1", [1, "+", 1]],
    ["2 + 2 * 2", [2, "+", 2, "*", 2]],
    ["2 + 2 * 2 + 3", [2, "+", 2, "*", 2, "+", 3]],
  ])("parser(%p) = %p", (a, result) => {
    expect(parser(a)).toEqual(result);
  });
});

describe("Parser invalid cases", () => {
  test.each([["1 + + 33 - 2"], ["1 | 33 - 2"], ["1 - 33 - - 2 "]])("%p + %p = %p", (a) => {
    expect(() => parser(a)).toThrow(TypeError("Unexpected string"));
  });
});
