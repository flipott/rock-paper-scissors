let moves = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll(".btn");
const playerScoreDisplay = document.querySelector("#player-score-display");
const computerScoreDisplay = document.querySelector("#computer-score-display");
const roundResult = document.querySelector("#round-result");
const winner = document.querySelector("#winner");
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let currResults = [];

buttons.forEach(button => button.addEventListener('click',()=>{
    playerChoice = button.id;
    game()
}))
 
function game() {

    winner.textContent = "";

    if ((playerScore < 5) && (computerScore < 5)) {
        currResults = playRound(playerChoice, computerPlay());
    }; 

    if (currResults[1] > 0) {
        roundResult.textContent += " You win this round!";
        playerScore++;
    } else if (currResults[1] < 0) {
        roundResult.textContent += " You lose this round...";
        computerScore++;
    }

    playerScoreDisplay.style.borderStyle = "solid";
    playerScoreDisplay.style.fontSize = "22px";
    playerScoreDisplay.style.fontWeight = "bold";
    playerScoreDisplay.style.color = "rgba(25, 25, 27, 0.767)"
    playerScoreDisplay.style.padding = "8px";

    computerScoreDisplay.style.borderStyle = "solid";
    computerScoreDisplay.style.fontSize = "22px";
    computerScoreDisplay.style.fontWeight = "bold";
    computerScoreDisplay.style.color = "rgba(25, 25, 27, 0.767)"
    computerScoreDisplay.style.padding = "8px";

    playerScoreDisplay.textContent = "Player score: " + playerScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;

    winCheck();
}

function winCheck() {

    if (playerScore == 5) {
        winner.textContent = "YOU WON! Make a selection if you'd like to play another game.";
        winner.style.backgroundColor = "lightgreen";
        playerScore = 0;
        computerScore = 0;
        currResults = [];
    } else if (computerScore == 5) {
        winner.textContent = "YOU LOST! Make a selection if you'd like to play another game.";
        winner.style.backgroundColor = "coral";
        playerScore = 0;
        computerScore = 0;
        currResults = [];
    }

}



//This function picks a random move for the CPU. 
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)]
}


function playRound(playerSelection, computerSelection) {

    roundResult.textContent = "You chose " + playerSelection + ". CPU chose " + computerSelection + "."

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            roundResult.textContent += " Draw!"
            return ["You both played rock. The game is tied!", 0];
        } else if (computerSelection === "scissors") {
            return ["Rock destroys scissors. You win!", 1];
        } else if (computerSelection === "paper") {
            return ["Paper covers rock. You lose!", -1]
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            roundResult.textContent += " Draw!"
            return ["You both played paper. The game is tied!", 0];
        } else if (computerSelection === "scissors") {
            return ["Scissors cuts paper. You lose!", -1]
        } else if (computerSelection === "rock") {
            return ["Paper covers rock. You win!", 1]
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            roundResult.textContent += " Draw!"
            return ["You both played scissors. The game is tied!", 0];
        } else if (computerSelection === "rock") {
            return ["Rock destroys scissors. You lose!", -1]
        } else if (computerSelection === "paper") {
            return ["Scissors cuts paper. You win!", 1]
        }
    }
}

