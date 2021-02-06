import { isFiveOrGreater, numbersFiveOrGreater } from "./0-five-or-greater";

test("isFiveOrGreater - checks if a number is five or greater", () => {
    expect(isFiveOrGreater(-5)).toBe(false);
    expect(isFiveOrGreater(1)).toBe(false);
    expect(isFiveOrGreater(0.5)).toBe(false);
    expect(isFiveOrGreater(5)).toBe(true);
    expect(isFiveOrGreater(5.5)).toBe(true);
    expect(isFiveOrGreater(10)).toBe(true);
});

test("numbersFiveOrGreater - takes an array of numbers and returns only those which are greater than or equal to five", () => {
    expect(numbersFiveOrGreater([1, 2, 3])).toStrictEqual([]);
    expect(numbersFiveOrGreater([5, 6, 7])).toStrictEqual([5, 6, 7]);
    expect(numbersFiveOrGreater([1, 2, 6])).toStrictEqual([6]);
});
