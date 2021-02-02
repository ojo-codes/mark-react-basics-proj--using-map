// N.B. the implementation of this algorithm is not important

function findLowestCommonMultiple(numOne: number, numTwo: number) {
  let min = numOne > numTwo ? numOne : numTwo;

  // while loop
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

/* If you uncomment any of these silly examples, TypeScript will stop you running the code */
// console.log(findLowestCommonMultiple(true, 12));
// console.log(findLowestCommonMultiple("me", "you", "blue"));
// console.log(findLowestCommonMultiple({ firstName: "Richard", lastName: "Ng" }));
