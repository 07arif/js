function meterToCentimeter(meter) {
  const centimeter = meter * 100;
  return centimeter;
}

const clothLengthMeter = 40;
const clothLengthCentimeter = meterToCentimeter(clothLengthMeter);
console.log("Cloth Length in Centimeter", clothLengthCentimeter);
