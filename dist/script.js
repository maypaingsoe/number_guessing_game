var guessCount = 0;
function submitGuess() {
  var randomNum = Math.floor(Math.random() * 100) + 1;
  var output = document.getElementById("output");
  var guessNum = document.getElementById("guessNum").value;

  if (guessCount < 5) {
    if (guessNum < randomNum) {
      guessCount++;
      alert(
        "Your guess is less than the real value!"
      );
    } else if (guessNum > randomNum) {
      guessCount++;
      alert("Your guess is greater than the real value!");
    } else {
      alert(
        "CONGRATULATIONS!!! YOU GUESSED IT RIGTH IN" + guessCount + "GUESS"
      );
    }
  } else {
    output.innerHTML = "PLEASE TRY AGAIN!!!";
    output.style.backgroundColor = "red";
  }
}