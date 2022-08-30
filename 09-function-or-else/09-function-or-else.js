/**Jorge M., 2022-8-24 - 2022-8-29
  *Giraffe Project 09 - Function... Or else! (Lessons 63 - 69) 1:41hour
  *In this project, we will explore more logic, starting with else, else if, & switch statements
  */

	/*  Variable Library  */
let dayReturn = '';													//Creates var dayReturn, value ''
let directReturn = '';												//Creates var directReturn, value ''
let spiceReturn = '';												//Creates var spiceReturn, value ''
let choiceReturn = '';												//Creates var choiceReturn, value ''
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
	 
function golfGame(par, strokes){									//Creates function golfGame
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
console.log();														//Gives Room

	/*Switch Statements
	 *One way to iterate through many choices is through a switch statement.
	 *It looks a lot like an If statement, but the code will go
	 *through cases to see which condition applies.
	 *To use, write "switch", followed by what is being compared, in "()".
	 *Within "{}", write the cases & code to be executed. Each case is listed,
	 *usually numbered or lettered & followed by ":". Remember to end each case with "break;".
	 */
	 
function fiveDays(dayWhat){											//Creates function fiveDays
	switch (dayWhat){												//Switch between 5 cases
		case 1:														//Case 1
			dayReturn = 'A partridge in a pear tree!';				//Assigns dayReturn
			break;													//Breaks case 1
		case 2:														//Case 2
			dayReturn = 'Two turtledoves';							//Assigns dayReturn
			break;													//Breaks case 2
		case 3:														//Case 3
			dayReturn = 'Three French hens';						//Assigns dayReturn
			break;													//Breaks case 3
		case 4:														//Case 4
			dayReturn = 'Four calling birds';						//Assigns dayReturn
			break;													//Breaks case 4
		case 5:														//Case 5
			dayReturn = 'Five golden rings!';						//Assigns dayReturn
			break;													//Breaks case 5
	}
	return dayReturn;												//Returns dayReturn
}

console.log('On the fifth day of Christmas, my true love gave to me!');		//Prints to console
console.log(fiveDays(5));											//Switches & returns to console
console.log(fiveDays(4));											//Switches & returns to console
console.log(fiveDays(3));											//Switches & returns to console
console.log(fiveDays(2));											//Switches & returns to console
console.log('And', fiveDays(1));									//Switches & returns to console
console.log();														//Gives Room

	/*Default in Switch statements are similar to else statements.
	 *If you fail to call a particular case, it will go to default.
	 *To use default, type default, followed by ":", & code to be executed in that case.
	 *Remember to break.
	 */
	 
function headDirect(directionWhich){								//Creates function headDirect
	switch (directionWhich){										//Switch between direction cases
		case 'n':													//Case N
			directReturn = 'North';									//Assigns directReturn
			break;													//Breaks Case N
		case 'e':													//Case E
			directReturn = 'East';									//Assigns directReturn
			break;													//Breaks Case E
		case 'w':													//Case W
			directReturn = 'West';									//Assigns directReturn
			break;													//Breaks Case W
		case 's':													//Case S
			directReturn = 'South';									//Assigns directReturn
			break;													//Breaks Case S
		default:													//Default Case
			directReturn = 'Wrong direction.';						//Assigns directReturn
			break;													//Breaks Default
	}
	return directReturn;											//Returns directReturn
}

console.log('Do you know the correct way?');						//Prints to console
console.log(headDirect('n'));										//Switches & returns to console
console.log(headDirect('e'));										//Switches & returns to console
console.log(headDirect('w'));										//Switches & returns to console
console.log(headDirect('s'));										//Switches & returns to console
console.log(headDirect(3));											//Switches & returns to console
console.log();														//Gives Room

	/*In situations where you want the same output for multiple inputs,
	 *you can use cases consecutively, without a "break" between them.
	 */

function spiceUp(spiceHowMuch){										//Creates function spiceUp
	switch (spiceHowMuch){											//Switch between amount of spice
		case 1:														//Spices 1 - 3 Mild
		case 2:														//Spices 1 - 3 Mild
		case 3:														//Spices 1 - 3 Mild
			spiceReturn = (spiceHowMuch + ', Mild');				//Assigns spiceReturn
			break;													//Breaks Cases 1-3
		case 4:														//Spices 4 - 6 Medium
		case 5:														//Spices 4 - 6 Medium
		case 6:														//Spices 4 - 6 Medium
			spiceReturn = (spiceHowMuch + ', Medium');				//Assigns spiceReturn
			break;													//Breaks Cases 4-6
		case 7:														//Spices 7 - 9 Hot
		case 8:														//Spices 7 - 9 Hot
		case 9:														//Spices 7 - 9 Hot
			spiceReturn = (spiceHowMuch + ', Hot');					//Assigns spiceReturn
			break;													//Breaks Cases 7-9
	}
	return spiceReturn;
}

console.log('On a scale of 1 to 9, how much Spice do you want?');	//Prints to console
console.log(spiceUp(1));											//Switches & returns to console
console.log(spiceUp(3));											//Switches & returns to console
console.log(spiceUp(5));											//Switches & returns to console
console.log(spiceUp(7));											//Switches & returns to console
console.log(spiceUp(9));											//Switches & returns to console
console.log();														//Gives Room

	/*Sometimes a Switch statement is better than using a chain If Else statements.
	 *We will practice changing between these two here:
	 */
	 
function gameMenuIf(choiceMade){									//Creates function gameMenuIf
	if (choiceMade === 1){											//If choiceMade = 1...:
		return ('Save A');											//Returns true message to console
	} else if (choiceMade === 2){									//Else if choiceMade = 2...:
		return ('Quit A');											//Returns true message to console
	} else {														//... Otherwise:
		return ('Continue A');										//Returns false message to console
	}
}

console.log('Game Over');											//Prints to console
console.log(gameMenuIf(1));											//Checks Choice made, prints console
console.log(gameMenuIf(2));											//Checks Choice made, prints console
console.log(gameMenuIf(3));											//Checks Choice made, prints console
console.log();														//Gives Room

function gameMenuSwitch(choiceMade){								//Creates function gameMenuSwitch
	switch (choiceMade){
		case 1:
			choiceReturn = ('Save B');
			break;
		case 2:
			choiceReturn = ('Quit B');
			break;
		default:
			choiceReturn = ('Continue B');
			break
	}
	return choiceReturn;
}

console.log('Game Over');											//Prints to console
console.log(gameMenuSwitch(1));										//Checks Choice made, prints console
console.log(gameMenuSwitch(2));										//Checks Choice made, prints console
console.log(gameMenuSwitch(3));										//Checks Choice made, prints console
console.log();														//Gives Room