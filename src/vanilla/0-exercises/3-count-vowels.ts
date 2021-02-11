import { count } from "console";

function countVowelsInEach(strs: string[]): number[] {
  return strs.map(countVowels);
};

function countVowels(str: string): number {
  let count = 0;
  for(let i=0; i < str.length; i++) {
    if (str[i] == "a" || str[i] == "e" || str[i] == "i" || str[i]== "o" || str[i] == "u" ) {
      count++;
    };
  };
    return count;
};

export { countVowelsInEach, countVowels };
