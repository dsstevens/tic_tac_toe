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
        if (checkForWin(currentPlayer.id)){
            updateWins(currentPlayer)
            updateWinMessage()
            switchPlayer()
            setTimeout(resetGame, 1000)
            enableSquare()
        } else if (checkForDraw()){
            updateDrawMessage()
            disableSquare(event)
            switchPlayer()
            setTimeout(resetGame, 1000)
            enableSquare()
        } else {
            switchPlayer()
            updateTurnMessage()
        }
    }
})

// data Model
var gameData = {
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
    }
}

// var player1 
// var player2 
var currentPlayer 

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
    } 
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
    gameState.innerHTML = `${currentPlayer.token} Wins!`;
}

function updateDrawMessage(){
    gameState.innerHTML = "It's a Draw!"
    setTimeout(updateTurnMessage, 1000)
}

function updateWins(player){
    if(player === gameData.player1){
        player1Wins.innerHTML = `SCORE: ${player.wins}`
    } else {
        player2Wins.innerHTML = `SCORE: ${player.wins}`
    }  
}

function increaseWins(player){
    return player.wins += 1
}

function checkForWin(player){  
    var comboArray = Object.keys(gameData[player].currentCombos)
    for (var i = 0; i < comboArray.length; i++){
        if(gameData[player].currentCombos[comboArray[i]] > 2){
            increaseWins(gameData[player])
            return true
        }
    }
}

function checkForDraw(){
    if ((gameData.player1.squares.length + gameData.player2.squares.length) === 9) {
       return true
    }
}

function alternateRounds() {
    gameData.player1.currentTurn = !gameData.player1.currentTurn;
    gameData.player2.currentTurn = !gameData.player2.currentTurn;
}

function resetGame(){
    gameData.player1.currentCombos = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    gameData.player2.currentCombos = { A: 0, B: 0, C: 0, D: 0, E: 0, F: 0, G: 0, H: 0 };
    gameData.player1.squares = []
    gameData.player2.squares = []
    clearGameBoard()
    alternateRounds()
    updateTurnMessage()
}

function clearGameBoard(){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].innerHTML = ""
    }
}

function disableSquare(event){
    event.target.classList.add("disabled")
}

function enableSquare(){
    for(var i = 0; i < boxes.length; i++){
        boxes[i].classList.remove("disabled")
    }
    
}