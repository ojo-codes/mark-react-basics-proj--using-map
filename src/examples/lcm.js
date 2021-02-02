// N.B. the implementation of this algorithm is not important

function findLowestCommonMultiple(numOne, numTwo) {
  let min = numOne > numTwo ? numOne : numTwo;

  while (true) {
    if (min % numOne == 0 && min % numTwo == 0) {
      return min;
    }
    min++;
  }
}

console.log(findLowestCommonMultiple(3, 5)); // => 15
console.log(findLowestCommonMultiple(3, 6)); // => 6
console.log(findLowestCommonMultiple(6, 15)); // => 30

console.log(findLowestCommonMultiple(true, 12)); // => 12? ok
console.log(findLowestCommonMultiple("me", "you", "blue")); // => gets stuck in a while loop
console.log(findLowestCommonMultiple({ firstName: "Richard", lastName: "Ng" }));
