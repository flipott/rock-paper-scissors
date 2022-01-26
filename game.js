let moves = ["rock", "paper", "scissors"];

//This function picks a random move for the CPU. 
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = prompt().toLowerCase()
    computerSelection = computerPlay()

    console.log(playerSelection)
    console.log(computerSelection)

    if (playerSelection === "rock") {
        if (computerSelection === "rock") {
            return ["You both played rock. The game is tied!", 0];
        } else if (computerSelection === "scissors") {
            return ["Rock destroys scissors. You win!", 1];
        } else if (computerSelection === "paper") {
            return ["Paper covers rock. You lose!", -1]
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "paper") {
            return ["You both played paper. The game is tied!", 0];
        } else if (computerSelection === "scissors") {
            return ["Scissors cuts paper. You lose!", -1]
        } else if (computerSelection === "rock") {
            return ["Paper covers rock. You win!", 1]
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "scissors") {
            return ["You both played scissors. The game is tied!", 0];
        } else if (computerSelection === "rock") {
            return ["Rock destroys scissors. You lose!", -1]
        } else if (computerSelection === "paper") {
            return ["Scissors cuts paper. You win!", 1]
        }
    }
}


function game() {

    let gameCount = 0;
    let playerScore = 0;
    let computerScore = 0;

    firstRound = playRound()

    if (firstRound[1] === 0) {
        gameCount += 1;
    } else if  (firstRound[1] === 1) {
        gameCount += 1;
        playerScore += 1;
    } else if (firstRound[1] === -1) {
        gameCount += 1;
        computerScore += 1;
    }

    console.log(firstRound[0]);
    console.log("Games played: " + gameCount);
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + computerScore);

    secondRound = playRound()

    if (secondRound[1] === 0) {
        gameCount += 1;
    } else if  (secondRound[1] === 1) {
        gameCount += 1;
        playerScore += 1;
    } else if (secondRound[1] === -1) {
        gameCount += 1;
        computerScore += 1;
    }

    console.log(secondRound[0]);
    console.log("Games played: " + gameCount);
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + computerScore);

    thirdRound = playRound()

    if (thirdRound[1] === 0) {
        gameCount += 1;
    } else if  (thirdRound[1] === 1) {
        gameCount += 1;
        playerScore += 1;
    } else if (thirdRound[1] === -1) {
        gameCount += 1;
        computerScore += 1;
    }

    console.log(thirdRound[0]);
    console.log("Games played: " + gameCount);
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + computerScore);

    fourthRound = playRound()

    if (fourthRound[1] === 0) {
        gameCount += 1;
    } else if  (fourthRound[1] === 1) {
        gameCount += 1;
        playerScore += 1;
    } else if (fourthRound[1] === -1) {
        gameCount += 1;
        computerScore += 1;
    }

    console.log(fourthRound[0]);
    console.log("Games played: " + gameCount);
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + computerScore);

    fifthRound = playRound()

    if (fifthRound[1] === 0) {
        gameCount += 1;
    } else if  (fifthRound[1] === 1) {
        gameCount += 1;
        playerScore += 1;
    } else if (fifthRound[1] === -1) {
        gameCount += 1;
        computerScore += 1;
    }

    console.log(fifthRound[0]);
    console.log("Games played: " + gameCount);
    console.log("Player score: " + playerScore);
    console.log("CPU score: " + computerScore);

    if (playerScore > computerScore) {
        return "You win it all! Refresh to play again."
    } else if (playerScore < computerScore) {
        return "You lost it all! Refresh to play again."
    } else if (playerScore === computerScore) {
        return "You and the CPU tied! Refresh to play again."
    }
}

console.log(game())