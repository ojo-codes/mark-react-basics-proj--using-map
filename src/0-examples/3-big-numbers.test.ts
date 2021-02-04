import { isBigNumber, bigNumbers } from "./3-big-numbers";

describe("isBigNumber - identifies whether a number is greater than or equal to 100", () => {
  test("identifies big numbers", () => {
    expect(isBigNumber(1000000)).toBe(true);
    expect(isBigNumber(101)).toBe(true);
    expect(isBigNumber(100)).toBe(true);
  });

  test("identifies smaller numbers", () => {
    expect(isBigNumber(99.9)).toBe(false);
    expect(isBigNumber(0)).toBe(false);
    expect(isBigNumber(-100000)).toBe(false);
  });
});

test("bigNumbers - returns an array of true/false depending on whether passed in numbers are big or not", () => {
  expect(bigNumbers([100, 99, 101, 10000, -10000])).toStrictEqual([
    true,
    false,
    true,
    true,
    false,
  ]);
});
