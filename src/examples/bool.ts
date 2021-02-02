function randomBoolean(): boolean {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    return false;
  } else {
    // TS will complain if you uncomment the below
    // return "true";
    return true;
  }
}

const boolean = randomBoolean();
console.log(boolean, typeof boolean);
