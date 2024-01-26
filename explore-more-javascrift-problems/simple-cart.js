const shoppingCart = [
  { name: "shoe", price: 1200 },
  { name: "shirt", price: 500 },
  { name: "pant", price: 1000 },
  { name: "belt", price: 100 },
];

function totalCost(products) {
  let sum = 0;
  for (let i = 0; i < products.length; i++) {
    // console.log(i);
    const product = products[i];
    sum = sum + product.price;
    console.log(product);
  }
  return sum;
}

const expense = totalCost(shoppingCart);
console.log("Total expense today:", expense);
