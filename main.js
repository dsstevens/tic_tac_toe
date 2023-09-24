//Query Selectors
var player1Wins = document.querySelector("#player1Wins")
var gameState = document.querySelector(".game-state")
var gameBoard = document.querySelector(".gameboard")
var player2Wins = document.querySelector(".player2Wins")

//Event Listeners
window.addEventListener("load", resetGame)
gameBoard.addEventListener("click", )

// data Model
var currentPlayer
var player1
var player2
var playerWinCombos = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
    F: 0,
    G: 0,
    H: 0
}

var winningCombos = {
    one: ["ADG"],
	two: ["BD"],
	three: ["CDH"],
	four: ["AE"],
	five: ["BEGH"],
	six: ["CE"],
	seven: ["AFH"],
	eight: ["BF"],
    nine: ["CFG"]
};
var gameData = [
    // hold the player data w the player inside as its own object, the game data, the current state
    player1: {
        id: id,
        token: "🐁",
        currentTurn: boolean,
        wins: numWins,
        squares: []
    },
    player2: {
        id: id,
        token: "🐈‍⬛",
        currentTurn: boolean,
        wins: numWins,
        squares: []
    },
   // will have new square objects w ids and winning combos, iterate over this array does this have 3 objects that all have a
   // what if this is a string instead and everytime a player selects a square, the letter is tacked on the end of the string
]

var alternatePlayers = 1
function alternateRounds() {
    if (alternatePlayers === 1){
        alternatePlayers = 2
    } else {
        alternatePlayers = 1
    }
}

//A function that creates the objects that store each players’ information - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function createPlayer(id, token, boolean, numWins, squares){
    var player = {
        id: id,
        token: token,
        currentTurn: boolean,
        wins: numWins,
        squares: squares
    }
    return player
}
//A function that resets the game board’s data to begin a new game
function resetGame(){
    //***alternate player 1 or player 2: call in switchPlayer ?
    playerWinCombos = {
        A: 0,
        B: 0,
        C: 0,
        D: 0,
        E: 0,
        F: 0,
        G: 0,
        H: 0
    },
    gameData = [
        player1: {
            id: id,
            token: "🐁",
            currentTurn: boolean,
            wins: numWins,
            squares: []
        },
        player2: {
            id: id,
            token: "🐈‍⬛",
            currentTurn: boolean,
            wins: numWins,
            squares: []
        },
    ]
}

function playSquare(squareIdString){
    idArray = squareIdString.split("")
    for (var i = 0; i < idArray.length; i++){
        playerWinCombos
    }
}

//A function called increaseWins - increases the count of a player’s wins (should work for either player)
function increaseWins(player){
    return player.wins +=1
}

//A function that keeps track of the data for the game board
function trackGameboard(){
    //which squares are empty, which have been clicked and have an icon on it
    //should each square be an object with properties like clicked
    //could the squares have a property like null and check for null
}

//A function that keeps track of which player’s turn it currently is
function switchPlayer(){
    // should current player be redefined within the scope of the function or globally?
    // should i define player 1 and 2 as variables or strings?
    // currently calling in the player within the game data model
    if (currentPlayer === player1) {
        currentPlayer = player2
    } else {
        currentPlayer = player1
    }
}

//A function that checks the game board data for win conditions
function checkForWin(){
    //compare the current occupied squares to winning combos
    // square object could contain boolean for clicked, id number, held the win conditions it's a part of
    //win conditions rep by letters of the combo that the square is a part of 
    //call resetGame
}

//A function that detects when a game is a draw (no one has won)
function checkForDraw(){
    //compare current occupied squares to winning combos 
    //specifically compare the player's squares based on ids of the playerone squares
    //iterate over object w Object.keys(playerWinCombos)
    //if (newArray[i] === 3) {there was a win, add in to player one object to update dm and dom}
    // if no winning combos and no empty squares
    //call checkForWin
    //call switchPlayer
    //call resetGame
}


/*
----> look at the hobbit test
----> create 2 player objects to update

hold player 1 and player 2’s data
var gameData = [{id= "", player: 1}, {id='', player: 2}]

Q's to consider:
how is each square represented: single object or within context of a larger complex data type
has a winning pattern been selected
keep track of selected square: id
how do you represent a win?: winning combo
pros and cons to how to represent each square: as a div or as a button
the id property should tell you which square you are to define positions
consider the path of win and label the squares for that potential
when to use a return; pure functions need a return
wins persist over multiple games
create a comparison function for the winning combos??? invoke in checkfordraw and checkforwin

options for game data:
global var for current player, which can be changed and determines the turn
if currentplayer is player 1 put the data in either of the two arrays of player one squares and player 2 squares arrays
the game data could be an array which has objects
use disable attribute on the clicked square

onload to be the arg for the params of the players
put the player building functions in the event listener

GAMEPLAY IN DATA MODEL::::
// on load: initiate game data. check or change
*** each round of play needs to alternate which player goes first
// on click: define the square for player one, 
    disable for being clicked again, 
    push to player's array of squares
// use event.target.id within the eventhandler function to compare the id and do an action
// check boolean if it's already clicked
// if clicked - do nothing

// if not clicked
    claim square ID for current player - push into data model
    push the id into array of current occupied squares for the player
    consider that the id of the square is related to the winning combos
// change squares boolean property to clicked
// check for draw - if yes -> reset game DM - clear current occupied squares
// check for win - based on current player  ->  if yes update DM  -> reset game DM
//  if none of those are true pass to next player - changing current player

//DOM functions (keep separate)
// if not clicked - update to clicked
// if there's a draw - update title  -> to "it's a draw" -> reset the game board -> without updating the DM
// if there's a win -> update DM -> update title -> to 'player X wins' -> rest the game board

var gameData = {
    // hold the player data w the player inside as its own object, the game data, the current state
    player1: {
        id: id,
        token: "🐁",
        currentTurn: boolean,
        wins: numWins,
        squares: squares
    },
    player2: {
        id: id,
        token: "🐈‍⬛",
        currentTurn: boolean,
        wins: numWins,
        squares: squares
    },
    player1Squares: [], // will have new square objects w ids and winning combos, iterate over this array does this have 3 objects that all have a
    player2Squares: [], // what if this is a string instead and everytime a player selects a square, the letter is tacked on the end of the string
}
*/