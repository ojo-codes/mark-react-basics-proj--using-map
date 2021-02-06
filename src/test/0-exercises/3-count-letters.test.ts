import { countVowels, countVowelsInEach } from "./3-count-vowels";

test("countVowels - counts the vowels in a string", () => {
  expect(countVowels("hello world!")).toBe(3);
  expect(countVowels("rhythm")).toBe(0);
  expect(countVowels("the quick brown fox jumps over the lazy dog")).toBe(11);
});

test("countVowelsInEach - takes an array of strings and counts the vowels in each of them", () => {
  expect(
    countVowelsInEach([
      "roses are red",
      "violets are blue",
      "some poems rhyme",
      "others don't",
    ])
  ).toStrictEqual([5, 7, 5, 3]);
});
