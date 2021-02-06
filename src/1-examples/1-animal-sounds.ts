interface AnimalSound {
  animal: string;
  sound: string;
}

function animalSounds(arr: AnimalSound[]): string[] {
  return arr.map((element) => `A ${element.animal} goes: "${element.sound}!"`);
}

export { animalSounds };
