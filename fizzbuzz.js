function fizzbuzz(endNumber) {
  // Note: an array map would be preferred here, but we'll look at maps later
  //  (although you could investigate JS array maps yourself)
  let sequence = [];
  for (let n = 1; n <= endNumber; n++) {
    let nextFizzbuzzEntry = toFizzbuzz(n);
    sequence.push(nextFizzbuzzEntry);
  }
  return sequence;
}

function isFizz(n) {
  return n % 3 === 0;
}

function isBuzz(n) {
  return n % 5 === 0;
}

function isFizzbuzz(n) {
  return isFizz(n) && isBuzz(n);
}

function toFizzbuzz(n) {
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

// Export the functions so that they can be used in ./fizzbuzz.test.js
module.exports = {
  fizzbuzz,
  isFizz,
  isBuzz,
  isFizzbuzz,
  toFizzbuzz,
};
