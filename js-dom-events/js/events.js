console.log('this is separate JS file');
//  option:1 directly set on the HTML element

// option: 2. add onclick function
// IMPORTANT: WE will use this
function makeRed() {
  document.body.style.backgroundColor = 'red';
}

//  option: 3 add onclick function
const makeBlueButton = document.getElementById('blue-btn');
// console.log(makeBlueButton);
makeBlueButton.onclick = makeBlue;

function makeBlue() {
  document.body.style.backgroundColor = 'blue';
}
//  option 3: another onclick function [use this sometime]
const purpleButton = document.getElementById('purple-btn');
// console.log(purpleButton);
purpleButton.onclick = function makePurple() {
  document.body.style.backgroundColor = 'purple';
};

// option: 4 addEventListener
const PinkButton = document.getElementById('pink-btn');
// console.log(makePink);
PinkButton.addEventListener('click', makePink);

function makePink() {
  document.body.style.backgroundColor = 'pink';
}

// option: 4 another:
const tomatoButton = document.getElementById('tomato-btn');
// console.log(tomatoButton);
tomatoButton.addEventListener('click', function makeTomato() {
  document.body.style.backgroundColor = 'tomato';
});

// option: 4  final: [we will use this]
// IMPORTANT:
const makeGoldenRod = document.getElementById('goldenrod');
// makeGoldenRod.addEventListener('click', function () {});
makeGoldenRod.addEventListener('click', function () {
  document.body.style.backgroundColor = 'goldenrod';
});
