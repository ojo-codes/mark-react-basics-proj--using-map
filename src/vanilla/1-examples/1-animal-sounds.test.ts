import { animalSounds } from "./1-animal-sounds";

test("animalSounds - maps objects to descriptive sentences about animals and their noises", () => {
  const input = [
    { animal: "cat", sound: "meow" },
    { animal: "dog", sound: "woof" },
    { animal: "sheep", sound: "baa" },
    { animal: "robot", sound: "boop de boop" },
  ];
  expect(animalSounds(input)).toStrictEqual([
    'A cat goes: "meow!"',
    'A dog goes: "woof!"',
    'A sheep goes: "baa!"',
    'A robot goes: "boop de boop!"',
  ]);
});
