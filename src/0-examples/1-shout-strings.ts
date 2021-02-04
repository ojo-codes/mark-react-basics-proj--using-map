function shoutStrings(strings: string[]): string[] {
  return strings.map(shoutString);
}

function shoutString(str: string): string {
  return `${str.toUpperCase()}!!!`;
}

// const shoutString = (str: string): string => `${str.toUpperCase()}!!!`;

export { shoutStrings, shoutString };
