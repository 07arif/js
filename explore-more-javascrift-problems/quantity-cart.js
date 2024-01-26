const shoppingCart = [
  { name: "shoe", price: 1200, quantity: 2 },
  { name: "shirt", price: 500, quantity: 6 },
  { name: "pant", price: 1000, quantity: 4 },
  { name: "belt", price: 100, quantity: 3 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    // console.log(i);
    const product = products[i];
    const productTotal = sum + product.price * product.quantity;
    // console.log(product);
    sum = sum + productTotal;
  }
  return sum;
}

const expense = totalCost(shoppingCart);
console.log("Total expense today:", expense);
