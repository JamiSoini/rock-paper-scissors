
function getComputerChoise() {
    let choise = Math.round(Math.random() * 2);
    if (choise === 0) {
        return console.log("Rock!");
    } else if (choise === 1) {
        return console.log("Paper!");
    } else {
        return console.log("Scissors!");
    }
}

getComputerChoise();