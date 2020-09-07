console.log("Hello World");

//Define Variables
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var scoreCounter = document.getElementById("scorecounter");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var questionEl = document.getElementById("questiontext");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var secondsLeft = 60;
var points = 20;
var userScore = localStorage.getItem(points);


//Question Array

var questions = [
{
    question: "Commonly used data types DO NOT include ________.",
    choiceA: "Strings",
    choiceB: "Booleans",
    choiceC: "Numbers",
    choiceD: "Alerts",
    correct: "D"
},

{
    question: "A very useful tool during development and debugging for printing content to the debugger is _____.",
    choiceA: "JavaScript",
    choiceB: "Console Log",
    choiceC: "For Loops",
    choiceD: "Bash/Terminal",
    correct: "B"
},

{
    question: "String values must be enclosed within __________ when being assigned to variables.",
    choiceA: "Curly Brackets",
    choiceB: "Parentheses",
    choiceC: "Quotations",
    choiceD: "Commas",
    correct: "C"
},

{
    question: "Arrays in JavaScript can be used to store _______.",
    choiceA: "Numbers & Strings",
    choiceB: "Other Arrays",
    choiceC: "Booleans",
    choiceD: "All of the Above",
    correct: "D"
},

{
    question: "The condition in an if / else statement is enclosed within _____.",
    choiceA: "Parentheses",
    choiceB: "Curly Brackets",
    choiceC: "Square Brackets",
    choiceD: "Quotes",
    correct: "A"
},

]



//WHEN I click the start button
//THEN a timer starts and I am presented WITH a question

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
                alert("Game Over. You ran out of time!"); //Edit this to forward to "All Done Page"
            }
        }, 1000);
    }
    setTime();

}

//WHEN I answer a question
//THEN I am presented with another question




function setNextQuestion (){


}







//When I answer a question correctly
//Then I get points 

correctAnswerBtn.addEventListener("click", addPoints);

function addPoints () {
    points ++;

}


//WHEN I answer a question incorrectly
//THEN time is subtracted from the clock

wrongAnswer.addEventListener("click", addPenalty);

function addPenalty() {
    secondsLeft = -10;
}

//WHEN all questions are answered or the timer reaches 0
//THEN the game is over







//WHEN the game is over
//THEN I can save my initials and score






//------Play Code-----

//if (correctAnswerBtn) {
   // correctAnswerReply.style.display = "block";
   // correctAnswerReply.style.display - "none";
   // questionContainerA.style.display = "none";
    //questionContainerB.style.display = "block";

//} else {
   // wrongAnswerReply.style.display = "block";
   // wrongAnswerReply.style.display = "none";
   // questionContainerA.style.display = "none";
   // questionContainerB.style.display = "block";
//};