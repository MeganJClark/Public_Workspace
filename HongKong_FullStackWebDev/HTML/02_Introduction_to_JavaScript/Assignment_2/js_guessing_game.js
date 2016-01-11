var colors = ["blue", "cyan", "gold", "gray", "green", "magenta", "orange", "red", "white", "yellow"];
var index;
var target;
var finished = false;
var guess = 0;

function do_game() {
  // get random color
  index = Math.floor(Math.random() * colors.length) + 1;
  target = colors[index];
  // display popup and collect input
  while (!finished) {
    input = prompt("I am thinking of one of these colors:\n\nblue, cyan, gold, gray, green, magenta, orange, red, white, yellow\n\nWhat color am I thinking of?");
    guess++;
    // check the input against the target;
    alert(input + ":" + target);
    finished = checkGuess();
  }
}

function checkGuess() {
  // is the input one of the colors in the array? if not, re-prompt
  if (colors.indexOf(input) == -1 || input == null) {
    alert("You have not chosen one of the colors listed. Please choose one of those colors.");
    return false;
  }
  if (input > target) {
    alert("Your guess is alphabetically higher than the target. Please try again.");
    return false;
  }
  if (input < target) {
    alert("Your guess is alphabetically lower than the target. Please try again.");
    return false;
  }
  // if all checks pass we assume input == target
  alert("Correct! It only took you " + guess + " tries to guess the right answer.");
  // set background color
  var myBody = document.getElementsByTagName("body")[0];
  myBody.style.background = input;
  return true;
}
