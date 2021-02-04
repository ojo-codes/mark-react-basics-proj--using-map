function shoutStrings(strings: string[]): string[] {
  return strings.map(shoutString);
}

function shoutString(str: string): string {
  return `${str.toUpperCase()}!!!`;
}

// const shoutString = (str: string): string => `${str.toUpperCase()}!!!`;

// function shoutStrings(strings: string): string[] {
//   return strings.map((str: string) => `${str.toUpperCase()}!!!`);
//   // return strings.map((str) => `${str.toUpperCase()}!!!`)
// }

export { shoutStrings, shoutString };
