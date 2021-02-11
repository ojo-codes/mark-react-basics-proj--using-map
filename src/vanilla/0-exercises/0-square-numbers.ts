function squareNumbers(numbers: number[]): number[] {
  return numbers.map(squareNumber);
}

function squareNumber(n: number): number {
  return n*n;
}



export { squareNumbers, squareNumber };