function stringifyNumbers(numOrStringArr: (string | number)[]): string[] {
  return numOrStringArr.map(stringifyNumber);
}

function stringifyNumber(numOrString: string | number): string {
  return `${numOrString}`;
}

// const stringifyNumber = (numOrString: string | number): string =>
//   `${numOrString}`;

// function stringifyNumbers(numOrStringArr: (string | number)[]): string[] {
//   return numOrStringArr.map((numOrString: string | number) => `${numOrString}`);
//   // return numOrStringArr.map((numOrString) => `${numOrString}`);
// }

export { stringifyNumbers, stringifyNumber };
