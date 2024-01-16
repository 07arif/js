/*
let height = 75; // this could be any number of inches
let feet = Math.floor(height / 12);
let inches = height - feet * 12;


const myInches = 12;
const myFeet = myInches / 12;
console.log(myFeet);

const dadaInches = 114;
const dadaFeet = dadaInches / 12;
console.log("dada feet:", dadaFeet);

const dadiInches = 60;
const dadiFeet = dadiInches / 12;
console.log("dadi feet:", dadiFeet);

 */

function InchTOFeet(inches) {
  const feet = inches / 12;
  return feet;
}

const dadaInches = 180;
const dadaFeet = InchTOFeet(dadaInches);
console.log("dadaInches:", dadaFeet);

const nanaInches = 400;
const nanaFeet = InchTOFeet(nanaInches);
console.log("nanaFeet:", nanaFeet);

const khalaInche = 50;
const khalaFeet = InchTOFeet(khalaInche);
console.log("KhalaFeet:", khalaFeet);

const khaluInches = 40;
const khaluFeet = InchTOFeet(khalaInche);
console.log("KhaluFeet:", khalaFeet);
