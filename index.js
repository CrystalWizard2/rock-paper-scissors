function getComputerChoice(){
    let choice = Math.floor(Math.random() * Math.floor(3) + Math.ceil(1));
    if(choice==1) return "rock";
    if(choice==2) return "paper";
    console.log(choice);
    return "scissors";
}


function getHumanChoice(){
    let choice = prompt("Enter your choice:");
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

