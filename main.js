//Query Selectors
var player1Wins = document.querySelector("#player1Wins")
var gameState = document.querySelector(".game-state")
var gameBoard = document.querySelector(".gameboard")
var player2Wins = document.querySelector(".player2Wins")

//Event Listeners
gameBoard.addEventListener("on-click", function())

// data Model
var currentPlayer

/*
----> look at the hobbit test
----> create 2 player objects to update

hold player 1 and player 2’s data

8 ways of winning:
turn this into k/v in an object:

var winningCombos = {
	a: [0, 1, 2],
	b: [3, 4, 5],
	c: [6, 7, 8],
	d: [0, 3, 6],
	e: [1, 4, 7],
	f: [2, 5, 8],
	g: [0, 4, 8],
	h: [2, 4, 6],
};

Q's to consider:
how is each square represented: single object or within context of a larger complex data type
has a winning pattern been selected
keep track of selected square
how do you represent a win?
pros and cons to how to represent each square: as a div or as a button
the id property shoudl tell you which square you are to define positions
consider the path of win and label the squares for that potential

options for game data:
global var for current player, which can be changed and determines the turn
if currentplayer is player 1 put the data in either of the two arrays of player one squares and player 2 suares arrays
the game data could be an array which has objects

var gameData = {
playerOneSquares = [""],
playerTwoSquares = [""]
}

var gameData = [{id= "", player: 1}, {id='', player: 2}]


A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

    function createPlayer(){
        return player {
            id: id,
            token: 🐁,
            currentTurn: true,
            wins: 0,
        }
    }

A function called increaseWins - increases the count of a player’s wins (should work for either player)
    function increaseWins(){
       return player.wins +=1
    }

A function that keeps track of the data for the game board
    function trackGameboard(){

    }

A function that keeps track of which player’s turn it currently is
    function turnPlayer(){

    }

A function that checks the game board data for win conditions
    function checkForWin(){

    }

A function that detects when a game is a draw (no one has won)
    function checkForDraw(){

    }

A function that resets the game board’s data to begin a new game
    function resetGame(){
        
    }

*/

// onclick
//event.target.id
// check boolean if its already clicked
// if clicked - do nothing

// if not clicked
// DM - claim square ID for current player - push into data model
// change squares boolean property to clicked
// check for draw - if yes -> reset game DM - rest
// check for win - based on current player  ->  if yes update DM  -> reset game DM
//  if none of those are true pass to next player - changing current player

//DOM
// if not clicked - update to clicked
// if there's a draw - update title  -> to "it's a draw" -> rest the game board -> without updating the DM
// if there's a win -> update DM -> update title -> to 'player X wins' -> rest the game board

// use disable attribute on the clicked square