function findLongestString(arrOfStrings: string[]): string {
  let largestStringSoFar = arrOfStrings[0];
  for (let string of arrOfStrings) {
    if (string.length > largestStringSoFar.length) {
      largestStringSoFar = string;
    }
  }

  // won't compile if you un-comment the below
  // return largestStringSoFar.length

  return largestStringSoFar;
}

console.log(findLongestString(["a", "bb", "c"]));
console.log(findLongestString(["hello world", "hi world"]));

/* below examples won't compile */
// console.log(findLongestString(["hi", 11]));
// console.log(findLongestString(true))
