console.log("Hello World");

//Define Variables
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var scoreCounter = document.getElementById("scorecounter");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var questionEl = document.getElementById("questiontext");
var quizEl = document.getElementById("quiz");
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var choiceD = document.getElementById("D");
var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");
var submitBtn = document.getElementById("submitbtn");
var recordScore = document.getElementById("recordscore");
var secondsLeft = 60;
var userScore = score; //need to aggregate the total score of the user and define it here.


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
    var scoreCounter = 0;
    function setTime() {
        var timerInterval = setInterval(function(){
            secondsLeft--;
            timerEl.textContent = secondsLeft;
    
            if(secondsLeft === 0) {
                clearInterval(timerInterval);
                gameOver();
            }
        }, 1000);
    }
    
    //WHEN I answer a question
    //THEN I am presented with another question

    quizEl.style.display = "block";
    for(var i = 0; i < questions.length; i++){
        renderQuestion();

        function renderQuestion() { // I can't get the question title and buttons to work.
            questions.innerHTML = q.question;
            choiceA.innerHTML = q.choiceA;
            choiceB.innerHTML = q.choiceB;
            choiceC.innerHTML = q.ChoiceC;
            choiceD.innerHTML = q.ChoiceD;
        

            var answer = question.correct

            //When I answer a question correctly
            //Then I get points 
            if (answer) {
            console.log("Answer is correct.");
            scoreCounter + 20;
            correctAnswer.style.display = "block";
            }

            //WHEN I answer a question incorrectly
            //THEN time is subtracted from the clock
            else {
            console.log("Answer is wrong.");
            secondsLeft = -10;
            wrongAnswer.style.display = "block";
            }
        }
    }

    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over

        function gameOver () {
        console.log("Game Over!");
        questionContainer.style.display = "none";
        recordScore.style.display = "block";
        }

    
    //WHEN the game is over
    //THEN I can save my initials and score


    }




    







