/*
1.Javascript is a high-level, interpreted programming language It makes the web pages 
more interactive. we can use javascript to make animation.

2.variable is like a box that store things. there are five types of variables number,
string boolean, null and undefined 

3.javascript keywords are reserved words and they cannot be used as variable name and 
function name.

4.camel case, snake case, and pascal case are the three most common naming conventions

5.variable names are case sensitive.

6.parsInt - string to int '20' -> 20

7.parsFloat - string to float '20.13' -> 20.13
8. Array index start with o . The indexOf() method returns the index (position) of a specified value.
9. we can replace an element in an array with the help of array indices e.g 
arrayName[index]=newValue

10. The push() method adds new items to the end of an array

11. The pop() method removes the last element from the end of an array.

13. comparison operators are used to test for true of false

14. The if statement executes if the condition is true

15. The else statement executes if the condition is false

16. Logical Operation, && returns true if both statements are true and logical operator, ||,
returns true if one of the statements is true

17. we write multi stage conditions if-else when we have multiple conditions 

18. A nested conditional statement is an if or if else statement inside another if else
statement.

19. A while loop is used to repeat a specific block of code until a condition is met.

20. A for loop iterates through a block of code a number of times.

21. The break statement is used to terminate the loop immediately. the continue
 statement is used to skip the current iteration of the loop

22. while loop 
var num = 0;
while(num<5){
    console.log('hello');
    num= num+1;
}
23. for loop
for(var i=0; i<5; i++){
    console.log('hello');
}
24.  function:
* a block of code.
*a set of statements that performs a task when it is called
*Maintains a relationship with input and output

function addNumber (a, b){
    return a + b;
}
const result = addNumber(2,7)

25. Object: The object type is used to store various keyed collections and more complex entities.
const object = {
    hello: 'world"
}

25. The includes() method return true if an array contains a specified value.
['car', 'airplane'].includes('airplane')  //true
['car', 'airplane'].includes('motorcycle')  //false

26. The startWith() method determines whether a string begins with the characters of a specified string.
it returning true of false as output.

const lunch = 'vat dal ';
lunch.startWith(vat); //true

27. slice
fruits = [element1, element2, element3, element4, element5]
fruit.slice(1,4); // element2,element3

28. splice:
scores=[1,2,3,4,5,]
score.splice(0,3); //4,5

29. The concat() method is used to merge two more arrays.
var str1 = 'hello'
var str2 = 'world'

var res = str.concat(str2);
console.log(res);

// Hello World!

30. The isArray() method determines whether the passed value is an Array.

const variable = ['dat','curry','dim'];
Array.isArray(variable);

*/
