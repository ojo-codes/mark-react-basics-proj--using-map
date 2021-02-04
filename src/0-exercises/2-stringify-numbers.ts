function stringifyNumbers(numOrStringArr: (string | number)[]): string[] {
  return numOrStringArr.map(stringifyNumber);
}

function stringifyNumber(numOrString: string | number): string {
  return `${numOrString}`;
}

export { stringifyNumbers, stringifyNumber };
