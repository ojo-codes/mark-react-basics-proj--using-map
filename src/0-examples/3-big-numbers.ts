function bigNumbers(numbers: number[]): boolean[] {
  return numbers.map(isBigNumber);
}

function isBigNumber(n: number): boolean {
  return n >= 100;
}

// const bigNumber = (numOrString: string | number): string =>
//   `${numOrString}`;

// function bigNumbers(numOrStringArr: (string | number)[]): string[] {
//   return numOrStringArr.map((numOrString: string | number) => `${numOrString}`);
//   // return numOrStringArr.map((numOrString) => `${numOrString}`);
// }

export { bigNumbers, isBigNumber };
