//randomize rock,paper,scissors
function getComputerChoice() {
    const moves = ['rock', 'paper', 'scissors'];
    return moves[Math.floor(Math.random() * moves.length)];
}

//single iteration function with game rules/conditions
function playRound(playerSelection, computerSelection) {
    

    if (playerSelection === 'rock' && computerSelection === 'paper') {
        console.log('You lose. Paper beats rock.');
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        console.log('You win. Rock beats scissors.');
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        console.log('You win. Paper beats rock.');
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        console.log('You lose. Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        console.log('You win. Scissors beats paper.');
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        console.log('You lose. Rock beats scissors.');
    } else if (playerSelection === computerSelection){
        //tie game if both selections are the same
        console.log('Tie.');  
    } else {
         playerSelection !== 'rock'||'paper'||'scissors'
        //null and undefined exception msg
        console.log('Invalid entry.'); 

    }
        return `You:${playerSelection} | Computer:${computerSelection}`;
}
//5 iteration game function using for loop
function game() {
    for (i = 1; i <= 5; i++) {
        const playerSelection = prompt('Rock,Paper or Scissors?').toLowerCase();  
        const computerSelection = getComputerChoice();
        console.log(`Round ${i}`);
        console.log(playRound(playerSelection, computerSelection));
        
    } if(i=5)
    
    {
        console.log('Game Over');       
    }
}
