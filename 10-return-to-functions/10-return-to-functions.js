/**Jorge M., 2022-8-30
  *Giraffe Project 10 - Return to functions (Lessons 70 - 77) 1:52hour
  *In this project, we will explore more intricate uses of functions,
  *starting with various return ideas.
  *We will also start making Objects & explaining how to use them.
  */

	/*  Variable Library  */
let accelReturn = '';													//Creates var accelReturn, value ''
let speciesValue;														//Creates var speciesValue
let powLevelValue;														//Creates var powLevelValue
let findProperty;														//Creates var findProperty
let firstPet;															//Creates new Object firstPet
let newPet;																//Creates new Object newPet

	/*Boolean from a function
	 *We've seen how you can get boolean values from If Else statements,
	 *but you can use a function to return a true or false statement.
	 */
	 
function lessThan(a, b){											//Creates function lessThan
	return (a < b);													//Returns True if a < b
}

console.log(lessThan(5, 10));										//Checks if a < b, prints console
console.log(lessThan(50, 10));										//Checks if a < b, prints console
console.log();														//Gives Room

	/*You can use several returns in a function, this is useful when you have
	 *to create different conditions to break out of a function. 
	 */
	 
function findAcceleration(F, m){									//Creates function findAcceleration
	if (m === 0){													//If m = 0...:
		return undefined;											//Returns undefined
	}																//... Otherwise:
	return (F + 'N / ' + m + 'kg = ' + (accelReturn = (F / m)) + 'm/s²');
		//Returns the F/m = a
}

console.log('What is the acceleration?');							//Prints onto Console
console.log(findAcceleration(2,4));									//Finds acceleration, prints console
console.log(findAcceleration(18,9));								//Finds acceleration, prints console
console.log(findAcceleration(2,0));									//Finds acceleration, prints console
console.log();														//Gives Room

	/*Betting Game, I can't condone betting :p*/
	
	/*Building Objects
	 *Objects are similar to arrays in JS, but instead of indexes, you have properties.
	 *You make them similarly to how you make variables & arrays.
	 *When you define them, you put the properties within "{};".
	 *Each property is followed by a ":", the values goes after that, followed by ",".
	 *Properties can be any datatype, String, Number, array, etc.
	 */
	 
firstPet = {														//Initializes Object firstPet
	'Species': 'Dog',												//Assigns species
	'Name': 'Pedro',												//Assigns name
	'Legs': 4,														//Assigns legs
	'Tails': 1,														//Assigns tails
	'Personality': ['Friendly', 'Barks', 'Eats a bunch'],			//Assigns personality
	'Power Level': 'I think we all know... (9000+)',				//Assigns Power Level
	'Visual Prowess': 'Incredibly high',							//Assigns Visual Prowess
};

	/*Dot Notation To access Object Properties
	 *There are two ways to access properties in Objects.
	 *Dot notation can help you access exact properties & either put them
	 *into variables, or print to console, etc.
	 *To do this, type the object name, dot, then the property. "Object.Property"
	 */

speciesValue = firstPet.Species;									//Assigns speciesValue to firstPet species
console.log(speciesValue);											//Prints speciesValue to console
console.log(firstPet.Name);											//Prints firstPet Name to console
console.log();														//Gives Room

	/*Bracket Notation to access Object Properties
	 *You can also use bracket notation to access properties in objects.
	 *It is REQUIRED if you want to access properties with spaces in their name.
	 *Doing this is very similar to accessing elements in an array.
	 *Type the object, then "[]" & within the [], the property name. "Object[Property]"
	 *You can print directly, or assign it to variable.
	 */
	 
powLevelValue = firstPet['Power Level'];							//Assigns powLevelValue, pet Power Level
console.log(powLevelValue);											//Prints powLevelValue to console
console.log(firstPet['Visual Prowess']);							//Prints firstPet Visual Prowess to console
console.log();														//Gives Room

	/*Accessing Object Properties with Variables
	 *Using Bracket notation, along with the actual Property name,
	 *you can also access peroperties with variables that can later be reassigned.
	 */
	
findProperty = 'Legs';												//Assigns findProperty as Legs
console.log(firstPet[findProperty]);								//Prints Legs to console
findProperty = 'Tails';												//Reassigns findProperty as Tails
console.log(firstPet[findProperty]);								//Prints tails to console
console.log();														//Gives Room

