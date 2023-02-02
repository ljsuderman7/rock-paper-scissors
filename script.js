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

// plays one round
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

    if (playerSelection == "Paper") {
        if (computerSelection == "Paper"){
            result = "Tie"
        }
        else if (computerSelection == "Scissors"){
            result = "You lose"
        }
        else {
            result = "You win"
        }
    }

    if (playerSelection == "Scissors") {
        if (computerSelection == "Scissors"){
            result = "Tie"
        }
        else if (computerSelection == "Rock"){
            result = "You lose"
        }
        else {
            result = "You win"
        }
    }

    return result
}

function game(){
    let playerWins = 0
    let computerWins = 0

    for (let i = 0; i < 5; i++){
        const playerSelection = prompt("Enter Selection (Rock, Paper, or Scissors)")
        const computerSelection = getComputerChoice()

        let result = playRound(playerSelection, computerSelection)

        if (result == "You lose") {
            computerWins++
            result += `, ${computerSelection} beats ${playerSelection}`
        }
        else if (result == "You win") {
            playerWins++
            result += `, ${playerSelection} beats ${computerSelection}`
        }

        console.log(`${result}. \nPlayer Wins: ${playerWins}\nComputer Wins: ${computerWins}`)
    }
}
game()
