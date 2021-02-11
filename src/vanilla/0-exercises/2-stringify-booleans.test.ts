import { stringifyBoolean, stringifyBooleans } from "./2-stringify-booleans";

describe("stringifyBoolean - takes the string or Boolean representation of a Boolean, and returns it as a string", () => {
  xtest("converting Booleans to strings", () => {
    expect(stringifyBoolean(true)).toBe("T");
    expect(stringifyBoolean(false)).toBe("F");
  });

  xtest("Preserving strings", () => {
    expect(stringifyBoolean("hi")).toBe("hi");
    expect(stringifyBoolean("true")).toBe("true");
    expect(stringifyBoolean("false")).toBe("false");
  });
});

xtest("stringifyBooleans - takes an array of strings or Booleans, and returns an array of stringified Booleans", () => {
  expect(
    stringifyBooleans(["hello world", true, "true", false, "false"])
  ).toStrictEqual(["hello world", "true", "true", "false", "false"]);
});
