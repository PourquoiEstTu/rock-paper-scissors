function getComputerChoice() {
    let randNum = Math.floor(Math.random() * 3);
    console.log("The number chosen is: " + randNum);
    switch (randNum) {
        case 0: 
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
        default:
            return "The Computer Could Not Choose!";
    }
}

console.log(getComputerChoice());

function playRound(playerChoice, compChoice) {
    
}