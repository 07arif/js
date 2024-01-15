/*
Write a function called foo() which prints 'foo' and a function called bar() which prints "bar"
call function bar() in the foo() function after printing. what will be the output? now call the foo( ) 
to see the output

*/

function foo() {
  console.log("foo");
  bar();
}

foo();

function bar() {
  console.log("bar");
}
bar();

/*
Write a function called make_avg() which will take an three integers and return the average of those values.

*/

function make_avg(a, b, c) {
  var numbers = a + b + c;
  var average = numbers / 3;
  return average;
}
var average = make_avg(100, 100, 100);
console.log(average);

/*
write a function called make_avg() which will take an array of integers 
and the size of that array and return the average fo those values.
*/
