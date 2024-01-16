/*
let sum = 0;
for (i = 1; i < 7; i++) {
  sum = sum + i;
  console.log(i, sum);
}
 */

function sumOfNumber(number) {
  let sum = 0;
  for (i = 0; i < number; i++) {
    sum = sum + i;
    console.log(sum);
  }
  return sum;
}
let number = 10;
sumOfNumber(number);
