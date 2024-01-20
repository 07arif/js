function maxInArray(numbers) {
  //   console.log("array inside the array", numbers);
  let largest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    let index = i;
    let element = numbers[index];
    if (element > largest) {
      largest = element;
    }
    // console.log(element);
  }
  return largest;
}
const heights = [
  167, 190, 120, 165, 137, 12, 343, 3434, 445, 23, 4, 234, 23, 423, 4, 234, 234,
  23, 4, 32,
];
const tallest = maxInArray(heights);
console.log(tallest);
