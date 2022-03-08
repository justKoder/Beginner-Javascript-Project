const cellElement = document.querySelectorAll("[data-cell]");
const X_CLASS = "x";
const CIRCLE_CLASS = "circle";
let circleTurn 
const board = document.getElementById("board");

const restartButton = document.getElementById("restartButton");

const winningMessage = document.getElementById("winningMessage");
let winningMessageTextElement = document.querySelector("[data-winningMessage-text]")

let WINNING_COMBINATIONS = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

startGame()

restartButton.addEventListener("click", startGame);

function startGame() {
    
    circleTurn = false;
    cellElement.forEach(cell =>{
        cell.classList.remove(X_CLASS)
        cell.classList.remove(CIRCLE_CLASS)
        winningMessage.classList.remove("show")
        cell.removeEventListener('click', handleClick)
        cell.addEventListener("click", handleClick, {once: true})
    })
    setBoardHoverClass()
    winningMessageTextElement.classList.remove("show")
}


function handleClick(e){
    const cell = e.target;
    const currentClass = circleTurn ? CIRCLE_CLASS : X_CLASS;

    placeMarK(cell, currentClass);
    // Check win
    if(checkWin(currentClass)){
        console.log("Winner")
        endGame(false);
    }else if(isDraw()){
        endGame(true);
    }else{
        swapTurn()
        setBoardHoverClass()
    }
    // Check Draw
    //Switch Player turns
    
}

function endGame(draw){
    if(draw){
        winningMessageTextElement.innerHTML = 'Draw!'
    }else{
        winningMessageTextElement.innerHTML = `${circleTurn  ? "O's" : "X's"} Wins`
    }
    winningMessage.classList.add("show")
}

function isDraw(){
    return [...cellElement].every(cell => {
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMarK(cell, currentClass){
    cell.classList.add(currentClass);
}

function swapTurn(){
    circleTurn = !circleTurn;
}

function setBoardHoverClass(){
    board.classList.remove(X_CLASS)
    board.classList.remove(CIRCLE_CLASS)
    if(circleTurn){
        board.classList.add(CIRCLE_CLASS)
    }else{
        board.classList.add(X_CLASS)
    }
}

function checkWin(currentClass){
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElement[index].classList.contains(currentClass);
        })
    })
}