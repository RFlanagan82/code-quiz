console.log("Hello World");

//WHEN I click the start button
//THEN a timer starts and I am presented WITH a question

var startButton = document.getElementById("start-btn");
var timer = document.getElementById("countdowntimer");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var questionContainerA = document.getElementById("questioncontainerA");
var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("Game Started");
    startContainer.style.display = "none";
    questionContainerA.style.display = "block";

}





//WHEN I answer a question
//THEN I am presented with another question






//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock







//WHEN all questions are answered or the timer reaches 0
//THEN the game is over







//WHEN the game is over
//THEN I can save my initials and score