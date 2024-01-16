function getFactorial(number) {
  //   console.log(number);
  let result = 1;
  for (let i = 1; i <= number; i++) {
    // console.log(i);
    let index = i;
    // result = result + index;
    result = result * index;
    // console.log(index, result);
  }
  return result;
}

let factorial = getFactorial(12);
console.log("factorial of 12:", factorial);
