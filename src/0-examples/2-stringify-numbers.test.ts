import { stringifyNumber, stringifyNumbers } from "./2-stringify-numbers";

describe("stringifyNumber - takes the string or number representation of a number, and returns it as a string", () => {
  test("converting numbers to strings", () => {
    expect(stringifyNumber(4)).toBe("4");
    expect(stringifyNumber(4.5)).toBe("4.5");
    expect(stringifyNumber(-12)).toBe("-12");
  });

  test("Preserving strings", () => {
    expect(stringifyNumber("4")).toBe("4");
    expect(stringifyNumber("4.5")).toBe("4.5");
    expect(stringifyNumber("-12")).toBe("-12");
  });
});

test("stringifyNumbers - takes an array of strings or numbers, and returns an array of stringified numbers", () => {
  expect(stringifyNumbers([4, 4.5, -12])).toStrictEqual(["4", "4.5", "-12"]);
  expect(stringifyNumbers([1, 2, 3, 4, 5, 6])).toStrictEqual([
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
  ]);
});
