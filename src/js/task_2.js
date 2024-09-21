const number = parseInt(Math.random() * (100 - 1) + 1);
const input = document.querySelector("#guessField");
const text = document.querySelector("#guessResult");
const button = document.querySelector("#button");
const checkGuess = () => {
  if (input.value === toString(number)) {
    text.textContent = "Вітаю! Ви вгадали число!";
  } else {
    text.textContent = "Згадане число не вірно";
  }
};
button.addEventListener("click", checkGuess);