const handleSubmit = (event) => {
  event.preventDefault();

  guessesCount++;

  const inputNumber = document.querySelector(`input[type="number"]`);

  if (Number(inputNumber.value) === randomNumber) {
    document.querySelector(".guessing-form").classList.add("hide");
    document.querySelector(".result").classList.remove("hide");
    document.querySelector("#guesses-count").innerText = guessesCount;
  }
};

const form = document.querySelector("form");
form.addEventListener("submit", handleSubmit);

const handleReset = () => {
  document.querySelector(".guessing-form").classList.remove("hide");
  document.querySelector(".result").classList.add("hide");
  document.querySelector("input[type='number']").value = "";
  guessesCount = 0;
  randomNumber = randInt();
};

const resetButton = document.querySelector("#reset-btn");
resetButton.addEventListener("click", handleReset);

const randInt = (max = 10, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

let randomNumber = randInt();
let guessesCount = 0;
