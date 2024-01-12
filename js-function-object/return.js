function add(number1, number2) {
  //   console.log(number1, number2);
  var sum = number1 + number2;
  //####### return er por ja lekha thakbe setar value Return hesabe pawa jabe.
  //   console.log(sum);
  return sum;
}

// add(14, 115);
var total = add(40, 50);
// console.log("total:", total);

function bringSingara(money) {
  var singaraPrice = 10;
  var quantity = money / singaraPrice;
  return quantity;
}

var myTaka = 150;
var singaras = bringSingara(myTaka);
console.log(singaras);

console.log("Eating singras:", singaras);
