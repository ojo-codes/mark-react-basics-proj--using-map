import { whisperString, whisperStrings } from "./1-whisper-strings";

test("whisperString - take a single string, lowercases it and prepends a 'shh' message", () => {
  expect(whisperString("Hello World")).toBe("shh: hello world");
  expect(whisperString("AggRO CaSINggg")).toBe("shh: aggro casinggg");
  expect(whisperString("the game is AFOOT")).toBe("shh: the game is afoot");
});

test("whisperStrings - takes an array of strings, lowercases them and prepends a 'shh' message to each", () => {
  expect(
    whisperStrings(["Hello World", "AggRO CaSINggg", "the game is AFOOT"])
  ).toStrictEqual([
    "shh: hello world",
    "shh: aggro casinggg",
    "shh: the game is afoot",
  ]);
});
