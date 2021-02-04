function doubleNumber(n: number) {
  return n * 2;
}

function doubleNumbers(numbers: number[]) {
  return numbers.map(doubleNumber);
}

export { doubleNumbers, doubleNumber };
