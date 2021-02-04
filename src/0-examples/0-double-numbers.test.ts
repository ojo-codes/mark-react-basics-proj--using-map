import { doubleNumber, doubleNumbers } from "./0-double-numbers";

test("doubleNumber - takes a single number and doubles it", () => {
  expect(doubleNumber(1)).toBe(2);
  expect(doubleNumber(2)).toBe(4);
  expect(doubleNumber(3)).toBe(6);
});

test("doubleNumbers - takes an array of numbers and doubles each of them", () => {
  expect(doubleNumbers([1, 2, 3])).toStrictEqual([2, 4, 6]);
  expect(doubleNumbers([100, 0, 0.5, -4])).toStrictEqual([200, 0, 1, -8]);
});
