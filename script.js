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

// const playerSelection = "scissors";
// const compSelection = getComputerChoice();
// console.log(compSelection);
// console.log(playRound(playerSelection, compSelection));

function game() {
    let playerWins = 0;
    let compWins = 0; 
    let playerSelection;
    let compSelection;
    let result;
    // let string = playRound("rock", getComputerChoice());
    alert("Let the game begin!");
    let round = 1;
    while (round <= 5) {
        playerSelection = prompt("Rock, paper, or scissors?");
        compSelection = getComputerChoice()
        // console.log(compSelection);
        result = playRound(playerSelection, compSelection);

        if (result.toLowerCase().slice(0, 8) === "you win!") {
            playerWins++;
            alert(`You won round ${round}`);
            round++;
        }
        else if (result.toLowerCase().slice(0, 8) === "you lose") {
            compWins++;
            alert(`You lost round ${round}`);
            round++;
        }
        else if (result.toLowerCase().slice(0, 8) === "Draw!") {
            playerWins++;
            compWins++; 
            alert("You drew");
            round++;
        }
        else {
            alert(result);
        }
        // console.log(string);
        // console.log(string.slice(0,8));
        // console.log("Round: " + round);
        // console.log("playerWins: " + playerWins);
        // console.log("compWins: " + compWins);
    }

    if (playerWins > compWins) alert("You Win!");
    else if (compWins > playerWins) alert("You Lose.");
    else return alert("You Drew.");
}

game();