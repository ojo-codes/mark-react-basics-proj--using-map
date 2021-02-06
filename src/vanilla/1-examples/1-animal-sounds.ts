interface AnimalSound {
  animal: string;
  sound: string;
}

export function animalSounds(arr: AnimalSound[]): string[] {
  return arr.map((element) => `A ${element.animal} goes: "${element.sound}!"`);
}
