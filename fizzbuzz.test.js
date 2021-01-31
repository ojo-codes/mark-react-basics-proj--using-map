const { fizzbuzz, toFizzbuzz } = require("./fizzbuzz");

test("fizzbuzz - returns an array representing the fizzbuzz sequence up to that number", () => {
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

test('toFizzbuzz - converts multiples of fifteen to "FizzBuzz"', () => {
  expect(toFizzbuzz(15)).toBe("FizzBuzz");
  expect(toFizzbuzz(30)).toBe("FizzBuzz");
  expect(toFizzbuzz(153015)).toBe("FizzBuzz");
});

test('toFizzbuzz - converts multiples of three to "Fizz"', () => {
  expect(toFizzbuzz(3)).toBe("Fizz");
  expect(toFizzbuzz(9)).toBe("Fizz");
  expect(toFizzbuzz(30000)).toBe("Fizz");
});

test('toFizzbuzz - converts multiples of five to "Buzz"', () => {
  expect(toFizzbuzz(5)).toBe("Buzz");
  expect(toFizzbuzz(50)).toBe("Buzz");
  expect(toFizzbuzz(50005)).toBe("Buzz");
});
