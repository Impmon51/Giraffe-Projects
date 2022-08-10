/**Jorge M., 2022-8-10
  *Giraffe Project 01 - Basic Maths (Lessons 5 - 6)
  *In this program I will do basic maths in JS. It's very standard: +, -, *, /
  */

	/*  Variable Library  */
var sum;															//Creates var sum
var difference;														//Creates var difference
var product;														//Creates var product
var quotient;														//Creates var quotient
var newNumVar = 1;													//Creates var newNumVar

	/*Add numbers together with "+".*/

sum = 10;															//Changes sum value
console.log(sum);													//Prints sum to console
sum = sum + 5;														//Changes sum value
console.log('10 + 5 =', sum);										//Prints sum to Console
console.log();														//Gives Space

	/*Subtract numbers with "-".*/
	
difference = 10;													//Changes difference value
console.log(difference);											//Prints difference to console
difference = difference - 5;										//Changes difference value 
console.log('10 - 5 =', difference);								//Prints difference to console
console.log();														//Gives Space

	/*Multiply numbers with "*".*/
	
product = 10;														//Changes product value
console.log(product);												//Prints product to console
product = product * 5;												//Changes product value
console.log('10 * 5 =', product);									//Prints product to console
console.log();														//Gives Space

	/*Divide numbers with "/"*/

quotient = 10;														//Changes quotient value
console.log(quotient);												//Prints quotient to console
quotient = quotient / 5;											//Changes quotient value
console.log('10 / 5 =', quotient);									//Prints quotient to console
console.log();														//Gives Space

console.log();														//Gives Space
		/*End.*/

	/*Incrementing a variable. You can do this by addition*/

console.log(newNumVar);												//Prints newNumVar to console
newNumVar = newNumVar + 1;											//Changes value of newNumVar
console.log(newNumVar);												//Prints newNumVar to console
console.log();														//Gives Space

	/*But you can also do this by simply adding "++" to the end.*/
	
newNumVar++;														//Increments newNumVar by 1
console.log(newNumVar);												//Prints newNumVar to console
console.log();														//Gives Space

	/*Decrementing a variable is done in the same way, with "--"*/
	
newNumVar = 10;														//Changes value of newNumVar
console.log(newNumVar);												//Prints newNumVar to console
newNumVar--;														//Decrements newNumVar by 1
console.log(newNumVar);												//Prints newNumVar to console
