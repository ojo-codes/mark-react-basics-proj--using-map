function shoutStrings(strings: string[]): string[] {
  return strings.map(shoutString);
}

function shoutString(str: string): string {
  return `${str.toUpperCase()}!!!`;
}

export { shoutStrings, shoutString };
