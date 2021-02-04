import { shoutString, shoutStrings } from "./1-shout-strings";

test("shoutString - take a single string, capitalises it and adds three exclamation marks", () => {
  expect(shoutString("hello world")).toBe("HELLO WORLD!!!");
  expect(shoutString("I'm learning about map")).toBe(
    "I'M LEARNING ABOUT MAP!!!"
  );
  expect(shoutString("and I love it!")).toBe("AND I LOVE IT!!!!");
});

test("shoutStrings - takes an array of lowercase strings, and capitalises each of them and adds exclamation marks", () => {
  expect(
    shoutStrings(["hello world", "I'm learning about map", "and I love it!"])
  ).toStrictEqual([
    "HELLO WORLD!!!",
    "I'M LEARNING ABOUT MAP!!!",
    "AND I LOVE IT!!!!",
  ]);

  expect(
    shoutStrings([
      "roses are red",
      "violets are blue",
      "this poem is in caps",
      "and has exclamation marks too",
    ])
  ).toStrictEqual([
    "ROSES ARE RED!!!",
    "VIOLETS ARE BLUE!!!",
    "THIS POEM IS IN CAPS!!!",
    "AND HAS EXCLAMATION MARKS TOO!!!",
  ]);
});
