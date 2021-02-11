function whisperStrings(strs: string[]): string[] {
  return strs.map(whisperString);
}

function whisperString(str: string): string {
  return `shh: ${str.toLowerCase()}`;
}

export { whisperStrings, whisperString };
