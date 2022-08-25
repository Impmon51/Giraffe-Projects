/**Jorge M., 2022-8-24 - 2022-8-25
  *Giraffe Project 09 - Function... Or else! (Lessons 63 - 67) 1:28hour
  *In this project, we will explore more logic, starting with else
  */

	/*  Variable Library  */
let totalNum = 0;													//Creates var totalNum, value 0
const notEnough = 'That\'s not enough';								//Creates constant notEnough
const justRight = 'That sounds just right!';						//Creates constant justRight
const tooMuch = 'That\'s too much!';								//Creates constant tooMuch
const tooMany = 'That\'s too many';									//Creates constant tooMany
const noJokers = 'No Jokers allowed in this game.';					//Creates constant noJokers
const enoughCards = 'We have enough cards, let\'s play!';			//Creates constant enoughCards
const noCards = 'We\'re missing some cards! Help me look!';			//Creates constant noCards
const golfNames = ['Hole-in-One!', 'Eagle!', 'Birdie!', 'Par!',
'Bogey.', 'Double Bogey.', 'Go Home!'];								//Creates constant golfNames

	/*Else Statement
	 *In an Else statment, an alternate block of code can be executed,
	 *if the previous block of code returns false.
	 *To use, write "else" after the closing "}",
	 *followed by code that will be executed within {}.
	 */
	 
function rainFallMil(rainHowMuch){									//Creates function rainFallMil
	if (rainHowMuch < 25){											//If rainHowMuch is < 25mm...:
		return ('Only ' + rainHowMuch + 'mm of rain? ' + notEnough);	//Returns true message to console
	}																//... Otherwise:
	if (rainHowMuch >= 125){										//If rainHowMuch is >= 125mm...:
		return (rainHowMuch + 'mm of rain?! ' + tooMuch);			//Returns true condition 2 to console
	} else {														//... Else:
	return (rainHowMuch + 'mm of rain? ' + justRight);				//Returns false message to console
	}
}

console.log('Is your garden getting enough rain?');					//Prints onto Console
console.log(rainFallMil(10));										//Checks rainFallMil between 25 & 125
console.log(rainFallMil(30));										//Checks rainFallMil between 25 & 125
console.log(rainFallMil(200));										//Checks rainFallMil between 25 & 125
console.log();														//Gives Room

	/*Else If Statements
	 *An Else If statement can help you if there are multiple conditions to address.
	 *You can easily chain If statements together this way.
	 *To use, after "else", write "if" & put the conditions within ().
	 *After that, the code to be executed will be within {}.
	 *Order is very important in Else If statements. Once first condition is met,
	 *it will not check for other conditions. So make sure if it's between conditions,
	 *to check order so it will execute correctly.
	 */
	 
function countCards(cardHowMany){									//Creates function countCards
	if (cardHowMany > 52){											//If cardHowMany is > 52...:
		return (cardHowMany + ' cards? ' + tooMuch + ' ' + noJokers);	//Returns true message to console
	} else if (cardHowMany < 52){									//... Else if cardHowMany < 52...:
		return (cardHowMany + ' cards? ' + notEnough + '! ' + noCards);	//Returns true message to console
	} else {														//... Else...:
		return (cardHowMany + ' cards? ' + enoughCards);			//Returns false message to console
	}
}

console.log('How many cards do we have?');							//Prints to console
console.log(countCards(54));										//Counts cards, prints to console
console.log(countCards(50));										//Counts cards, prints to console
console.log(countCards(52));										//Counts cards, prints to console
console.log();														//Gives Room

	/*Using Else If, you can chain statements together*/
	
function wheelCount(wheelHowMany){									//Creates function wheelCount
	if (wheelHowMany < 1){											//If wheelHowMany is < 1...:
		return (wheelHowMany + '? ' + notEnough + ' wheels.');		//Returns true message to console
	} else if (wheelHowMany == 1){									//... Else if wheelHowMany = 1...:
		return (wheelHowMany + '? That is a unicycle.');			//Returns true message to console
	} else if (wheelHowMany == 2){									//... Else if wheelHowMany = 2...:
		return (wheelHowMany + '? That is a bicycle.');				//Returns true message to console
	} else if (wheelHowMany == 3){									//... Else if wheelHowMany = 3...:
		return (wheelHowMany + '? That is a tricycle.');			//Returns true message to console
	} else {														//... Otherwise...:
		return (wheelHowMany + '? ' + tooMany + ' wheels!');		//Returns false message to console
	}
}

console.log('How many wheels does your bike have?');				//Prints to console
console.log(wheelCount(0));											//Counts wheels, prints to console
console.log(wheelCount(1));											//Counts wheels, prints to console
console.log(wheelCount(2));											//Counts wheels, prints to console
console.log(wheelCount(3));											//Counts wheels, prints to console
console.log(wheelCount(10));										//Counts wheels, prints to console
console.log();														//Gives Room

	/*Golf game!
	 *I really like their example, so I'll do this one.
	 *I'll start with what they have & attempt to make it before they do.
	 */
	 
function golfGame(par, strokes){									//Creates function 
	if (strokes == 1){												//If strokes = 1...:
		return (strokes + ' stroke? ' + golfNames[0]);				//Returns true as Hole in one
	} else if (strokes <= par - 2){									//... Else if strokes = par - 2...:
		return (strokes + ' strokes? ' + golfNames[1]);				//Returns true as Eagle
	} else if (strokes <= par - 1){									//... Else if strokes = par - 1...:
		return (strokes + ' strokes? ' + golfNames[2]);				//Returns true as Birdie
	} else if (strokes == par){										//... Else if strokes = par...:
		return (strokes + ' strokes? ' + golfNames[3]);				//Returns true as Par
	} else if (strokes <= par + 1){									//... Else if strokes = par + 1...:
		return (strokes + ' strokes? ' + golfNames[4]);				//Returns true as Bogey
	} else if (strokes <= par + 2){									//... Else if strokes = par + 2...:
		return (strokes + ' strokes? ' + golfNames[5]);				//Returns true as Double Bogey
	} else {														//... Otherwise...:
		return (strokes + ' strokes? ' + golfNames[6]);				//Returns false as Go home
	}
}

console.log('Par is 4. What was your golf score?');					//Prints to console
console.log(golfGame(4, 1));										//Checks Par & prints to console
console.log(golfGame(4, 2));										//Checks Par & prints to console
console.log(golfGame(4, 3));										//Checks Par & prints to console
console.log(golfGame(4, 4));										//Checks Par & prints to console
console.log(golfGame(4, 5));										//Checks Par & prints to console
console.log(golfGame(4, 6));										//Checks Par & prints to console
console.log(golfGame(4, 7));										//Checks Par & prints to console