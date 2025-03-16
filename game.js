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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "paper" && computerChoise === "rock") {
        humanScore ++;
        return console.log("You win!");
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        computerScore ++;
        return console.log("You lose! ;(");
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        humanScore ++;
        return console.log("You win!");
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        computerScore ++;
        return console.log("You lose! ;(");
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        humanScore ++;
        return console.log("You win!");
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        computerScore ++;
        return console.log("You lose! ;(");
    } else {
        return console.log("It's a draw!");
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoise();
        const computerSelection = getComputerChoise();
        console.log(computerSelection);
        console.log(humanSelection);
        playRound(humanSelection, computerSelection);
        console.log(`Computer's score:${computerScore}`);
        console.log(`Your score:${humanScore}`);
    }
}

console.log(playGame());