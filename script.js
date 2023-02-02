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