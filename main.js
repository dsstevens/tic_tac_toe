//Query Selectors
var player1Wins = document.querySelector("#player1Wins")
var gameState = document.querySelector(".game-state")
var gameBoard = document.querySelector(".gameboard")
var player2Wins = document.querySelector(".player2Wins")

/*

hold player 1 and player 2’s data
8 ways of winning
how is each square represented: single object or within context of a larger complex data type
has a winning pattern been selected
keep track of selected square
how do you represent a win?
pros and cons to how to represent each square: as a div or as a button
the id property shoudl tell you which square you are to define positions
consider the path of win and label the squares for that potential

options for game data:
global var for current player, which can be changes and determines the turn
if currentplayer is palyer 1 put the data in either of the two arrays of player one squares and player 2 suares arrays
the game data could be an array which has objects
*/

/*
A function that creates the objects that store each players’ informations - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)
A function called increaseWins - increases the count of a player’s wins (should work for either player)
A function that keeps track of the data for the game board
A function that keeps track of which player’s turn it currently is
A function that checks the game board data for win conditions
A function that detects when a game is a draw (no one has won)
A function that resets the game board’s data to begin a new game

*/
// data Model

var currentPlayer

var gameData = {
playerOneSquares = [""],
playerTwoSquares = []
}

var gameData = [{id= "ADC", player: 1}, {id='asd'}, player]

<div class='board-square' id='TELL YOU WHICH SQUARE I AM - DEFINE POSISTIONS'>  </div>

event.target.id

// onclick
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
// if there's a draw - update title  -> to "it;s a draw" -> rest the game board -> withoout updating the DM
// if there's a win -> update DM -> update title -> to 'player X wins' -> rest the game board