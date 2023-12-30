/*
let playerPoints = 0;
let computerPoints = 0;

getComputerChoise = () =>{

    let computerChoise = Math.floor(Math.random() *3)
    if (computerChoise == 0) {
        return "rock";
    } else if(computerChoise == 1) {
        return "paper";
        
    } else {
        return "scissor";
    }
   
}



playRound = (playerSelection, computerSelection) => {

    if (playerSelection === computerSelection ) {
        console.log("tie");
        playerPoints ++ 
        computerPoints ++;

        
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        console.log("you lose, paper win rock ");
        return (computerPoints ++);

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
        console.log("you win, rock win scissor");
        return (playerPoints ++);

    } else if(playerSelection === "paper" && computerSelection === "scissor"){
        console.log("you lose, scissor win paper ");
        return (computerPoints ++);

    } else if(playerSelection === "paper" && computerSelection === "rock"){
        console.log("you win, papaer win rock");
        return (playerPoints++);

    } else if(playerSelection === "scissor" && computerSelection === "rock"){
        console.log("you lose, rock win scissor");
        return (computerPoints ++);

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
        console.log("you win, scissor win paper");
        return (playerPoints++);

    }

}
resetGame = () =>{
    playerPoints = 0;
    computerPoints = 0;
}

game = () =>{
        
    for (let i = 0; playerPoints < 5 && computerPoints < 5; i++) {
        const playerSelection = prompt("");
        const computerSelection = getComputerChoise();
        console.log(`Rodada ${i+1}:`);
        playRound(playerSelection, computerSelection);

        console.log(`placar atual - jogador: ${playerPoints}, computador: ${computerPoints}`)
         
        
        }

        console.log("jogo concluido")

        if (playerPoints > computerPoints) {
            console.log("Você venceu o jogo!");
        } else if (playerPoints < computerPoints) {
            console.log("Você perdeu o jogo.");
        } else {
            console.log("O jogo terminou em empate.");
        }

        playerPoints = 0;
        computerPoints = 0;




    }
game();

*/


// new code ui

let playerPoints = 0;
let computerPoints = 0;








