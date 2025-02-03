console.log("Rock, Paper, Scissors Game!");

const choices = ["rock", "paper", "scissors"];
let humanScore = 0;
let computerScore = 0;

const elements = {
  result: document.getElementById("result"),
  humanScore: document.getElementById("humanscore"),
  computerScore: document.getElementById("computerscore"),
  humanChoice: document.getElementById("humanchoice"),
  computerChoice: document.getElementById("computerchoice"),
};

const getComputerChoice = () => choices[Math.floor(Math.random() * 3)];

const updateScore = (winner) => {
  if (winner === "human") {
    elements.humanScore.textContent = ++humanScore;
  } else if (winner === "computer") {
    elements.computerScore.textContent = ++computerScore;
  }
};

const displayChoices = (humanChoice, computerChoice) => {
  elements.humanChoice.textContent = `You: ${capitalize(humanChoice)}`;
  elements.computerChoice.textContent = `Computer: ${capitalize(
    computerChoice
  )}`;
};

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

const playRound = (humanChoice, computerChoice) => {
  displayChoices(humanChoice, computerChoice);

  if (humanChoice === computerChoice) {
    elements.result.textContent = "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    elements.result.textContent = `You Win! ${capitalize(
      humanChoice
    )} beats ${computerChoice}`;
    updateScore("human");
    if (humanScore === 5) {
      elements.humanScore.textContent = humanScore;
      alert(
        "You win the game!\nYou: " + humanScore + " Computer: " + computerScore
      );
      resetGame();
    }
  } else {
    elements.result.textContent = `You Lose! ${capitalize(
      computerChoice
    )} beats ${humanChoice}`;
    updateScore("computer");
    if (computerScore === 5) {
      elements.computerScore.textContent = computerScore;
      alert(
        "You lose the game!\nYou: " + humanScore + " Computer: " + computerScore
      );
      resetGame();
    }
  }
};

choices.forEach((choice) => {
  document.getElementById(choice).addEventListener("click", () => {
    playRound(choice, getComputerChoice());
  });
});

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  elements.result.textContent = "";
  updateScoreDisplay();
}

function updateScoreDisplay() {
  elements.humanScore.textContent = humanScore;
  elements.computerScore.textContent = computerScore;
}
