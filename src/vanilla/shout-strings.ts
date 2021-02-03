function shoutString(str: string) {
  return `${str.toUpperCase()}!!!`;
}

function shoutStrings(strings: string[]) {
  return strings.map(shoutString);
}

export { shoutStrings, shoutString };
