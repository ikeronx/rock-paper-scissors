//computerPlay() function will randomly return either 'rock', 'paper', 'scissors'.
function computerPlay() {
    let choices = ['Rock', 'Paper', 'Scissors'];
    let compChoice = Math.floor(Math.random()*choices.length);
    let play = choices[compChoice];
    return play;
}
//global variables
let playerScore =0;
let computerScore = 0;

let body = document.querySelector('body');
let score = document.querySelector('.score-counter');
let results = document.querySelector('.results');

let rulesButton = document.querySelector('.game-rules')
    rulesButton.addEventListener('click', () => {
    alert("Man vs.Computer \n\n First player to score 5 points, wins!");
    })

//playRound() function takes two parameters 'playerSelection' & 'computerSelection
function playRound(playerSelection, computerSelection){
	if (playerSelection == 'rock') {
        if (computerSelection == 'Rock') {
            return 'Rock vs. Rock! It\'s a tie!';
        } else if (computerSelection == 'Paper') {
            return 'You lost! Paper covers rock!';
        } else if (computerSelection == 'Scissors') {
            return 'You won! Rock breaks scissors!';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'Rock') {
            return 'You won! Paper covers rock!';
        } else if (computerSelection == 'Paper') {
            return 'Paper vs. Paper! It\'s a tie!';
        } else if (computerSelection == 'Scissors') {
            return 'You lost! Scissors cut paper!';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'Rock') {
            return 'You lost! Rock smashes scissors!';
        } else if (computerSelection == 'Paper') {
            return 'You won! Scissors cut paper!';
        } else if (computerSelection == 'Scissors') {
            return 'Scissors vs. Scissors! It\'s a tie!';
        }
    }
}

//scoreCounter() keeps score & adds previous round's score (cumulative)
function scoreCounter() {
if (playerScore == 5) {
    body.removeChild(score);
    score.textContent = "Congratulations, you won! You scored " + playerScore + ", while the computer scored " + computerScore + ".";
    playerScore = 0;
    computerScore = 0;
    body.removeChild(results);
    body.appendChild(score);
    return;
  } else if (computerScore == 5) {
    body.removeChild(score);
    score.textContent = "You lost! The computer scored " + computerScore + ", while you scored " + playerScore + ". Better luck next time!";
    playerScore = 0;
    computerScore = 0;
    body.removeChild(results);
    body.appendChild(score);
    return;
  } else {
    return;
        }
}

//Add an event listener to the buttons that calls your playRound function with the correct playerSelection every time a button is clicked.
let rock = document.querySelector('#rock');
	rock.addEventListener('click', () => {
	let computerSelection = computerPlay();
	results.textContent = playRound('rock', computerSelection);
	body.appendChild(results);
if (computerSelection == 'Scissors') {
	playerScore += 1;
	score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	body.appendChild(score);
} else if (computerSelection == 'Paper') {
	computerScore += 1;
	score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	body.appendChild(score);
} else {
	score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	body.appendChild(score);
}
scoreCounter();
});
        
let paper = document.querySelector('#paper');
paper.addEventListener('click', () => {
	let computerSelection = computerPlay();
	results.textContent = playRound('paper', computerSelection);
	body.appendChild(results);
if (computerSelection == 'Rock') {
	 playerScore += 1;
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
 } else if (computerSelection == 'Scissors') {
	 computerScore += 1;
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
 } else {
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
	 }
scoreCounter();
});

let scissors = document.querySelector('#scissors');
	scissors.addEventListener('click', () => {
        let computerSelection = computerPlay();
	results.textContent = playRound('scissors', computerSelection);
	body.appendChild(results);
if (computerSelection == 'Paper') {
	 playerScore += 1;
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
 } else if (computerSelection == 'Rock') {
	 computerScore +=1;
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
 } else {
	 score.textContent = 'Player score: ' + playerScore + ' Computer score: ' + computerScore;
	 body.appendChild(score);
 }
 scoreCounter();
});
         
