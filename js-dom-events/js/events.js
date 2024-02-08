console.log("this is separate JS file");
//  option:1 directly set on the HTML element

// option: 2. add onclick function
function makeRed() {
  document.body.style.backgroundColor = "red";
}

//  option: 3 add onclick function
const makeBlueButton = document.getElementById("blue-btn");
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = "blue";
}
//  option 3: another
const purpleButton = document.getElementById("purple-btn");
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = "purple";
};
