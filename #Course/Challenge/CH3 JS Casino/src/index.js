const playForm = document.querySelector("form");

function onPlaySubmit() {
    event.preventDefault();
    const generatedNumber = parseInt(document.querySelector("#generate").value);
    const guessNumber = parseInt(document.querySelector("#guess").value);
    if (guessNumber > generatedNumber) {
        alert("Please guess a number within the range!");
    } else {
        const machineNumber = Math.floor(Math.random()*generatedNumber);//random number chosen by machine
        resultText.innerText = `You chose: ${guessNumber}, the machine chose: ${machineNumber}`;
        if (guessNumber === machineNumber) {
            finalResult.innerText = "You won!"
        } else {
            finalResult.innerText = "You lost!"
        }
    }
};

const resultText = document.querySelector("#result");
const finalResult = document.querySelector("#announce");
/*
function playResult() {
    const guessNumber = document.querySelector("#guess");
    const generatedNumber = document.querySelector("#generate")


}

*/

playForm.addEventListener("submit", onPlaySubmit);


/* Nico Answer
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");
const maxNumber = document.getElementById("maxNumber");

function handleGuessSubmit(e) {
  e.preventDefault();
  const guessInput = guessForm.querySelector("input");
  if (guessInput.value === "" && maxNumber === "") {
    return;
  }
  const max = maxNumber.value;
  const random = Math.ceil(Math.random() * max);
  const userGuess = parseInt(guessInput.value, 10);
  const resultSpan = result.querySelector("span");
  resultSpan.innerHTML = `
  You chose: ${userGuess},
  the machine chose: ${random}.<br />
  <strong>${userGuess === random ? "You won!" : "You lost!"}</strong>
  `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
 */