/**Jorge M., 2022-8-14 - 2022-8-16
  *Giraffe Project 06 - Figure out Arrays (Lessons 38 - 40) 49.5min
  *In this program, we will finish up the array tutorials
  */

	/*  Variable Library  */
let removedGame;													//Creates var removedGame
let removedItem;													//Creates var removed item
let pleasantFlow;													//Creates var pleasantFlow
let greatGames;														//Creates Array greatGames
let pleasantThings;													//Creates Array pleasantThings


	/*To remove indices from an array, use ".pop()".
	 *It will always remove the last index from the array.
	 *It will store it in another variable, for later use.
	 */
	
greatGames = ['King\'s Quest', 'Deus Ex', 'Spyro', 'Ghostbusters for the NES'];	//Initializes array greatGames
	//(No offense to people who like Ghostbusters :p)
console.log('List of great games:', greatGames[0], ',', greatGames[1], ',', greatGames[2],
',', greatGames[3], '.');											//Varargs & Prints onto Console
console.log();														//Gives Room

removedGame = greatGames.pop();										//Removes last index, places in removedGame
console.log('List of great games:', greatGames[0], ',', greatGames[1], ',', greatGames[2],
',', greatGames[3], '.');											//Copy & paste
console.log();														//Gives Room
console.log('Removed game:', removedGame);							//Shows removed game
console.log('(No offense if you like', removedGame, ':p)');			//My bad :p
console.log();														//Gives Room

	/*Use ".shift()" to remove the very first index in your array
	 *Works the same way as ".pop()"
	 */

pleasantThings = ['Pleasant Nightmares', 'Pleasant Dreams', 'Mount Pleasant', 'Pleasantville'];	//Initializes array pleasantThings
	//I think we can all agree with this one :p
console.log('Things that are pleasant:', pleasantThings[0], ',', pleasantThings[1], ',',
pleasantThings[2], ',', pleasantThings[3], '.',);					//Varargs & prints to console
console.log();														//Gives Room
removedItem = pleasantThings.shift();								//Removes first index, places in removedItem
console.log('Things that are pleasant:', pleasantThings[0], ',', pleasantThings[1], ',',
pleasantThings[2], ',', pleasantThings[3], '.',);					//Copy & paste
console.log();														//Gives Room
console.log('Removed item:', removedItem);							//Shows removed Item
console.log();														//Gives Room

	/*".Unshift()" is a function similar to ".push()", which appends to the end of an array
	 *In this case ".unshift" will append to the beginning of an array
	 *Arrays in JS are more like Non-Synchronous Hash-maps
	 */
	 
pleasantFlow = 'Pleasant Flowers';									//Initializes var pleasantFlow
console.log('Adding pleasant thing:', pleasantFlow);				//Prints to console
pleasantThings.unshift(pleasantFlow);								//Appends pleasantFlow to pleasantThings
console.log('Things that are pleasant:', pleasantThings[0], ',', pleasantThings[1], ',',
pleasantThings[2], ',', pleasantThings[3], '.',);					//Copy & paste
console.log();														//Gives Room

