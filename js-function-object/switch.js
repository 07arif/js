const color = "yellow";

// if, else if check one by one
if (color === "green") {
  console.log("You Have Green Card");
} else if (color === "red") {
  console.log("Your have a red card");
} else if (color === "blue") {
  console.log("YOu have a Blue card");
} else if (color === "yellow") {
  console.log("YOu have a Yellow card");
} else {
  console.log("You do not have any color");
}

// switch directly goes to the case
switch (color) {
  case "green":
    console.log("I hava a green Card");
    break;
  case "red":
    console.log("I hava a Red card");
    break;
  case "yellow":
    console.log("I hava a yellow card");
    break;
  case "white":
    console.log("I have a White card");
    break;
}
