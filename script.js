

const totalScore = {computerScore: 0, playerScore: 0}

function getComputerChoice(){
    const rpsChoice = ['Rock','Paper','Scissors']
    const randomNumber = Math.floor(Math.random()*3);
    return rpsChoice[randomNumber];
}
function getResult(playerChoice, computerChoice){
    let score;
    if(playerChoice === computerChoice){
        score = 0;
    }else if(playerChoice == 'Rock' && computerChoice == 'Scissors'){
     score = 1;
    }else if(playerChoice == 'Paper' && computerChoice == 'Rock'){
        score = 1;
    }else if(playerChoice == 'Scissors' && computerChoice == 'Paper'){
        score = 1;
    } else {
        score = -1;
    }
    return score;
}

function showResult(score,playerChoice,computerChoice){
const resultDiv = document.getElementById('result');
const handsDiv = document.getElementById('hands');
const playerScoreDiv = document.getElementById('player-score')

if(score == -1){
    resultDiv.innerHTML = "<span style='color: red;'>Result: You Lost!</span>";
} else if(score == 0){
    resultDiv.innerHTML = "<span style='color: Yellow;'>Result: Draw</span>";
} else {
    resultDiv.innerHTML = "<span style='color: Green;'>Result: You Won!</span>";
}
handsDiv.innerText=`👱 ${playerChoice} vs 🤖 ${computerChoice}`

}

function onClickRPS(playerChoice){
        // console.log({playerChoice})
    const computerChoice = getComputerChoice();
    // console.log ({computerChoice})
    const score = getResult(playerChoice, computerChoice);


    showResult(score,playerChoice,computerChoice)
}
function playGame(){
    let rpsButtons = document.querySelectorAll('.rpsButton')
    // rpsButtons[0].onclick = () => console.log(rpsButtons[0].value);
                rpsButtons.forEach(rpsButton => {
        rpsButton.onclick = () => onClickRPS(rpsButton.value)
      })
      const endGameButton = document.getElementById('endGameButton')
    endGameButton.onclick=()=>endGame();
    }
    function endGame(){
        totalScore['playerScore'] = 0
        totalScore['computerScore'] = 0

        const resultDiv = document.getElementById('result');
        const handsDiv = document.getElementById('hands');
        
        resultDiv.innerHTML = 'Result';
        handsDiv.innerText = 'You vs Computer';
    }
playGame()