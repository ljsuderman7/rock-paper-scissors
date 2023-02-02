// returns the computers choice of "rock", "paper", or "scissors"
function getComputerChoice() {
    // creates a random number between 0-2
    let choice = Math.floor(Math.random() * 3)

    if (choice == 0) {
        return "Rock"
    }
    else if (choice == 1) {
        return "Paper"
    }
    else {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    let result = ""
    if (playerSelection == "Rock") {
        if (computerSelection == "Rock"){
            result = "Tie"
        }
        else if (computerSelection == "Paper"){
            result = "You lose"
        }
        else {
            result = "You win"
        }
    }

    return result
}

const playerSelection = "Rock"
const computerSelection = getComputerChoice()
console.log(playRound(playerSelection, computerSelection))
