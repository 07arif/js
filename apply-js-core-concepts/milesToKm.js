function milesToKilometer(miles) {
  const kilometer = miles * 1.609;
  return kilometer;
}

const dkToCtgMiles = 165;
const dkToCtgKilometer = milesToKilometer(dkToCtgMiles);
console.log("Dhaka to Chattogram :", dkToCtgKilometer, "KM");

const ctgToRajshahiMiles = 248.91;
const ctgToRajshahiKilometer = milesToKilometer(ctgToRajshahiMiles);
console.log("Chattogram to Rajshahi:", ctgToRajshahiKilometer, "KM");

const RajshahiToPabnaMiles = 48.37;
const RajshahiToPabnaKilometer = milesToKilometer(RajshahiToPabnaMiles);
console.log("Rajshahi To Pabna:", RajshahiToPabnaKilometer, "KM");
