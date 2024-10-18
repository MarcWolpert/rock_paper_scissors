const options=['rock','paper','scissors'];
function getComputerChoice(choices){
    return choices[Math.floor(Math.random()*choices.length)];
}
function getHumanChoice(playerMove){
    return playerMove;
}
let humanScore=0;
let computerScore=0;
function determineWinner(choice_computer, choice_human){
    switch (choice_human){
        case 'rock':
            if (choice_computer==='rock'){
                return 0;
            } else if (choice_computer==='scissors'){
                return 1;
            } else {
                return 0;
            }
            break;
        case 'scissors':
            if (choice_computer==='rock'){
                return -1;
            } else if (choice_computer==='scissors'){
                return 0;
            } else {
                return 1;
            }
            break;
        case 'paper':
            if (choice_computer==='rock'){
                return 1;
            } else if (choice_computer==='scissors'){
                return -1;
            } else {
                return 0;
            }
            break;
        default:
            break;
    }
}
function playRound(choices,playerMove){
    computerChoice=getComputerChoice(choices);
    humanChoice=getHumanChoice(playerMove);
    let output=determineWinner(computerChoice,humanChoice);
    const outputMessage=document.querySelector('div p');
    switch(output){
        case -1:
            outputMessage.textContent=`You lose! ${computerChoice} beats ${humanChoice}`;
            break;
        case 0:
            outputMessage.textContent=`Tie! Computer and player chose the same thing`;
            break;
        case 1: 
            outputMessage.textContent=`You win! ${humanChoice} beats ${computerChoice}`;
            break;
        default:
            break;
    }
    return output;
}


const body=document.querySelector('body');
let playerScore=0;

//make three buttons
let buttons=[];
for (let i=0; i<3; i++){
    const button=document.createElement('button');
    button.textContent=options[i];
    button.addEventListener('click',()=>{
        const computerScoreText=document.getElementsByClassName('computerScore')[0];
        const playerScoreText=document.getElementsByClassName('playerScore')[0];
        switch(playRound(options,options[i])){
            case -1:
                computerScore+=1;
                computerScoreText.textContent=`Computer: ${computerScore}`;
                break;
            case 1:
                humanScore+=1;
                playerScoreText.textContent=`Player: ${humanScore}`;
                break;
            default:
                break;
        }
        if (humanScore===5 || computerScore===5){
            if (humanScore>computerScore){
                document.getElementsByClassName('roundResult')[0].textContent="Congratulations, you've won!";
            } else {
                document.getElementsByClassName('roundResult')[0].textContent="Aww Shucks, you've lost :O";
            }
            computerScore=0;
            humanScore=0;
            const computerScoreText=document.getElementsByClassName('computerScore')[0];
            const playerScoreText=document.getElementsByClassName('playerScore')[0];
            computerScoreText.textContent=`Computer: ${computerScore}`;
            playerScoreText.textContent=`Player: ${humanScore}`;
        }
    })
    body.appendChild(button);
}     

const resultsDiv=document.createElement('div');
const roundResult=document.createElement('p');
roundResult.className="roundResult";
roundResult.textContent="No rounds played yet.";
resultsDiv.appendChild(roundResult);

const runningScorePlayer=document.createElement('p');
runningScorePlayer.textContent="Player: 0";
runningScorePlayer.className='playerScore';

const runningScoreComputer=document.createElement('p');
runningScoreComputer.className='computerScore'
runningScoreComputer.textContent="Computer: 0";

resultsDiv.appendChild(runningScorePlayer);
resultsDiv.appendChild(runningScoreComputer);
body.appendChild(resultsDiv);



