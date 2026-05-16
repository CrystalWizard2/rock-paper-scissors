function getComputerChoice(){
    let choice = Math.floor(Math.random() * Math.floor(3) + Math.ceil(1));
    if(choice==1) return "rock";
    if(choice==2) return "paper";
    console.log(choice);
    return "scissors";
}
console.log(getComputerChoice());