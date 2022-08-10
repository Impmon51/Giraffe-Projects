/**Jorge M., 2022-8-10
  *Giraffe Project 00 - Datatypes & Variables (Lessons 1 - 4)
  *I will go through the Giraffe projects (Now known as freeCodeCamp.org) at first.
  *Data is anything that is meaningful to the computer, JS has 7 types:
  *undefined, null, boolean, string, symbol, number, & object
  *Variables (var) allows computers to store & manipulate data in a dynamic fashion, a box to fill in
  *Variables are case sensitive. So myName & MYNAME are 2 different variables, even with the same name.
  */

var myName = "Jorge";												//Creates var myName

myName = 8;															//Changes myName

	/*"var" allows a variable to be used throught the whole program.*/

let groupName = "Giraffe";											//Creates var groupName

	/*"let" will only be used within the scope of where you declare that.*/

const pi = 3.14;													//Creates constant var pi

	/*"const" variable that can never change. You'll get an error.
	 *	End.*/


	/*Declaring & Assigning Variables*/
var a;																//Creates var a
var b = 2;															//Creates & assigns var b
console.log(a);														//Prints a to console
	/*"a" is declared, but not assigned. "b" is declared & assigned.*/

a = 7;																//Changes a to 7
b = a;																//Changes b to = a
	/*You can assign a variable later on, after declaring it. Also can assign a var to another*/

console.log(a);														//Prints a to console
console.log();														//Gives Space
		/*End.*/


	/*Adding onto variables*/
var c;																//Creates var c
var d = 10;															//Creates var d
var e = "I am a ";													//Creates var e

	/*Variables are undefined unless you initialize them at first. "c" will print undefined.*/

console.log(c);														//Prints c to console
console.log(d);														//Prints d to console
console.log(e);														//Prints e to console
console.log();														//Gives Space

c = 1;																//Changes var c = 1
	/*You can initialize "c" later. Will now print 1.*/

console.log(c);														//Prints c to console
console.log();														//Gives Space

c = c + 1;															//Adds to end of c
d = d + 5;															//Adds to end of d
e = e + "String!";													//Adds to end of e
	/*You can also add onto a variable's current value.*/

console.log(c);														//Prints c to console
console.log(d);														//Prints d to console
console.log(e);														//Prints e to console
console.log();														//Gives Space
