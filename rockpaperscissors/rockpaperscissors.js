//function to randomize return of rock,paper,scissors for playing against computer
let computerSelection=["rock","paper","scissors"];

//initialize empty variable for user input...
//for single round in console, give playerSelection a value

playerSelection;

//randomize computerSelection of the array above
function getComputerChoice(computerSelection){
    return computerSelection[(Math.floor(Math.random ()* computerSelection.length))];
}

//single round game--to change move,give playerSelection a value before calling this function
//another way to change move... edit parameter i.e. playerSelection='rock'

function playRound(playerSelection,computerSelection){
    
    console.log(`You chose ${playerSelection}`);
    console.log(`Me:${playerSelection} | Computer:${getComputerChoice(computerSelection)}`);
   
    switch(getComputerChoice(computerSelection)){
        case 'rock':
            if(playerSelection=getComputerChoice(computerSelection)){
                console.log ('tie')
            }else if(playerSelection='scissors'){
                console.log('rock beats scissors');
            }else if(playerSelection='paper'){
                console.log('paper beats rock');
            }else{
                console.log('invalid input');
            }
}

    //return winner-loser-draw
   
}




//multi round game
function game(){
    
    for (let i=1;i<=5;i++){
        let playerSelection= prompt('Rock,Paper,Scissors?');
        console.log('---------------');
        console.log(`Round ${i}`);
        console.log(playRound(playerSelection,computerSelection));
        //return winner
        console.log(`Round ${i} winner is me`);
        console.log('---------------');
    }
    return;
}


//rock-rock :tie
//paper-paper:tie
//scissors-scissors:tie
//if strings match each other, conclude to a tie


//rock-paper:paper wins
//paper-rock:paper wins
//for cpu vs player, if rock against paper, conclude paper wins

//rock-scissors: rock wins
//scissors-rock:rock wins
//for cpu vs player, if rock against scissors, conclude rock wins

//paper-scissors:scissors wins
//scissors-paper:scissors wins
//for cpu vs player, if scissors against paper, conclude scissors wins