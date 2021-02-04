function doubleNumbers(numbers: number[]): number[] {
  return numbers.map(doubleNumber);
}

function doubleNumber(n: number): number {
  return n * 2;
}

// const doubleNumber = (n: number): number => n * 2;

export { doubleNumbers, doubleNumber };
