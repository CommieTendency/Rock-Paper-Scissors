function getComputerChoice() {
    let computerChoice = ["Rock", "Paper", "Scissors"];
    let randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];

    return randomChoice;
    
}

let result = getComputerChoice();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "This is a draw!"
    } else if (playerSelection === "Rock" && computerSelection === "Paper") {
        return "Paper beats rock-- You lose!"
    } else if (playerSelection === "Rock" && computerSelection== "Scissors") {
        return "Rock beats scissors-- You win!"
    } else if (playerSelection === "Paper" && computerSelection === "Scissors") {
        return "Scissors beat rock-- You lose!"
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "Paper beats rock-- You win!"
    } 
}

let playerSelection = "Rock";
let computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));