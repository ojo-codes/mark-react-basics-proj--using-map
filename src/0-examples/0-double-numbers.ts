function doubleNumbers(numbers: number[]) {
  return numbers.map(doubleNumber);
}

function doubleNumber(n: number) {
  return n * 2;
}

export { doubleNumbers, doubleNumber };
