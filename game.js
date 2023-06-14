round = prompt()

function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    return randomChoice;
    
}

let result = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    
    if (playerSelection === computerSelection) {
        return "This is a draw!"
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "Paper beats rock-- You lose!"
    } else if (playerSelection === "rock" && computerSelection== "scissors") {
        return "Rock beats scissors-- You win!"
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "Scissors beats Paper-- You lose!"
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "Paper beats rock-- You win!"
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "Rock beats Scissors-- You lose!"
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "Scissors beats paper-- You win!";
    }
}

let playerSelection = round;
let computerSelection = getComputerChoice();

function game(loopFive) {
    for (let i = 0; i < loopFive; i++) {
        let playerSelection = round;
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
}

game(5);