function fizzbuzz(endNumber: number): (string | number)[] {
  const sequence = [];
  for (let n = 1; n <= endNumber; n++) {
    const nextFizzbuzzEntry = toFizzbuzz(n);
    sequence.push(nextFizzbuzzEntry);
  }
  return sequence;
}

function isFizz(n: number): boolean {
  return n % 3 === 0;
}

// // Demonstration of how isFizz could be written as an explicit arrow function:
// const isFizz = (n: number): boolean => {
//   return n % 3 === 0
// }

// // Demonstration of how isFizz could be written as an implicit arrow function:
// const isFizz = (n: number): boolean => n % 3 === 0

function isBuzz(n: number): boolean {
  return n % 5 === 0;
}

function isFizzbuzz(n: number): boolean {
  return isFizz(n) && isBuzz(n);
}

function toFizzbuzz(n: number): number | string {
  if (isFizzbuzz(n)) {
    return "FizzBuzz";
  } else if (isFizz(n)) {
    return "Fizz";
  } else if (isBuzz(n)) {
    return "Buzz";
  } else {
    return n;
  }
}

// Export the functions so that they can be used in ./fizzbuzz.test.ts
// (standard TS exporting syntax)
export { fizzbuzz, isFizz, isBuzz, isFizzbuzz, toFizzbuzz };
