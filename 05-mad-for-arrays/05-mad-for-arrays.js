/**Jorge M., 2022-8-13
  *Giraffe Project 05 - Mad for Arrays (Lessons 31 - 37) 46.5min
  *In this program, we will try to complete the rest of the string tutorials
  *The first part will be a Madlib-like game
  *Later we will cover arrays
  */

	/*  Variable Library  */
let madResult;														//Creates var madResult
let raceResult;														//Creates Array raceResult
let exampleHitch;													//I like their example, so I take :p
let nestedRace;														//Creates Array nestedRace
let infoRace;														//Creates Array infoRace
let moreInfoRace;													//Creates Array moreInfoRace

	/*The madlib uses a function, but we'll go into depth with functions in a later lesson.
	 *For this, we will see how to fill word blanks with strings.
	 *The function creates empty strings to be filled in when called later on.
	 */

function wordGame(myNoun, myAdjective, myVerb, myAdverb) {			//Creates wordGame Function
	madResult = '';													//Assigns empty string
	madResult += 'The ' + myAdjective + ' ' + myNoun + ' ' + myVerb + ' to the park ' + myAdverb + '.';
		//Adds onto madResult
	return madResult;												//Returns madResult when called
}

console.log(wordGame('dog', 'big', 'ran', 'quickly'));				//Calls wordGame to Console
console.log();														//Gives Room
console.log(wordGame('basketball', 'impish', 'stomped', 'terrifyingly'));	//Calls wordGame to console
console.log();														//Gives Room

	/*Arrays are used to store several values of data in one place
	 *They are made like ordinary variables, but when assigned,
	 *they use brackets to store several values.
	 *Each element is separated by a comma
	 *You can use several datatypes
	 */

raceResult = ['Eric', 1, 'Roseanne', 2, 'Shimp', 3];				//Initializes array raceResult
console.log(raceResult);											//Prints raceResult to console
console.log();														//Gives Room

	/*Experimenting*/

console.log('The Race results are:', raceResult[0], '#', raceResult[1], ',', raceResult[2], '#',
raceResult[3], ',',raceResult[4], '#', raceResult[5] + '.');		//Prints raceResult to console
console.log();														//Gives Room

raceResult = ['Blarg', 4, 'Reini', 5, 'Hank', 6];					//Reinitialize array raceResult
console.log('The Race results are:', raceResult[0], '#', raceResult[1], ',', raceResult[2], '#',
raceResult[3], ',',raceResult[4], '#', raceResult[5] + '.');		//Copy & paste :p
console.log();														//Gives Room

	/*Nested Arrays let you make an array with arrays in them to store more information easier
	 *You can use bracket notation to initialize arrays, as well as draw information from them.
	 */

exampleHitch = [['the universe', 42], ['everything', 101010]];		//Initializes nested array exampleHitch
console.log('Life,', exampleHitch[0][0], '&', exampleHitch[1][0],
':', exampleHitch[1][1], '=', exampleHitch[0][1]);					//I really like their example :p
console.log();														//Gives Room

nestedRace = [['Jimithy', 1], ['Corson', 2], ['Gorsop', 3]];		//Initializes nested array nestedRace
console.log('The Race results are:', nestedRace[0][0], '#', nestedRace[0][1], ',', nestedRace[1][0], '#',
nestedRace[1][1], ',',nestedRace[2][0], '#', nestedRace[2][1] + '.');		//Copy & paste :p
console.log();														//Gives Room

	/*This changes the first name in the results*/
	
infoRace = ['Cathip', 4];											//Initializes array infoRace
nestedRace[0] = infoRace;											//Reinitializes index 0 of nestedRace
console.log('The Race results are:', nestedRace[0][0], '#', nestedRace[0][1], ',', nestedRace[1][0], '#',
nestedRace[1][1], ',',nestedRace[2][0], '#', nestedRace[2][1] + '.');		//Copy & paste :p
console.log();														//Gives Room

	/*Using '.push', you can append onto the end of an array*/
	
moreInfoRace = ['Jimithy', 1];										//Initializes array moreInfoRace
nestedRace[0] = moreInfoRace;										//Reinitializes index 0 of nestedRace
nestedRace.push(infoRace);											//Appends infoRace onto nestedRace
console.log('The Race results are:', nestedRace[0][0], '#', nestedRace[0][1], ',', nestedRace[1][0], '#',
nestedRace[1][1], ',',nestedRace[2][0], '#', nestedRace[2][1] + ',', nestedRace[3][0], '#', nestedRace[3][1] + '.');
	//(Mostly) Copy & paste :p
console.log();														//Gives Room