function stringifyNumber(numOrString: string | number): string {
  return `${numOrString}`;
}

function stringifyNumbers(numOrStringArr: (string | number)[]): string[] {
  return numOrStringArr.map(stringifyNumber);
}

export { stringifyNumbers, stringifyNumber };
