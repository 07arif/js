function getSumOfAnArray(numbers) {
  //   console.log(numbers);
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    sum = sum + element;
    console.log(index, element, sum);
  }
  return sum;
}

const myNumbers = [10, 20, 30, 40, 50, 60, 70, 80];
getSumOfAnArray(myNumbers);

// function getSum(numbers) {
//   //   console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     // console.log(i);
//     let index = i;
//     // console.log(index);
//     let element = numbers[index];
//     // console.log(element);
//     sum = sum + element;
//     // console.log(sum);
//     console.log(index, element, sum);
//   }
// }

// const myNumbers = [12, 2, 3, 44, 56, 7, 89];
// getSum(myNumbers);
