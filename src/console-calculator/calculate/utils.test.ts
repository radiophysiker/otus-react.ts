import { isNumber } from "./utils";

describe("Positive isNumber cases", () => {
  test.each([[1], ["1"], ["0.1"]])("isNumber(%p)", (a) => {
    expect(isNumber(a)).toBeTruthy();
  });
});

describe("Negative isNumber cases", () => {
  test.each([["sdw"], ["sd1"], ["1sd"], ["1.1.1"]])("isNumber(%p)", (a) => {
    expect(isNumber(a)).toBeFalsy();
  });
});
