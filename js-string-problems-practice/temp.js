let first = 5;
let second = 7;
console.log(first, second);

/*
This is wrong approach
first = second;
second = first;
console.log(first, second);

*/

/*
// approach : 1
let temp = first;
first = second;
second = temp;

console.log(first, second);
 */

// Approach: 2 ----Destructuring
[first, second] = [second, first];
console.log(first, second);
