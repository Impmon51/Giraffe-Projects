/**Jorge M., 2022-8-11
  *Giraffe Project 03 - Strings (Lessons 15 - 24 32min)
  *In this program, I will start to experiment with String variables in JS
  */

	/*  Variable Library  */
let firstName;														//Creates var firstName
let lastName;														//Creates var lastName
let quotedString;													//Creates var quotedString
let diffLines;														//Creates var diffLines
let horseNum;														//Creates var horseNum
let strFirst;														//Creates var strFirst
let stringLength;													//Creates var stringLength
const hThere = 'There are';											//Creates constant hThere
const hSen = 'horses.';												//Creates constant hSen
const strSecond = "I come Second.";									//Creates constant strSecond

	/*Strings must be in quotes. Could use single or double quotes.*/
	
firstName = "Albert";												//Assigns firstName
lastName = 'Einstein';												//Assigns lastName

console.log(firstName, lastName);									//Prints to Console
console.log();														//Gives Room

	/*To use quotes in a string, use \' or \", called "Escape out"*/

quotedString = '\"\'You cannot pass,\' he said. The orcs stood still, and a dead silence fell.\" \n \t — J.R.R. Tolkien';
	//Assigns quotedString
console.log(quotedString);											//Prints to console
console.log();														//Gives Room

	/*You can Escape out of several characters:
	 *\' Single quote
	 *\" Double quote
	 *\\ Backslash
	 *\n Newline
	 *\r Carriage return
	 *\t Tab
	 *\b backspace
	 *\f form feed
	 */
	 
diffLines = "First line. \n \t \\ Second Line.";					//Assigns diffLines
console.log(diffLines);												//Prints to console
console.log();														//Gives Room

	/*Concatenating Strings, you can concatenate with "+".
	 *You can concatenate regular strings as well as variables.
	 *Through experimentation, I found "," in earlier projects.
	 *I find the comma version better, especially because it adds a space between strings,
	 *but I'm told that's not even concatenation :p
	 *"What it is, is called varadict arguments (or varargs)."
	 *Use "+" if you don't want spaces.
	 *Use "," in all other situations.
	 */

horseNum = 2;														//Changes the value of horseNum
console.log(hThere + " " + horseNum + " " + hSen);					//Concatenates & prints to console
horseNum = 3;														//Changes the value of horseNum
console.log(hThere, horseNum, hSen);								//Varargs & prints to console
console.log();														//Gives Room

	/*You can also concatenate with "+="*/
	
strFirst = "I come First.\n";										//Assigns strFirst
console.log(strFirst);												//Prints to console
strFirst += strSecond;												//Concatenates strSecond to strFirst
console.log(strFirst);												//Prints to console
console.log();														//Gives Room

	/*You can find a String's length with ".length" operator. Will return a number.*/
	
stringLength = strFirst.length;										//Finds length of strFirst
console.log("The last string was", stringLength, "characters long. (Including newline)");
	//Varargs & prints to console