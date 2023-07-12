const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const selectBtns = document.querySelectorAll(".selectBtn");

for (const button of selectBtns) {
  button.addEventListener("click", () => {
    const player = button.textContent;
    const computer = computerTurn();

    playerText.textContent = `Player: ${player}`;
    computerText.textContent = `Computer: ${computer}`;
    resultText.textContent = check(player, computer);
  });
}

function computerTurn() {
  const options = ["Rock", "Paper", "Scissors"];
  const rand = Math.floor(Math.random() * options.length);
  return options[rand];
}

function check(player, computer) {
  if (player === computer) {
    return "Draw!";
  } else if (computer === "Rock") {
    return player === "Paper" ? "You Win!" : "You Lose!";
  } else if (computer === "Paper") {
    return player === "Scissors" ? "You Win!" : "You Lose!";
  } else if (computer === "Scissors") {
    return player === "Rock" ? "You Win!" : "You Lose!";
  }
}
