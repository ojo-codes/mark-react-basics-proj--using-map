interface inputObject {
  numbers: number[],
  operation: string,
};

function applyOperations(arrayOperations: inputObject[]): number[] {
  return arrayOperations.map(({numbers, operation}: inputObject): number => {
    if (operation === "add") {
      return numbers[0] + numbers[1];
    } else if (operation === "subtract") {
      return numbers[0] - numbers[1];
    } else {
      return numbers[0] * numbers[1];
    };
  });
}


// const operation = ({numbers, operation}: inputObject): number => {
//   if (operation === "add") {
//     return numbers[0] + numbers[1];
//   } else if (operation === "subtract") {
//     return numbers[0] - numbers[1];
//   } else {
//     return numbers[0] * numbers[1];
//   };
// };


export { applyOperations };
