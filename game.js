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

let humanScore = 0;
let computerScore = 0;
let roundResult = "";

function playRound(humanChoise, computerChoise) {
    if (humanChoise === "paper" && computerChoise === "rock") {
        humanScore ++;
        return roundResult = "win";
    } else if (humanChoise === "paper" && computerChoise === "scissors") {
        computerScore ++;
        return roundResult = "lose";
    } else if (humanChoise === "rock" && computerChoise === "scissors") {
        humanScore ++;
        return roundResult = "win";
    } else if (humanChoise === "rock" && computerChoise === "paper") {
        computerScore ++;
        return roundResult = "lose";
    } else if (humanChoise === "scissors" && computerChoise === "paper") {
        humanScore ++;
        return roundResult = "win";
    } else if (humanChoise === "scissors" && computerChoise === "rock") {
        computerScore ++;
        return roundResult = "lose";
    } else {
        return roundResult = "draw";
    }
}

const container = document.createElement("div");
const displayResult = document.createElement("p");
displayResult.textContent = "Round result: ";
const displayScore = document.createElement("p");
displayScore.textContent = "Score is: ";
const displayFinalResult = document.createElement("p");
displayFinalResult.textContent = "";

const getRoundResult = function() {
    if (roundResult === "win") {
        displayResult.textContent = "You won a round!";
        displayScore.textContent = `Score is: ${humanScore} | ${computerScore}`;
    } else if (roundResult === "lose") {
        displayResult.textContent = "You lost a round";
        displayScore.textContent = `Score is: ${humanScore} | ${computerScore}`;
    } else {
        displayResult.textContent = "It's a draw";
        displayScore.textContent = `Score is: ${humanScore} | ${computerScore}`;
    }
};

const finishMatch = function() {
    if (humanScore === 5) {
            rockButton.setAttribute('disabled', '');
            paperButton.setAttribute('disabled', '');
            scissorsButton.setAttribute('disabled', '');
            return displayFinalResult.textContent =`You won the match! ${humanScore} | ${computerScore}`;
        } else if (computerScore === 5) {
            rockButton.setAttribute('disabled', '');
            paperButton.setAttribute('disabled', '');
            scissorsButton.setAttribute('disabled', '');
            return displayFinalResult.textContent =`You lost the match... ${humanScore} | ${computerScore}`;
        } else {
            return displayFinalResult.textContent = "";
        };
};

const rockButton = document.createElement("BUTTON");
rockButton.textContent = "Rock!";
rockButton.addEventListener("click", (e) => {
    humanChoise = "rock";
    playRound(humanChoise, getComputerChoise());
    getRoundResult();
    finishMatch();
});
const paperButton = document.createElement("BUTTON");
paperButton.textContent = "Paper!";
paperButton.addEventListener("click", (e) => {
    humanChoise = "paper";
    playRound(humanChoise, getComputerChoise());
    getRoundResult();
    finishMatch();
});
const scissorsButton = document.createElement("BUTTON");
scissorsButton.textContent = "Scissors!";
scissorsButton.addEventListener("click", (e) => {
    humanChoise = "scissors";
    playRound(humanChoise, getComputerChoise());
    getRoundResult();
    finishMatch();
});

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);
container.appendChild(displayResult);
container.appendChild(displayScore);
container.appendChild(displayFinalResult);
document.body.appendChild(container);

// old console version game function saved for learning purposes
/*function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoise();
        const computerSelection = getComputerChoise();
        console.log(computerSelection);
        console.log(humanSelection);
        playRound(humanSelection, computerSelection);
        console.log(`Computer's score:${computerScore}`);
        console.log(`Your score:${humanScore}`);
    }
    let matchResult;
    if (humanScore > computerScore){
        matchResult = "You won the match!";
    } else if (humanScore < computerScore) {
        matchResult = "You lost the match!";
    } else {
        matchResult = "It's a draw!";
    }
    return console.log(matchResult);
}*/