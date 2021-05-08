const guessForm = document.getElementById("guessForm");
const inputGuess = document.getElementById("inputGuess");
const check = document.getElementById("check");

let valid = false;

function validate() {
  let state = inputGuess.value;
  state.length > 0 ? (valid = true) : (valid = false);
  if (!valid) {
    return console.log("cannot be empty");
  }
  if (!isNaN(state)) {
    return console.log("cannot be number");
  }
  // check for number
  console.log(typeof state);
  return console.log("good");
}

check.addEventListener("click", function (e) {
  e.preventDefault();
  validate();
});
