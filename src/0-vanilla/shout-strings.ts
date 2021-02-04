function shoutString(str: string): string {
  return `${str.toUpperCase()}!!!`;
}

function shoutStrings(strings: string[]): string[] {
  return strings.map(shoutString);
}

export { shoutStrings, shoutString };
