var shoppingCart = {
  books: 3,
  sunglass: 2,
  keyboard: 5,
  mouse: 2,
  pen: 3,
};

// when you know the specific property name, use dot notation to get
// the property value
var penCount = shoppingCart.pen;

// alternative System
// when you know the specific property name, use
var penCount2 = shoppingCart["pen"];

// array akare pete hole:
var properties = Object.keys(shoppingCart);
var properties2 = Object.values(shoppingCart);

//
console.log(shoppingCart);
console.log(penCount);
console.log(penCount2);
// array
console.log(properties);
console.log(properties2);
//
//
var propertyName = "mouse";
var propertyValue = shoppingCart[propertyName];
console.log(propertyName, propertyValue);

// set property values
shoppingCart.mouse = 15;
console.log(shoppingCart);
shoppingCart[propertyName] = 98;
console.log(shoppingCart);
