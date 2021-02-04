import { squareNumber, squareNumbers } from "./0-square-numbers";

test("squareNumber - takes a single number and squares it", () => {
  expect(squareNumber(1)).toBe(1);
  expect(squareNumber(2)).toBe(4);
  expect(squareNumber(3)).toBe(9);
});

test("squareNumbers - takes an array of numbers and squares each of them", () => {
  expect(squareNumbers([1, 2, 3])).toStrictEqual([1, 4, 9]);
  expect(squareNumbers([100, 0, 0.5, -4])).toStrictEqual([10000, 0, 0.25, 16]);
});
