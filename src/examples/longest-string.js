function findLongestString(arrOfStrings) {
  let largestStringSoFar = arrOfStrings[0];
  for (let string of arrOfStrings) {
    if (string.length > largestStringSoFar.length) {
      largestStringSoFar = string;
    }
  }

  // lets you accidentally return length if you un-comment the below
  // return largestStringSoFar.length

  return largestStringSoFar;
}

/* sensible examples */
console.log(findLongestString(["a", "bb", "c"]));
console.log(findLongestString(["hello world", "hi world"]));

/* silly examples that JS permits */
console.log(findLongestString(["hi", 11]));
console.log(findLongestString(true));
