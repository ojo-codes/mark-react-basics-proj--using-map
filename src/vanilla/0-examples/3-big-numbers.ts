function bigNumbers(numbers: number[]): boolean[] {
  return numbers.map(isBigNumber);
}

function isBigNumber(n: number): boolean {
  return n >= 100;
}

// const isBigNumber = (n: number): boolean => n >= 100

// function bigNumbers(numbers: number[]): boolean[] {
//   return numbers.map((n: number) => n >= 100)
//   // return numbers.map(n => n >= 100)
// }

export { bigNumbers, isBigNumber };
