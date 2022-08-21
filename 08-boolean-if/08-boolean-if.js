/**Jorge M., 2022-8-20
  *Giraffe Project 08 - Boolean & If statements (Lessons 49 - 54) 1:16hour
  *Now we're getting into code! In this program, we will explore conditional logic
  */

	/*  Variable Library  */
let totalNum = 0;													//Creates var totalNum, value 0
const stateIs = 'This statement is';								//Creates const statementIs
const SB = [];														//Creates constant array SB (String Builder Note)

	/*Booleans are a datatype that return either True or False.
	 *To use, type 'true' or 'false', without quotes.
	 *Used in a function, it can gague if a condition is necessary or not to run code.
	 */

function booTrue(){													//Creates function booTrue
	return true;													//Returns value true
}
	
console.log(stateIs, booTrue());									//Prints onto Console

function booFalse(){												//Creates function booFalse
	return false;													//Returns value false
}

console.log(stateIs, booFalse());									//Prints onto Console
console.log();														//Gives room

	/*If statements for conditional logic
	 *If statements are used to make decisions in code.
	 *Using the keyword 'if', you can execute code within {} under specific conditions within ()
	 */

function stateTrueFalse(isThatTrue){								//Creates function thatsTrue
	if (isThatTrue){												//If isThatTrue is true...:
		return (stateIs + ' ' + true);								//Returns true message to console 'Yes, that is true.'
	}																//... Otherwise:
	return (stateIs + ' ' + false);									//Returns false message to console 'No, that is false.'
}

console.log('Elephants are pink.');									//Prints to console
console.log(stateTrueFalse(false));									//Checks if true, then prints result
console.log('Elephants are grey.');									//Prints to console
console.log(stateTrueFalse(true));									//Checks if true, then prints result
console.log();														//Gives room

	/*Comparison operators
	 *There are many comparison operators that will return a boolean true or false.
	 *Equality operator is the most common, often used in if statement.
	 *Made with a tripple equals: '==='
	 *
	 */
	
function exactHundred(isItHundred){									//Creates function exactHundred
	if (isItHundred === 100){										//If isItHundred is true...:
		return (isItHundred + ' is equal to 100.');					//Returns true message to console
	}																//... Otherwise:
	return (isItHundred + ' is not equal to 100.');					//Returns false message to console
}

console.log(exactHundred(99));										//Checks if true, prints result
console.log(exactHundred(100));										//Checks if true, prints result
console.log();														//Gives room

	/*Practice comparing different values
	 *Oddly enough, there is a '==', which can be used with number datatype & also string,
	 *So {3 = '3'}, but try to avoid using this, use '==='
	 */
	
function looseEqual(a, b){											//Creates function looseEqual
	if (a == b){													//If a loosely = b...:
		return (a + ' & \'' + b + '\' Loosely Equal.');				//Returns true message to console
	}																//... Otherwise:
	return (a + ' & \'' + b + '\' Not Equal.');						//Returns false message to console
}

console.log(looseEqual(9, '9'));									//Compares num & string, prints
console.log(looseEqual(9, '8'));									//Compares num & string, prints

function strictEqual(a, b){											//Creates function strictEqual
	if (a === b){													//If a strictly = b...:
		return (a + ' &  ' + b + '  Strictly Equal.');				//Returns true message to console
	}																//... Otherwise:
	return (a + ' & \'' + b + '\' Not strictly Equal.');			//Returns false message to console
}

console.log(strictEqual(9, 9));										//Compares num & num, prints
console.log(strictEqual(9, '9'));									//Compares num & string, prints
console.log();														//Gives room

	/*Inequality Operator is the opposite of the equality operator.
	 *Use Inequality operator to find out if something is Not Equal (True) or Equal (False).
	 *There is also a strict version '!==' & loose version '!=', just like Equality operator.
	 *Otherwise, used same way, to find out whether or not a given condition is not equal.
	 */
	 
function notHundred(isItHundred){									//Creates function notHundred
	if (isItHundred !== 100){										//If  isItHundred NOT 100...:
		return ('True, ' + isItHundred + ' is NOT equal to 100.');	//Returns true message to console
	}																//... Otherwise:
	return ('False, ' + isItHundred + ' IS equal to 100.');			//Returns false message to console
}

console.log('99 is not 100.');										//Prints to console
console.log(notHundred(99));										//Compares 99 to 100, prints to console
console.log('100 is not 100.');										//Prints to console
console.log(notHundred(100));										//Compares 100 to 100, prints to console

console.log();														//Gives room