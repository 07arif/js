var destinations = ["sajek", "coxbazar", "nepal", "bali", "sp"];

console.log(destinations);
// 3rd index a k ache jante:
console.log(destinations[2]);

// 3 rd index er man change korar jonno:
destinations[2] = "Bopal";
console.log(destinations);

// Array  er seshe add korar junno:
destinations.push("Buthan");
console.log(destinations);

// Array er seser element remove korar jonno:
var removeElement = destinations.pop();
console.log(removeElement);
console.log(destinations);

//Array er shorote Add korar jonno:
destinations.unshift("Bandorban");
console.log(destinations);

// array er shoro theke remove korar jonno:
destinations.shift();
console.log(destinations);

/*
######## Conditionals
<, >, ==, !=, <=, >=
&&, ||
*/
var Jobs = ["bus", "banker", "bcs", "rickshaw driver"];

if (Jobs[2] === "bcs") {
  console.log("Bcs dimo");
} else if (Jobs[2] === "banker") {
  console.log("Banker homo");
} else {
  console.log("basay thakmo");
}
