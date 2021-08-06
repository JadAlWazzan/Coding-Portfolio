let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() { // generates a random numbers between 0 and 9
    return Math.floor(Math.random() * 10);
}

function compareGuesses(computerGuess, humanGuess, target) { // compares the guesses, returns true if human wins.
    const humanDifference = Math.abs(target - humanGuess);
    const computerDifference = Math.abs(target - computerGuess);
    return computerDifference <= humanDifference;
}

function updateScore(winner) { // updates the score of the winner, either computer or human.
    if (winner === 'human') {
        humanScore++;
    } else {
        computerScore++;
    }
}

function advanceRound() {
    currentRoundNumber += 1
}
