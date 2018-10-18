// Exercise 02 - Word Front
// Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length.
// Examples:
// wordsFront(["a", "b", "c", "d"], 1) → ["a"]
// wordsFront(["a", "b", "c", "d"], 2) → ["a", "b"]
// wordsFront(["a", "b", "c", "d"], 3) → ["a", "b", "c"]

// Example array and given N strings
const exampleArray02 = ["a", "b", "c", "d"];
const exampleFirstStringsN = 3;

function wordsFront(array, stringsN) {
  let newArray = array.slice(0, stringsN);
  return newArray
}

console.log("Exercise 02 - Word Front");
console.log("Given an array of strings, return a new array containing the first N strings. N will be in the range 1..length");
console.log(`Example array: [${exampleArray02}]`);
console.log(`Example first N strings: ${exampleFirstStringsN}`);
console.log(`Result: [ ${wordsFront(exampleArray02, exampleFirstStringsN)} ]`);
console.log("=======================================================================================");
