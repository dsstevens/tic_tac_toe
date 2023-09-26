//Query Selectors
var player1Wins = document.querySelector("#player1Wins")
var gameState = document.querySelector(".game-state")
var gameBoard = document.querySelector(".gameboard")
var player2Wins = document.querySelector("#player2Wins")
var boxes = document.querySelectorAll(".box")

//Event Listeners
window.addEventListener("load", showGamePlay)
gameBoard.addEventListener("click",function(event){
    event.preventDefault()
     if(event.target.classList.contains('box')) {
        playSquare(event.target.id, currentPlayer.id)
        updateSquareDOM(event, currentPlayer.token)
        disableSquare(event)
        // console.log("this is the currentPlayer.id", currentPlayer.id)
        if (checkForWin(currentPlayer.id)){
            console.log("this is the win conditional")
            updateWins(currentPlayer)
            updateWinMessage()
            switchPlayer()
            setTimeout(resetGame, 1000)
        } else if (checkForDraw()){
            updateDrawMessage()
            //disable squares
            switchPlayer()
            setTimeout(resetGame, 1000)
        } else {
            switchPlayer()
            updateTurnMessage()
        }
    }
})

// data Model
var gameData = {
    // hold the player data w the player inside as its own object, the game data, the current state
    player1: {
        id: "player1",
        token: "🐁",
        currentTurn: true,
        wins: 0,
        squares: [],
        currentCombos: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0
        }
    },
    player2: {
        id: "player2",
        token: "🐈‍⬛",
        currentTurn: false,
        wins: 0,
        squares: [],
        currentCombos: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0
        }
    },
    //squares: will have new square objects w ids and winning combos, iterate over this array does this have 3 objects that all have a
    // what if this is a string instead and everytime a player selects a square, the letter is tacked on the end of the string
}

// var player1 
// var player2 
var currentPlayer //reassign current player within function

//A function that creates the objects that store each players’ information - properties should include: id (ex: 'one'), token (ex: '⭐️'), wins (ex: 0)

function createPlayer(id, token, boolean, numWins, squares){
    var player = {
        id: id,
        token: token,
        currentTurn: boolean,
        wins: numWins,
        squares: squares,
        currentCombos: {
            A: 0,
            B: 0,
            C: 0,
            D: 0,
            E: 0,
            F: 0,
            G: 0,
            H: 0
        }
    }
    return player
}

function playSquare(squareIdString, player){
    gameData[player].squares.push(squareIdString)
    idArray = squareIdString.split("")
    for (var i = 0; i < idArray.length; i++){
        gameData[player].currentCombos[idArray[i]] += 1
    } //access the player 1 and player 2 nested data within the objects
    // console.log(currentPlayer)
    //commented out the event listener, need to figure out how to get player 1 to go first, now going with player2, if it's in the event listener, the wins aren't accurate
}

function updateSquareDOM(event,token) {
    if (!event.target.innerHTML) {
        event.target.innerHTML += token;
    }
}

function switchPlayer(){
    if (currentPlayer.id === 'player1') {
        currentPlayer = gameData['player2']
    } else {
        currentPlayer = gameData['player1']
    }
}

function showGamePlay(){
    currentPlayer = gameData['player1']
    gameState.innerHTML = `It's ${gameData.player1.token}'s Turn!`
}

function updateTurnMessage() {
    gameState.innerHTML = `It's ${currentPlayer.token}'s Turn!`
}

function updateWinMessage() {
    // console.log("this is the banner win message")
    gameState.innerHTML = `${currentPlayer.token} Wins!`;
    
}

function updateDrawMessage(){
    gameState.innerHTML = "It's a Draw!"
    setTimeout(updateTurnMessage, 2000)
}

function updateWins(player){
    if(player === gameData.player1){
        player1Wins.innerHTML = `SCORE: ${player.wins}`
    } else {
        player2Wins.innerHTML = `SCORE: ${player.wins}`
    }  
}

//A function called increaseWins - increases the count of a player’s wins (should work for either player)
function increaseWins(player){
    return player.wins += 1
}

//A function that checks the game board data for win conditions
function checkForWin(player){  
    var comboArray = Object.keys(gameData[player].currentCombos)
    for (var i = 0; i < comboArray.length; i++){
        if(gameData[player].currentCombos[comboArray[i]] > 2){
            // console.log(gameData[player].currentCombos[comboArray[i]])
            increaseWins(gameData[player])
            // console.log(gameData[player].wins)
            return true
        }
    }
}
//A function that detects when a game is a draw (no one has won)
function checkForDraw(){
    if ((gameData.player1.squares.length + gameData.player2.squares.length) === 9) {
       return true
    }
}

function alternateRounds() {
    gameData.player1.currentTurn = !gameData.player1.currentTurn;
    gameData.player2.currentTurn = !gameData.player2.currentTurn;
}

// A function that resets the game board’s data to begin a new game
function resetGame(){
    // console.log("this is the reset game")
    gameData.player1.currentCombos = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    gameData.player2.currentCombos = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    gameData.player1.squares = []
    gameData.player2.squares = []
    clearGameBoard()
    alternateRounds()
    updateTurnMessage()
    
}


function clearGameBoard(){
    // console.log("this is clearing before for loop")
    for(var i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = ""
        // console.log("this is clearing after for loop")
    }
}
function disableSquare(event){
    event.target.classList.add("disabled")
}


//A function that keeps track of the data for the game board
// function trackGameboard(){
    //which squares are empty, which have been clicked and have an icon on it
    //should each square be an object with properties like clicked
    //could the squares have a property like null and check for null
// }




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
function alternateRounds() {
    if (alternatePlayers === 1){
        alternatePlayers = 2
    } else {
        alternatePlayers = 1
    }
}
function randomizeTurn(gameData) {
    var randomIndex = Math.floor(Math.random()* gameData.length)
    return gameData[randomIndex]
}


var alternatePlayers = 1
*/