/**Jorge M., 2022-8-11 - 2022-8-12
  *Giraffe Project 04 - More Strings (Lessons 25 - 30) 36min
  *In this program, I will continue to explore more with String variables
  */

	/*  Variable Library  */
let movieTitle;														//Creates var movieTitle
let firstLetter;													//Creates var firstLetter
let lastLetter;														//Creates var lastLetter
let midLetter;														//Creates var midLetter
let stringLength;													//Creates var stringLength
let wrongString;													//Creates var wrongString
const movieBegins = 'The title of the movie begins with the letter:';	//Creates constant movieBegins
const movieEnds = 'The title of the movie ends with the letter:';	//Creates constant movieEnds
const movieMid = 'The letter in the very middle of the title is:';	//Creates constant movieMid

	/*Bracket Notation can be used to help find out characters in a string.
	 *Remember that indexes begin counting with number 0.
	 *You can use bracket notation to get any character in the string.
	 */
	
movieTitle = 'Star Wars';											//Assigns movieTitle
console.log(movieTitle);											//Prints to console
firstLetter = movieTitle[0];										//Assigns firstLetter to movieTitle[0]
console.log(movieBegins, firstLetter);								//Varargs & prints to console

stringLength = movieTitle.length;									//Finds length of movieTitle
lastLetter = movieTitle[stringLength - 1];							//Assigns lastLetter to movieTitle length - 1
console.log(movieEnds, lastLetter);									//Varargs & prints to console
console.log();														//Gives Room

	/*Experimenting*/
	
movieTitle = 'The Matrix';											//Reassigns movieTitle
console.log(movieTitle);											//Prints to console
stringLength = movieTitle.length;									//Finds length of movieTitle
midLetter = movieTitle[stringLength / 2];							//Finds middle of the string
console.log(movieMid, midLetter);									//Varargs & prints to console
console.log();														//Gives Room

	/*Strings are immutable, you can't change an individule letter from a string.
	 *In order to fix a string, you need to reassign the whole thing.
	 */

wrongString = 'Gello World!';										//Mispelled wrongString
console.log(wrongString);											//Prints to console
//wrongString[0] = 'H';												//Will NOT correct the problem
console.log(wrongString);											//Prints to console
wrongString = 'Hello World!';										//Corrects wrongString
console.log(wrongString);											//Prints to console
console.log();														//Gives Room


