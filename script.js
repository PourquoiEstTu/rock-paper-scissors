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
    else if (lChoice === "scissors") { 
        switch (compChoice) {
            case "rock":
                return "You Lose! Rock beats Scissors!";
            case "paper":
                return "You Win! Scissors beats Paper";
            case "scissors":
                return "Draw!";
        }
    }
    else return "Please pick one of rock, paper, or scissors";
}

let playerWins = 0;
let compWins = 0; 
let round = 0;

const resultDiv = document.querySelector("div");
resultDiv.textContent = "Let the game begin!";

const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", () => {
    let playerSelection = btn.textContent;
    let compSelection = getComputerChoice();
    let result = playRound(playerSelection, compSelection);

    if (result.toLowerCase().slice(0, 8) === "you win!") {
        playerWins++;
        round++;
        resultDiv.textContent = `You win round ${round}! The score is ${playerWins} - ${compWins} to you!`;
    }
    else if (result.toLowerCase().slice(0, 8) === "you lose") {
        compWins++;
        round++;
        resultDiv.textContent = `You lose round ${round}! The score is ${playerWins} - ${compWins} to you!`;
    }
    else if (result.toLowerCase().slice(0, 8) === "draw!") {
        round++;
        resultDiv.textContent = `You drew round ${round}! The score is ${playerWins} - ${compWins} to you!`;
    }

    if (playerWins === 5) {
        resultDiv.textContent = `You win the game! The score is ${playerWins} - ${compWins} to you!`;
        playerWins = 0;
        compWins = 0;
        round = 0;
        resultDiv.textContent += "Time for a new game!"
    }
    else if (compWins === 5) {
        resultDiv.textContent = `You lose the game. The score is ${playerWins} - ${compWins} to you.`;
        playerWins = 0;
        compWins = 0;
        round = 0;
        resultDiv.textContent += "Time for a new game."
    }
}));
