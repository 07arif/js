// parameter er nam dite hobe
function bringSingara(money) {
  console.log("mama singara den");
  console.log(money);
}
// parameter er value dete hobe
// bringSingara(100);

// parameter er nam dite hobe
function bringSomosa(money) {
  console.log("Taka disen:", money);
  console.log("ai nen singara");
}
// parameter er value dete hobe/ perameter er value variable a diye variable er nam dile hbe.
var taka = 450;
// bringSomosa(taka);

// multi parameter:
function add(num1, num2) {
  console.log("going to add:", num1, num2);
}
// parameter er value na dile default hisabe undifined dehabe.
// add();
// add(50);

// add(609, 89);

function sum(a, b, c, d, e, f) {
  console.log(a, b, c, d, e, f);
  var sum = a + b + c + d + e + f;
  console.log(sum);
}

// sum();
// sum(1, 2, 3, 4, 5);

sum(1, 2, 3, 4, 5, 6, 7);
