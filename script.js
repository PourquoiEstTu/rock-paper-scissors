function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    // console.log("The number chosen is: " + randNum);
    switch (randNum) {
        case 0: 
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
        default:
            return "The Computer Could Not Choose!";
    }
}

function playRound(playerChoice, compChoice) {
    let lChoice = playerChoice.toLowerCase();
    if (lChoice === "rock") {
        switch (compChoice) {
            case "rock":
                return "Draw!";
            case "paper":
                return "You Lose! Paper beats Rock!";
            case "scissors":
                return "You Win! Rock beats Scissors";
        }
    } 
    else if (lChoice === "paper") {
        switch (compChoice) {
            case "rock":
                return "You Win! Paper beats Rock!";
            case "paper":
                return "Draw!";
            case "scissors":
                return "You Lose! Scissors beats Paper!";
        }
    }
    else { //option for scissors
        switch (compChoice) {
            case "rock":
                return "You Lose! Rock beats Scissors!";
            case "paper":
                return "You Win! Scissors beats Paper";
            case "scissors":
                return "Draw!";
        }
    }
}

// const playerSelection = "scissors";
// const compSelection = getComputerChoice();
// console.log(compSelection);
// console.log(playRound(playerSelection, compSelection));