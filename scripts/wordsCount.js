// Exercise 01 - Word Count
// Given an array of strings, return the count of the number of strings with the given length.
// Examples:
// wordsCount(["a", "bb", "b", "ccc"], 1) → 2
// wordsCount(["a", "bb", "b", "ccc"], 3) → 1
// wordsCount(["a", "bb", "b", "ccc"], 4) → 0

// Example array and given string length
const exampleArray01 = ["a", "bb", "b", "ccc", "dddd", "ee", "ff", "ggg"];
const exampleLength = 2;

function wordCount(array, length) {
  const createArrayOfStringsLength = array => {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
      newArray.push(array[i].length);
    }
    return newArray;
  };

  const compareStringsLengths = (array, length) => {
    let newArray = array.filter(item => item === length);
    return newArray
  };

  const arrayOfStringsLengths = createArrayOfStringsLength(array);
  const arrayOfComparedStringsLengths = compareStringsLengths(arrayOfStringsLengths, length);

  return arrayOfComparedStringsLengths.length;
}
console.log("Exercise 01 - Words Count");
console.log("Given an array of strings, return the count of the number of strings with the given length");
console.log(`Example array: [${exampleArray01}]`);
console.log(`Example string length: ${exampleLength}`);
console.log(`Result: ${wordCount(exampleArray01, exampleLength)}`);
console.log("=======================================================================================");