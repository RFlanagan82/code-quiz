console.log("Hello World");

//WHEN I click the start button
//THEN a timer starts and I am presented WITH a question

var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var questionContainerA = document.getElementById("questioncontainerA");
var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");
var secondsLeft = 60;

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Game Started");
    startContainer.style.display = "none";
    questionContainerA.style.display = "block";
    function setTime() {
        var timerInterval = setInterval(function(){
            secondsLeft--;
            timerEl.textContent = secondsLeft;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                alert("Game Over. You ran out of time!");
            }
        }, 1000);
    }
    setTime();

}






//WHEN I answer a question
//THEN I am presented with another question






//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock







//WHEN all questions are answered or the timer reaches 0
//THEN the game is over







//WHEN the game is over
//THEN I can save my initials and score