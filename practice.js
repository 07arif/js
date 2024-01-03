// ##____Practice Problem 1:
/*
Harry's mom gave him money and asked him to buy some oranges and apples.
Write a program to help Harry calculate how much money the shopkeeper will return.

Input:
The first line of the input is the ta Harry's mom gave him.
The second line is the cost of 1 kg of oranges and 1 kg of apples.

Output:
Print the result.
            sample input: 
            1000
            700
            Output:
            300

*/

var momGaveMoney = 1000;
var orangesPrice = 400;
var applePrice = 300;

var totalPrice = orangesPrice + applePrice;
var shopkeeperReturn = momGaveMoney - totalPrice;

// console.log(shopkeeperReturn);

// ##____Practice Problem 2:
/*
Write a Program to calculate the average marks of Mathematics,
Biology, Chemistry, Physics, and Bangla of a student.

Input:
The first line of the input is the marks of the five subjects mentioned above, respectively.

Output:
Print the result in 2 decimal places.

                    Sample Input:
                    75.25, 65, 80, 35.45, 99.50

                    Output:
                    71.04

*/

var Mathematics = 75.25;
var Biology = 65;
var Chemistry = 80;
var Physics = 35.45;
var Bangla = 99.5;

var totalMarks = Mathematics + Biology + Chemistry + Physics + Bangla;
var averageMarks = totalMarks / 5;
averageMarks = averageMarks.toFixed(2);

console.log(averageMarks);

// ##____Practice Problem 3:
/*
Jhon's theacher gave him two variables. Each variabel contains a string.
jhon's teacher asked him to combine these two string and print them in one line.
Help jhon write the program.

Input:
The first and the second lines of the input contain the strings.

Output:
Print the result in one line.

                    Sample Input:
                    I am going to be

                    an awesome web developer

                    Output:
                    I am going to be an awesome web developer.

 */

// Option#1
var firstLine = " I am going to be";
var secondLine = "an awesome web developer.";

var additionOfTwoLine = firstLine + " " + secondLine;
console.log(additionOfTwoLine);

// Option#2
var theLine = " I am going to be" + " " + "an awesome web developer.";
console.log(theLine);
