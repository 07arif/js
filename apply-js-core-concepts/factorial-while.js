function factorial(number) {
  let num = 1;
  let result = 1;
  while (num <= number) {
    result = result * num;
    num++;
  }
  return result;
}

let fectoNum = factorial(4);
console.log(fectoNum);
