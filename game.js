//Selecting DOM elements
const buttons = document.querySelectorAll('.btn');
const playerScoreDisplay = document.querySelector('#player-score-display');
const computerScoreDisplay = document.querySelector('#computer-score-display');
const roundResult = document.querySelector('#round-result');
const winner = document.querySelector('#winner');
const roundsPlayed = document.querySelector('#rounds-played');

//Initializing variables
let moves = ['rock', 'paper', 'scissors'];
let playerChoice;
let playerScore = 0;
let computerScore = 0;
let currResults;
let roundsCounter = 0;

//Starts the game once a button is selected
buttons.forEach(button => button.addEventListener('click',()=>{
    playerChoice = button.id;
    game();
}));
 
//Plays a round and determines if there is a winner
function game() {
    winner.textContent = '';

    if ((playerScore < 5) && (computerScore < 5)) {
        currResults = playRound(playerChoice, computerPlay());
    }; 

    if (currResults > 0) {
        roundResult.textContent += ' You win this round!';
        playerScore++;
    } else if (currResults < 0) {
        roundResult.textContent += ' You lose this round...';
        computerScore++;
    };

    playerScoreDisplay.classList.add('score-display');
    computerScoreDisplay.classList.add('score-display');

    playerScoreDisplay.textContent = 'Player score: ' + playerScore;
    computerScoreDisplay.textContent = 'Computer score: ' + computerScore;

    winCheck();
};

//Checks to see if either player reaches 5 points and determines overall winner if so
function winCheck() {

    if (playerScore == 5) {
        winner.textContent = "YOU WON! Make a selection if you'd like to play another game.";
        winner.style.backgroundColor = 'lightgreen';
        playerScore = 0;
        computerScore = 0;
        currResults = [];
        roundsCounter = 0;
    } else if (computerScore == 5) {
        winner.textContent = "YOU LOST! Make a selection if you'd like to play another game.";
        winner.style.backgroundColor = 'coral';
        playerScore = 0;
        computerScore = 0;
        currResults = [];
        roundsCounter = 0;
    };
};

//Picks a random move for the CPU. 
function computerPlay() {
    return moves[Math.floor(Math.random() * 3)];
};

//Returns a number denoting which player, if any, receives a point for the round 
function playRound(playerSelection, computerSelection) {
    roundsPlayed.classList.add('round-display');
    roundsPlayed.textContent = 'Rounds played: ' + (roundsCounter += 1);
    roundResult.textContent = 'You chose ' + playerSelection + '. CPU chose ' + computerSelection + '.';

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            roundResult.textContent += ' Draw!';
            return 0;
        } else if (computerSelection === 'scissors') {
            return 1;
        } else if (computerSelection === 'paper') {
            return -1;
        };
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            roundResult.textContent += ' Draw!';
            return 0;
        } else if (computerSelection === 'scissors') {
            return -1;
        } else if (computerSelection === 'rock') {
            return 1;
        };
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            roundResult.textContent += ' Draw!';
            return 0;
        } else if (computerSelection === 'rock') {
            return -1;
        } else if (computerSelection === 'paper') {
            return 1;
        };
    };
};
