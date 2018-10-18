// Exercise 03 - Green Ticket
// You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.
// Examples:
// greenTicket(1, 2, 3) → 0
// greenTicket(2, 2, 2) → 20
// greenTicket(1, 1, 2) → 10

// Example integers:
const a = 1;
const b = 3;
const c = 3;

function greenTicket(a, b, c) {
  if (a === b && b === c) {
    return 20
  }
  if (a === b ^ b === c ^ a === c) {
    return 10
  }
  return 0
}

console.log("Exercise 03 - Green Ticket");
console.log("You have a green lottery ticket, with ints a, b, and c on it. If the numbers are all different from each other, the result is 0. If all of the numbers are the same, the result is 20. If two of the numbers are the same, the result is 10.");
console.log(`Example integers: a = ${a}, b = ${b} and c = ${c}`);
console.log(`Result: ${greenTicket(a, b, c)}`);
console.log("=======================================================================================");
