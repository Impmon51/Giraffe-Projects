/**Jorge M., 2022-8-20 - 2022-8-24
  *Giraffe Project 08 - Boolean & If statements (Lessons 49 - 62) 1:21hour
  *Now we're getting into code! In this program, we will explore conditional logic
  */

	/*  Variable Library  */
let totalNum = 0;													//Creates var totalNum, value 0
const stateIs = 'This statement is';								//Creates const statementIs
const tooMany = 'You have too many';								//Creates constant tooMany
const notEnough = 'That\'s not enough';								//Creates constant notEnough
const justRight = 'That sounds just right!';						//Creates constant justRight
const tooMuch = 'That\'s too much!';								//Creates constant tooMuch
const noJokers = 'No Jokers allowed in this game.';					//Creates constant noJokers
const enoughCards = 'We have enough cards, let\'s play!';			//Creates constant enoughCards
const noCards = 'We\'re missing some cards! Help me look!';			//Creates constant noCards
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

	/*Greater Than, Less Than, Greater than or Equal, Less than or Equal
	 *You can also check to see if a value is greater than a number, using ">"
	 *Or less than a number "<", to execute code that way.
	 *To use greater than or equal, type ">="
	 *For less than or equal, type "<="
	 */
	 
function countSnacks(howManySnacks){								//Creates function countSnacks
	if (howManySnacks > 5){											//If howManySnacks is greater than 5...:
		return (howManySnacks + '? ' + tooMany + ' snacks!');		//Returns true message to console
	}																//... Otherwise:
	return (howManySnacks + '? ' + justRight);						//Returns false message to console
}

console.log('How many snacks?');									//Prints to console
console.log(countSnacks(8));										//Checks if > 5, prints to console
console.log(countSnacks(3));										//Checks if > 5, prints to console
console.log(countSnacks(5));										//Checks if > 5, prints to console
console.log();														//Gives room

function changeOil(howManyMiles){									//Creates function changeOil
	if (howManyMiles >= 3000){										//If howManyMiles is greater or = 3000...:
		return (howManyMiles + ' miles? Looks like it\'s time for an oil change!');	//Returns true message to console
	}																//... otherwise:
	return ('Only ' + howManyMiles + ' miles? ' + notEnough + ' miles for an oil change.');
		//Returns false message to console
}

console.log('Is it time for an oil change?');						//Prints to console
console.log(changeOil(2500));										//Checks if >= 3000, prints to console
console.log(changeOil(3500));										//Checks if >= 3000, prints to console
console.log(changeOil(3000));										//Checks if >= 3000, prints to console
console.log();														//Gives room

function commuteTime(howManyMinutes){								//Creates function commuteTime
	if (howManyMinutes < 70){										//If howManyMinutes is less than 70...:
		return ('Only ' + howManyMinutes + ' minutes? ' + justRight);	//Returns true message to console
	}																//... Otherwise:
	return (howManyMinutes + ' minutes?! ' + tooMuch);				//Returns false message to console
}

console.log('How many minutes does it take to get to work/school?');	//Prints to console
console.log(commuteTime(45));										//Checks if < 70, prints to console
console.log(commuteTime(69), 'Nice!');								//Checks if < 70, prints to console
console.log(commuteTime(70));										//Checks if < 70, prints to console
console.log(commuteTime(100));										//Checks if < 70, prints to console
console.log();														//Gives room

function choreLog(howManyChores){									//Creates function choreLog
	if (howManyChores <= 5){										//If howManyChores <= 5...:
		return (howManyChores + '? ' + justRight);					//Returns true message to console
	}																//... Otherwise:
	return (howManyChores + '?! ' + tooMany + ' chores!');			//Returns false message to console
}

console.log('How many chores do you have to do?');					//Prints to console
console.log(choreLog(3));											//Checks if <= 5, prints to console
console.log(choreLog(5));											//Checks if <= 5, prints to console
console.log(choreLog(6));											//Checks if <= 5, prints to console
console.log();														//Gives room

	/*Nested Ifs & AND
	 *You can check multiple conditions at once using a Nested If block.
	 *Put a second if statement within the {} of the first with the conditions & code.
	 *AND operators are much easier & cleaner ways to achieve the same goal.
	 *To use AND, use "&&" after the first condition within the (), then type the next condition.
	 */

function longMovie(lengthOfMovie){									//Creates function longMovie
	if (lengthOfMovie <= 180){										//If lengthOfMovie is <= 180...:
		if(lengthOfMovie >= 60){									//And lengthOfMovie is >= 60...:
			return (lengthOfMovie + ' minutes? ' + justRight);		//Returns true message to console
		}
	}																//...Otherwise:
	return (lengthOfMovie + ' minutes? Lets watch something else.');	//Returns false message to console
}

console.log('How long is the movie?');
console.log(longMovie(50));											//Checks if 60m <= >= 180m
console.log(longMovie(90));											//Checks if 60m <= >= 180m
console.log(longMovie(200));										//Checks if 60m <= >= 180m
console.log();														//Gives room

function bikeBudget(priceOfBike){									//Creates function bikeBudget
	if ((priceOfBike <= 500) && (priceOfBike > 50)){				//If priceOfBike between 50 & 500...:
		return (priceOfBike + ' dollars? ' + justRight);			//Returns true message to console
	}																//... Otherwise:
	return (priceOfBike + ' dollars? I shouldn\'t get it.');		//Returns false message to console
}

console.log('What is the price of the bike?');
console.log(bikeBudget(50));										//Checks if $50 < >= $500, prints
console.log(bikeBudget(200));										//Checks if $50 < >= $500, prints
console.log(bikeBudget(510));										//Checks if $50 < >= $500, prints
console.log();														//Gives room

	/*Double Ifs & OR
	 *You can check & recheck conditions with multiple If statements.
	 *OR, you could use an OR operator, which looks like "||".
	 *This is used much in the same way as the "&&"
	 */
	 
function hotColdWater(tempFar){										//Creates function hotColdWater
	if (tempFar < 32){												//If tempFar is < 32°F...:
		return (tempFar + '°F? There is no water.');				//Returns true message to console
	}																//... Otherwise:
	if (tempFar > 212){												//If tempFar is > 212°F...
		return (tempFar + '°F? There is no water.');				//Returns true message to console
	}																//... Otherwise:
	return (tempFar + '°F? There is water.');						//Returns false message to console
}

console.log('Change the temperature to get rid of water. What temperature is it?');	//Prints to console
console.log(hotColdWater(30));										//Checks if temp outside 32°F & 212°F
console.log(hotColdWater(70));										//Checks if temp outside 32°F & 212°F
console.log(hotColdWater(250));										//Checks if temp outside 32°F & 212°F
console.log();														//Gives room

function coldHotWater(tempCelsius){									//Creates function coldHotWater
	if ((tempCelsius < 0) || (tempCelsius > 100)){					//If tempCelsius outside of 0°C & 100°C
		return (tempCelsius + '°C? There is no water.');			//Returns true message to console
	}																//... Otherwise:
	return (tempCelsius + '°C? There is water.');					//Returns false message to console
}

console.log('What temperatures are those in Celsius?');				//Prints to console
console.log(coldHotWater(-1.1));									//Checks if temp outside of 0°C & 100°C
console.log(coldHotWater(21.1));									//Checks if temp outside of 0°C & 100°C
console.log(coldHotWater(121.1));									//Checks if temp outside of 0°C & 100°C
console.log();														//Gives room