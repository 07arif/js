/*
sarah's mother is teaching her mathematics. 
She gave sarah a number and asked her what the remainder would be if 
she divided the number by 5. Help sarah write the program.


input:
the first line of the contains the number.

Output:
Print the Remainder.

                Sample Input:
                119
                Output:
                4
*/

var num = 119;

var remainder = num % 5;
// console.log(remainder);

/*
#######Problem-1:
You are given an array:
            var fruits = [ 'Apple', 'Banana', 'Orange'];
a) Find the index of 'Banana' and replace "Banana" with Mango.
b) Remove 'Orange' and add "Watermelon"

*/

var fruits = ["Apple", "Banana", "Orange"];
// console.log(fruits);

var bananaIndex = fruits.indexOf("Banana");
// console.log(bananaIndex);

// replace:
fruits[1] = "Mango";
// console.log(fruits);

// remove:
var removeFruit = fruits.pop();

// Add:
fruits.push("Watermelon");
// console.log(fruits);

/*
##########Problem-2:
You and your friends Tom, jane, Peter and john got their final
 exam result. Your total score is 85, Tom's total score is 66,
Jane's total score is 95, Peter's Total score is 56 and John's
 total score is 40. The grading chart is
            80 or above A grade 
            60 or above B grade
            50 or above C grade
            40 of above D grade
            39 of less => F grade

Write a program to find your and your friends grades using if-else.

*/

var marks = 40;

if (marks >= 80) {
  console.log("Grade: A");
} else if (marks >= 60) {
  console.log("Grade: b");
} else if (marks >= 50) {
  console.log("Grade: c");
} else if (marks >= 40) {
  console.log("Grade: D");
} else {
  console.log("Grade: f");
}

/*
#####Problem-3;

1.You are given three numbers 13, 79, and 45. write a program that will print the 
largest number using if-else.

2. You are given a triangle with the sides 9, 8, 9. write a program to check 
whether a triangle is Isosceles of not using if-else.

                Isosceles => two sides are equal


*/

var num1 = 13;
var num2 = 79;
var num3 = 45;

if (num1 > num2) {
  if (num1 > num3) {
    console.log(num1);
  } else {
    console.log(num3);
  }
} else {
  if (num2 > num3) {
    console.log(num2);
  } else {
    console.log(num3);
  }
}
