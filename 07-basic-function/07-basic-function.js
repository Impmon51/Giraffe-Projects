/**Jorge M., 2022-8-17 - 2022-8-20
  *Giraffe Project 07 - Basic functions (Lessons 41 - 48) 1:08hour
  *In this program, we will explore how to make reusable code, using functions.
  *Edit on 2022-8-21: {I found out what was wrong with tellList.
  *In order for the array to be purely local, you must use 'let' within the function.
  *Otherwise, it will default to global. I will comment out the original & fix it after.}
  */

	/*  Variable Library  */
let totalNum = 0;													//Creates var totalNum, value 0
let celsiusNum;														//Creates var celsiusFind
let fahrenheitNum;													//Creates var fahrenheitNum
let shopList;														//Creates array shopList
let numCue;															//Creates array numCue
const weOff = 'We\'re off! We\'re here! Let\'s go again!';			//Creates constant weOff
const addSome = 8;													//Creates constant addSome, value 8

	/*Functions allow us to make reusable code
	 *Use "function newName(){}", where you name the function, & place code in "{}"
	 *Anything in "{}" will run whenever function is called
	 */
	 
function goAgain(){													//Creates function goAgain
	console.log(weOff);												//Prints onto Console
}

goAgain();															//Calls function goAgain
goAgain();															//Calls function goAgain
goAgain();															//Calls function goAgain

	/*Parameters are variables that act as placeholders for the
	 *values that are to be input to a function when it is called.
	 *When you create a function, you can give parameters to it in the "()"
	 */
	 
function percentCalc(a, b){											//Creates function percentCalc
	console.log('What is', a, '% of', b, '?');						//Prints to console
	console.log(a * b / 100);										//Prints console (Equation: a% * b / 100)
	console.log();													//Gives room
}

console.log();														//Gives room
percentCalc(50, 14);												//Calls percentCalc (50% of 14)
percentCalc(10, 8.8);												//Calls percentCalc (10% of 8.8)
percentCalc(18, 21.73);												//Calls percentCalc (18% tip for $21.73)
console.log('Just give them a fiver!');								//Easier & more generous |3
console.log();														//Gives room

	/*Global Scope & Functions
	 *Scope refers to the visibility of variables, if a var is defined outside of a function,
	 *it will be global, recognized throughout the program. If it's defined within the function,
	 *it will be scoped to that function, & therefore local.
	 */
	 
function postNum(){													//Creates function postNum
	let myNumber = 5;												//Creates var myNumber & assigns 5
	console.log(myNumber);											//Prints to console
}

postNum();															//Calls function postNum
//console.log(myNumber);												//Will Give error; myNumber is local
console.log();														//Gives room

	/*If there are both Local & Global versions of the same var,
	 *a function will always go with the local
	 */

/*This is edited out on 2022-8-21, the correct code is below:

shopList = ['Jeans', 'Socks', 'Jacket'];							//Initializes array shopList
console.log(shopList[0], shopList[1], shopList[2]);					//Varargs & Prints onto Console
console.log();														//Gives room

function tellList(){												//Creates function tellList
	shopList = ['Jeans', 'Jacket'];									//Reinitializes array shopList
	console.log(shopList[0], shopList[1]);							//Varargs & prints onto Console
}

tellList();															//Calls function tellList (Changed shopList)
console.log(shopList[0], shopList[1], shopList[2]);					//Copy & paste
console.log();														//Gives room

	Didn't seem to work <w<.... I'll have to ask experts about this*/

shopList = ['Jeans', 'Socks', 'Jacket'];							//Initializes array shopList
console.log(shopList[0], shopList[1], shopList[2]);					//Varargs & Prints onto Console
console.log();														//Gives room

function tellList(){												//Creates function tellList
	let shopList = ['Jeans', 'Jacket'];								//Reinitializes array shopList
	console.log(shopList[0], shopList[1]);							//Varargs & prints onto Console
}

tellList();															//Calls function tellList (Changed shopList)
console.log(shopList[0], shopList[1], shopList[2]);					//Copy & paste
console.log();														//Gives room

	/*Return statement helps you return values from functions*/
	
function squareNum(a){												//Creates function squareNum
	return a * a;													//Returns a * a
}

console.log(squareNum(8));											//Calls squareNum & ptinrs to console
console.log(squareNum(5));											//Calls squareNum & ptinrs to console
console.log(squareNum(256));										//Calls squareNum & ptinrs to console
console.log();														//Gives room

	/*You can have a function without a return, however, it will lead to an undefined*/
/* <= Remove to test

function addMore(){													//Creates function addMore
	totalNum += addSome;											//adds addSome to totalNum
}

console.log(addMore());												//No return; returns undefined
console.log();														//Gives room */

	/*You can assign a variable with a returned value too, using functions*/
	
function celsiusFind(F){											//Creates function celsiusFind
	return ((F - 32) / 1.8);										//Returns °C = ((°F - 32) / 1.8)
}

celsiusNum = celsiusFind(95);										//Assigns celsiusFind's value to celsiusNum
console.log('95°F is', celsiusNum + '°C');							//Prints celsiusNum to console

function fahrenheitFind(C){											//Creates function fahrenheitFind
	return ((1.8 * C) + 32);										//Returns °F = (1.8 * °C) + 32
}

fahrenheitNum = fahrenheitFind(25);									//Assigns fahrenheitFind's value to fahrenheitNum
console.log('25°C is', fahrenheitNum + '°F');						//Prints fahrenheitNum to console
console.log();														//Gives room

	/*Stand in Line
	 *Cues are abstract data structure where items are kept in order.
	 *New items go to back of cue, old are removed from the front of cue.
	 *This next function will combine previous lessons to accomplish this.
	 */
	 
function nextCue(arra, nex){										//Creates function nextCue
	arra.push(nex);													//Appends nex onto end of array
	return arra.shift();
}

numCue = [1, 2, 3, 4, 5];											//Initializes array numCue

console.log('Original:', JSON.stringify(numCue));					//Stringifies & prints numCue to console
console.log('Moving over:', nextCue(numCue, 6));					//Prints & shifts array over
console.log('New:', JSON.stringify(numCue));						//Stringifies & prints numCue to console
console.log('Moving over:', nextCue(numCue, 7));					//Prints & shifts array over
console.log('New:', JSON.stringify(numCue));						//Stringifies & prints numCue to console
console.log();														//Gives room