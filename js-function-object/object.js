var student = {
  id: 115,
  name: "solaiman khan",
  class: 9,
  marks: 98,
};

var mobile = {
  brand: "samsung",
  price: 19000,
  Storage: "64gb",
  camera: "7Mp",
};

var computer = {
  brand: "hp",
  color: "silver",
  processor: "i5",
  price: 2300,
};
// before changed price value
console.log(computer.price);

// value changed
computer.price = 4000;

// after changed price value
console.log(computer.price);

console.log(computer);
