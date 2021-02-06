import { isEven, getEvenNumbers } from "./1-even-numbers";

test("isEven - checks if a number is even", () => {
    expect(isEven(-5)).toBe(false);
    expect(isEven(-6)).toBe(true);
    expect(isEven(0.5)).toBe(false);
    expect(isEven(5)).toBe(false);
    expect(isEven(6)).toBe(true);
});

test("getEvenNumbers - takes an array of numbers and returns only those which are even", () => {
    expect(getEvenNumbers([1, 1, 3])).toStrictEqual([]);
    expect(getEvenNumbers([5, 6, 7])).toStrictEqual([6]);
    expect(getEvenNumbers([4, 2, 6])).toStrictEqual([4, 2, 6]);
});
