function fizzbuzz(endNumber: number): (string | number)[] {
  // Note: an array map would be preferred here, but we'll look at maps later
  //  (although you could investigate JS array maps yourself)
  let sequence = [];
  for (let n = 1; n <= endNumber; n = n + 1 /* n++ more common */) {
    // demoing variable declaration and assignment on separate lines below
    // although it'd be more typical in this case to do a one liner
    let nextFizzbuzzEntry;
    nextFizzbuzzEntry = toFizzbuzz(n);
    // let nextFizzbuzzEntry = toFizzbuzz(n) // <-- what we would normally do
    sequence.push(nextFizzbuzzEntry);
  }
  return sequence;
}

function isFizz(n: number): boolean {
  return n % 3 === 0;
}

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

/* Ignore the commented-out code below until Exercise 3 */
// let isBuzz = (n: number): boolean => {
//   return n % 5 === 0;
// }

/* Ignore the commented-out code below until Exercise 4 */
// let isBuzz = (n: number): boolean => n % 5 === 0;

// Export the functions so that they can be used in ./fizzbuzz.test.js
// (standard TS exporting syntax)
export { fizzbuzz, isFizz, isBuzz, isFizzbuzz, toFizzbuzz };
