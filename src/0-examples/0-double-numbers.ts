function doubleNumbers(numbers: number[]): number[] {
  return numbers.map(doubleNumber);
}

function doubleNumber(n: number): number {
  return n * 2;
}

// const doubleNumber = (n: number): number => n * 2;

// function doubleNumbers(numbers: number[]): number[] {
//   return numbers.map((n: number) => n * 2);
//   // return numbers.map((n) => n * 2)
// }

export { doubleNumbers, doubleNumber };
