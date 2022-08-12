/**Jorge M., 2022-8-10
  *Giraffe Project 02 - More number stuff (Lessons 7 - 14[ish])
  *I will explore number stuff in js to finish up number tutorials
  *Quick aside, I've been advised to not use var as much, & instead use "let" & "const"
  *It seems locals & constants are better than globals. I will remember to do just that
  */

	/*  Variable Library  */
let myDecimal;														//Creates var myDecimal
let myAnswer;														//Creates var myAnswer
let remainder;														//Creates var remainder
let numOne;															//Creates var numOne
let numThree;														//Creates var numThree
const numTwo = 2;													//Creates Constant numTwo
const pi = 3.14;													//Creates constant pi

	/*You can create floats the same way you make ints*/

console.log("First number is", myDecimal);							//Prints onto Console
myDecimal = 0.007;													//Changes value of myDecimal
console.log("First number is", myDecimal);							//Prints onto Console
console.log("Second number is", pi);								//Prints onto Console
console.log();														//Gives Room

	/*You can do maths with the floats too*/

myAnswer = myDecimal + pi;											//Adds myDecimal + pi
console.log(myDecimal, "+", pi, "=", myAnswer);						//Prints onto Console
console.log();														//Gives Room

myAnswer = myDecimal - pi;											//Subs myDecimal - pi
console.log(myDecimal, "-", pi, "=", myAnswer);						//Prints onto Console
console.log();														//Gives Room

myAnswer = myDecimal * pi;											//Multiplies myDecimal * pi
console.log(myDecimal, "*", pi, "=", myAnswer);						//Prints onto Console
console.log();														//Gives Room

myAnswer = myDecimal / pi;											//Divides myDecimal / pi
console.log(myDecimal, "/", pi, "=", myAnswer);						//Prints onto Console
console.log();														//Gives Room
console.log();														//Gives Room

	/*Remainders are done with "%".
	 *They are often used to find out if a number is even or odd.
	 *If you can divide a number by 2 & the remainder is 0, then number is even.*/
	 
numOne = 256;														//Changes value of numOne
numThree = 257;														//Changes value of numThree

myAnswer = numOne / numTwo;											//Divides numOne / numTwo
remainder = numOne % numTwo;										//remainders numOne % numTwo
console.log(numOne, "/", numTwo, "=", myAnswer);					//Prints to console
console.log(numOne, "%", numTwo, "=", remainder);					//Prints to console
console.log();														//Gives Room

myAnswer = numThree / numTwo;										//Divides numThree / numTwo
remainder = numThree % numTwo;										//Remainders numThree % numTwo
console.log(numThree, "/", numTwo, "=", myAnswer);					//Prints to console
console.log(numThree, "%", numTwo, "=", remainder);					//Prints to console
console.log();														//Gives Room
console.log();														//Gives Room

	/*Compound assignment with Augmented Addition
	 *You can add onto a variable by using "+=",
	 *followed by the value you'd like to add on*/

	/*You can use:*/
numOne = 10;														//Changes value of numOne
numThree = 10;														//Changes value of numThree
console.log(numOne);												//Prints onto console
numOne = numOne + numTwo											//Adds numOne + numTwo
console.log(numOne);												//Prints onto console

	/*Or you can use:*/
console.log(numThree);												//Prints onto console
numThree += numTwo;													//Adds numTwo to numThree
console.log("Add 2:", numThree);									//Prints onto Console

	/*There is also do this with subtraction, using "-="*/

numThree -= numTwo;													//Subtracts numTwo to numThree
console.log("Sub 2:", numThree);									//Prints onto Console

	/*There is also do this with multiplication, using "*="*/
	
numThree *= numTwo;													//Multiplies numTwo to numThree
console.log("Mul 2:", numThree);									//Prints onto Console

	/*There is also do this with division, using "/="*/
	
numThree /= numTwo;													//Divides numTwo to numThree
console.log("Div 2:", numThree);									//Prints onto Console