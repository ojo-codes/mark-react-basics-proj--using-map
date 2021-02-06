function getShortStrings(strings: string[]): string[] {
    return strings.filter(isShort);
}

function isShort(str: string): boolean {
    return str.length <= 5;
}

// const isShort = (str: string): boolean => str.length <= 5;

// function getShortStrings(strings: string[]): string[] {
//     return strings.filter((str: string) => str.length <= 5);
//     // return strings.filter((str) => str.length <= 5);
// }

export { getShortStrings, isShort};