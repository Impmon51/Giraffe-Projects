/**Jorge M., 2022-8-20
  *Giraffe Project 08 - Boolean & If statements (Lessons 49 - 50) 1:09hour
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