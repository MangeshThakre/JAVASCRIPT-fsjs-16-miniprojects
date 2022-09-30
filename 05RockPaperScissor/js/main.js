let rounds = 3;
let userScore = 0;
let computerScore = 0;

const userScoreVal = document.querySelector("#userScoreVal");
const compScoreVal = document.querySelector("#compScoreVal");

const resultUserStat = document.querySelector("#result-user-stat");
const resultCompStat = document.querySelector("#result-comp-stat");
const resultFinalStat = document.querySelector("#result-final-stat");

const choiceArr = document.querySelectorAll(".choice");

function process(userChoise) {
  resultFinalStat.textContent = "Winner :";
  const computerChoise =
    choiceArr[Math.floor(Math.random() * 3)].firstElementChild.getAttribute(
      "alt"
    );

  //display choise
  resultUserStat.textContent = "User : " + userChoise.toUpperCase();
  resultCompStat.textContent = "Computer : " + computerChoise.toUpperCase();

  if (userChoise === computerChoise) {
    return;
  }

  if (
    (userChoise == "rock" && computerChoise == "scissors") ||
    (userChoise == "paper" && computerChoise == "rock") ||
    (userChoise == "scissors" && computerChoise == "paper")
  ) {
    userScore++;
    if (userScore == rounds) {
      resultFinalStat.textContent = "Winner : USER";
      userScoreVal.textContent = 0;
      compScoreVal.textContent = 0;
      userScore = 0;
      computerScore = 0;
      return;
    } else {
      return (userScoreVal.textContent = userScore);
    }
  }

  if (
    (userChoise == "scissors" && computerChoise == "rock") ||
    (userChoise == "rock" && computerChoise == "paper") ||
    (userChoise == "paper" && computerChoise == "scissors")
  ) {
    computerScore++;
    if (computerScore == rounds) {
      resultFinalStat.textContent = "Winner : COMPUTER";
      userScoreVal.textContent = 0;
      compScoreVal.textContent = 0;
      userScore = 0;
      computerScore = 0;
      return;
    } else {
      return (compScoreVal.textContent = computerScore);
    }
  }
}





function choise() {
  choiceArr.forEach((e) => {
    e.addEventListener("click", () => {
      process(e.firstElementChild.getAttribute("alt"));
    });
  });
}
choise();
