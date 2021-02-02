function randomBoolean() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return false;
  } else {
    return "true";
  }
}

const boolean = randomBoolean();
console.log(boolean, typeof boolean);
