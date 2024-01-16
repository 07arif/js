/*
 ### EvenNumber == vagshes = 0 hobe.

console.log(4 /2); //vagfol
console.log(4 % 2);  //vagsesh
*/
// //even:
// console.log(88 % 2);
// console.log(44 % 2);
// console.log(48 % 2);
// console.log(54 % 2);
// // odd:
// console.log(23 % 2);
// console.log(33 % 2);
// console.log(27 % 2);
// console.log(29 % 2);

function isEven(number) {
  const remainder = number % 2;
  if (remainder === 0) {
    return true;
  } else {
    return false;
  }
}

const myNumberIsEven = isEven(303);
console.log("myNumber:", myNumberIsEven);

const herNumber = isEven(400);
console.log("Her Number:", herNumber);
