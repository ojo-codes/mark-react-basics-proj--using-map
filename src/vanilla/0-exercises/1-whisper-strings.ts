// takes an array of strings and lowercases them + prefixes "shh"
function whisperStrings(strs: string[]): string[] {
  return strs.map(whisperString);
}

// takes a string and lowercases it + prefixes it with "shh"
function whisperString(str: string): string {
  return `shh: ${str.toLowerCase()}`;
}

export { whisperStrings, whisperString };
