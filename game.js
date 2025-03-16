
function getComputerChoise() {
    let choise = Math.round(Math.random() * 2);
    if (choise === 0) {
        return "rock";
    } else if (choise === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoise() {
    let choise = prompt("Choose! rock, paper or scissors:");
    choise = choise.toLowerCase();
    if (choise === "rock") {
        return "rock";
    } else if (choise === "paper") {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "paper" && computerChoise === "rock") {
        return console.log("You win!");
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        return console.log("You lose! ;(");
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        return console.log("You win!");
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        return console.log("You lose! ;(");
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        return console.log("You win!");
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        return console.log("You lose! ;(");
    } else {
        return console.log("It's a draw!");
    }
}

const humanSelection = getHumanChoise();
const computerSelection = getComputerChoise();

playRound(humanSelection, computerSelection);

console.log(computerSelection);
console.log(humanSelection);

let humanScore = 0;
let computerScore = 0;

console.log(`Computer's score:${computerScore}`);
console.log(`Your score:${humanScore}`);