// using functions exported from './fizzbuzz'
// (standard TS importing syntax)
import { fizzbuzz, isFizz, isBuzz, isFizzbuzz, toFizzbuzz } from "./fizzbuzz";

test("fizbuzz - returns an array representing the fizzbuzz sequence up to that number", () => {
  expect(fizzbuzz(1)).toEqual([1]);
  expect(fizzbuzz(3)).toEqual([1, 2, "Fizz"]);
  expect(fizzbuzz(5)).toEqual([1, 2, "Fizz", 4, "Buzz"]);
  expect(fizzbuzz(15)).toEqual([
    1,
    2,
    "Fizz",
    4,
    "Buzz",
    "Fizz",
    7,
    8,
    "Fizz",
    "Buzz",
    11,
    "Fizz",
    13,
    14,
    "FizzBuzz",
  ]);
});

test("isFizz - returns true if and only if the number is a multiple of three", () => {
  expect(isFizz(3)).toBe(true);
  expect(isFizz(4)).toBe(false);
  expect(isFizz(5)).toBe(false);
  expect(isFizz(6)).toBe(true);
  expect(isFizz(7)).toBe(false);
  expect(isFizz(8)).toBe(false);
  expect(isFizz(9)).toBe(true);
  expect(isFizz(10)).toBe(false);
});

test("isBuzz - returns true if and only if the number is a multiple of three", () => {
  expect(isBuzz(3)).toBe(false);
  expect(isBuzz(4)).toBe(false);
  expect(isBuzz(5)).toBe(true);
  expect(isBuzz(6)).toBe(false);
  expect(isBuzz(7)).toBe(false);
  expect(isBuzz(8)).toBe(false);
  expect(isBuzz(9)).toBe(false);
  expect(isBuzz(10)).toBe(true);
});

test("isFizzbuzz - returns true if and only if the number is a multiple of fifteen", () => {
  expect(isFizzbuzz(3)).toBe(false);
  expect(isFizzbuzz(5)).toBe(false);
  expect(isFizzbuzz(8)).toBe(false);
  expect(isFizzbuzz(9)).toBe(false);
  expect(isFizzbuzz(10)).toBe(false);
  expect(isFizzbuzz(15)).toBe(true);
  expect(isFizzbuzz(30)).toBe(true);
  expect(isFizzbuzz(45)).toBe(true);
});

test('toFizzbuzz - converts multiples of fifteen to "FizzBuzz"', () => {
  expect(toFizzbuzz(15)).toBe("FizzBuzz");
  expect(toFizzbuzz(30)).toBe("FizzBuzz");
  expect(toFizzbuzz(153015)).toBe("FizzBuzz");
});

test('toFizzbuzz - converts multiples of three to "Fizz"', () => {
  expect(toFizzbuzz(3)).toBe("Fizz");
  expect(toFizzbuzz(9)).toBe("Fizz");
  expect(toFizzbuzz(30003)).toBe("Fizz");
});

test('toFizzbuzz - converts multiples of five to "Buzz"', () => {
  expect(toFizzbuzz(5)).toBe("Buzz");
  expect(toFizzbuzz(50)).toBe("Buzz");
  expect(toFizzbuzz(50005)).toBe("Buzz");
});

test("toFizzbuzz - returns the number if it isn't a multiple or 3 or 5", () => {
  expect(toFizzbuzz(1)).toBe(1);
  expect(toFizzbuzz(4)).toBe(4);
  expect(toFizzbuzz(98)).toBe(98);
});
