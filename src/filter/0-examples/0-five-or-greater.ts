function numbersFiveOrGreater(numbers: number[]): number[] {
    return numbers.filter(isFiveOrGreater);
}

function isFiveOrGreater(n: number): boolean {
    return n >= 5;
}

// function isFiveOrGreater(n: number): boolean => n >= 5;

// function numbersFiveOrGreater(numbers: number[]): number[] {
//     return numbers.filter((n: number) => n >= 5);
//     // return numbers.filter((n) => n >= 5);
// }

export { numbersFiveOrGreater, isFiveOrGreater};