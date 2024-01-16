const userName = "lAlon1190";
const userInput = "lalon1190";

console.log(userName.toLowerCase());
console.log(userInput.toUpperCase());
console.log(userInput.toLocaleLowerCase());

if (userName === userInput.toLowerCase()) {
  console.log("valid user");
} else {
  console.log("Invalid user");
}
