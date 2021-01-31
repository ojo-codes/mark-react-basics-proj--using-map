function fizzbuzz(sequenceStop) {}

function isFizz(n) {
  return n % 3 === 0;
}

function isBuzz(n) {
  return n % 5 === 0;
}

function isFizzbuzz(n) {
  return isFizz(n) && isBuzz(n);
}

function toFizzbuzz(n) {}

// Export the functions so that they can be used in ./fizzbuzz.test.js
module.exports = {
  fizzbuzz,
  isFizz,
  isBuzz,
  isFizzbuzz,
  toFizzbuzz,
};
