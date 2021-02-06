function getEvenNumbers(numbers: number[]): number[] {
    return numbers.filter(isEven);
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

// const isEven = (n: number): boolean => n % 2 === 0;

// function getEvenNumbers(numbers: number[]): number[] {
//     return numbers.filter((n: number) => n % 2 === 0);
//     // return numbers.filter((n) => n % 2 === 0);
// }

export { getEvenNumbers, isEven};