
function getComputerChoise() {
    let choise = Math.round(Math.random() * 2);
    if (choise === 0) {
        return "Rock!";
    } else if (choise === 1) {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

function getHumanChoise() {
    let choise = prompt("Choose! rock, paper or scissors:");
    if (choise === "rock") {
        return "Rock!";
    } else if (choise === "paper") {
        return "Paper!";
    } else {
        return "Scissors!";
    }
}

let humanScore = 0;
let computerScore = 0;

console.log(getComputerChoise());
console.log(getHumanChoise());

console.log(computerScore);
console.log(humanScore);