// array vs object
var shoppingItems = ["books", "sunglass", " shoes", "pen"];
var friendsAge = [12, 13, 14, 36, 45, 70];
var friendsAge1 = {
  karim: 12,
  rahim: 34,
  gabbar: 45,
  nanna: 45,
};

var shoppingCart = {
  books: 3,
  sunglass: 2,
  keyboard: 5,
  mouse: 2,
  pen: 3,
  shoes: 5,
};

const keys = Object.keys(shoppingCart);
const value = Object.values(shoppingCart);
console.log(keys);
console.log(value);

// way to check property and value with for loop:
for (var i = 0; i < keys.length; i++) {
  var PropertyName = keys[i];
  var propertyValue = shoppingCart[PropertyName];
  //   console.log(PropertyName, propertyValue);
}

// for in loop: easy way
for (var PropertyName in shoppingCart) {
  const value = shoppingCart[PropertyName];
  console.log(PropertyName, value);
}
