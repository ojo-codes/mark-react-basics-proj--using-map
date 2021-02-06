import { applyCasing, IStringCasing } from "./3-apply-casing";

describe("applyCasing - maps array of objects to strings with specified casing", () => {
  test("casing: lower", () => {
    const input: IStringCasing[] = [
      { string: "Hello world!", casing: "lower" },
      { string: "I am SO excited", casing: "lower" },
    ];
    expect(applyCasing(input)).toStrictEqual([
      "hello world!",
      "i am so excited",
    ]);
  });

  test("casing: upper", () => {
    const input: IStringCasing[] = [
      { string: "Hello world!", casing: "upper" },
      { string: "I am SO excited", casing: "upper" },
    ];
    expect(applyCasing(input)).toStrictEqual([
      "HELLO WORLD!",
      "I AM SO EXCITED",
    ]);
  });

  test("casing: preserve", () => {
    const input: IStringCasing[] = [
      { string: "Hello world!", casing: "preserve" },
      { string: "I am SO excited", casing: "preserve" },
    ];
    expect(applyCasing(input)).toStrictEqual([
      "Hello world!",
      "I am SO excited",
    ]);
  });

  test("assorted casing: upper, lower or preserve", () => {
    const input: IStringCasing[] = [
      { string: "Hello world!", casing: "lower" },
      { string: "I am SO excited", casing: "preserve" },
      { string: "I just got some AMAZING news", casing: "upper" },
      { string: "AnD It Is GoInG tO bLoW yOuR mInD", casing: "preserve" },
    ];
    expect(applyCasing(input)).toStrictEqual([
      "hello world!",
      "I am SO excited",
      "I JUST GOT SOME AMAZING NEWS",
      "AnD It Is GoInG tO bLoW yOuR mInD",
    ]);
  });
});
