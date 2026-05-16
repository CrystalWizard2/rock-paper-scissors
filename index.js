function getComputerChoice(){
    let choice = Math.floor(Math.random() * Math.floor(3) + Math.ceil(1));
    if(choice==1) return "rock";
    if(choice==2) return "paper";
    return "scissors";
}


function getHumanChoice(){
    let choice = prompt("Enter your choice:").trim().toLowerCase();
    if(choice=="rock"){
        return "rock";
    }
    if(choice=="paper"){
        return "paper";
    }
    if(choice=="scissors"){
        return "scissors";
    }

}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice){
    if(humanChoice=="rock" && computerChoice=="paper"){
        console.log("You lose! Paper beats Rock.");
        computerScore = computerScore + 1;
    }
    if(humanChoice=="paper" && computerChoice=="scissors"){
        console.log("You lose! Scissors beat Paper.");
        computerScore = computerScore + 1;
    }
    if(humanChoice=="scissors" && computerChoice=="rock"){
        console.log("You lose! Rock beats Scissors.");
        computerScore = computerScore + 1;
    }
    
    if(humanChoice=="rock" && computerChoice=="scissors"){
        console.log("You win! Rock beats Scissors!");
        humanScore = humanScore + 1;
    }
    if(humanChoice=="paper" && computerChoice=="rock"){
        console.log("You win! Paper beats Rock.");
        humanScore = humanScore + 1;
    }
    if(humanChoice=="scissors" && computerChoice=="paper"){
        console.log("You win! Scissors beat Paper.");
        humanScore = humanScore + 1;
    }
    return "Round over.";
}




function playGame(){
    for(let i=1;i<=5;i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);            
    }
    if(humanScore>computerScore){
        console.log("You've won!");
    }
    if(humanScore>computerScore){
        console.log("You've lost!");
    }
    if(humanScore==computerScore){
        console.log("It's a tide!");
    }
}

playGame();