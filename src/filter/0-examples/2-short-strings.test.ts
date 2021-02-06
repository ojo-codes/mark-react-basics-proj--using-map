import { isShort, getShortStrings } from "./2-short-strings";

test("isShort - checks if a number is even", () => {
    expect(isShort("hello")).toBe(true);
    expect(isShort("a")).toBe(true);
    expect(isShort("")).toBe(true);
    expect(isShort("how are you?")).toBe(false);
    expect(isShort("longgggggg")).toBe(false);
});

test("getShortStrings - takes an array of numbers and returns only those which are even", () => {
    expect(getShortStrings(["hello", "a", ""])).toStrictEqual(["hello", "a", ""]);
    expect(getShortStrings(["hello"])).toStrictEqual(["hello"]);
    expect(getShortStrings(["hello", "how are you?"])).toStrictEqual(["hello"]);
    expect(getShortStrings(["how are you?", "longgggg"])).toStrictEqual([])
});
