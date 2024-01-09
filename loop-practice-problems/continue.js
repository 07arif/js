var numbers = [45, 87, 54, 65, 76, 86, 98, 30, 20];

for (var i = 0; i < numbers.length; i++) {
  var number = numbers[i];
  if (number > 50) {
    continue;
  }
  console.log(number);
}
// the continue statement "jumps over" one iteration in the loop.
