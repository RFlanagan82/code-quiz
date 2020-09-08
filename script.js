console.log("Hello World");
console.log("start-btn");

//Define Variables
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var scoreCounter = document.getElementById("scorecounter");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");

var quizEl = document.getElementById("quiz");

var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");
var submitBtn = document.getElementById("submitbtn");
var recordScore = document.getElementById("recordscore");

var userScore = score; //need to aggregate the total score of the user and define it here.




    //WHEN I click the start button
    //THEN a timer starts and I am presented WITH a question

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Game Started");
    startContainer.style.display = "none";
    quizEl.style.display = "block";
    
    var secondsLeft = 60;

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

    setTime();

    
    //WHEN I answer a question
    //THEN I am presented with another question

    //QuizData Array

var quizData = [
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
    
    ];

    //Set up variables
    var questionEl = document.getElementById("questiontext");
    var choiceA = document.getElementById("choiceA");
    var choiceB = document.getElementById("choiceB");
    var choiceC = document.getElementById("choiceC");
    var choiceD = document.getElementById("choiceD");

    //Set up loadQuiz Function
    var currentQuiz = 0;

    loadQuiz(0);

    function loadQuiz(currentQuiz) {
    var quiz = quizData[currentQuiz];

        //Loading the current quiz questions. DO NOT MOVE.
    questionEl.textContent = quiz.question; 
    choiceA.textContent = quiz.choiceA;
    choiceB.textContent = quiz.choiceB;
    choiceC.textContent = quiz.choiceC;
    choiceD.textContent = quiz.choiceD;
    }



    //When I answer a question correctly
    //Then I get points 

    var scoreCounter = 0;



    //WHEN I answer a question incorrectly
    //THEN time is subtracted from the clock


    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over





    //WHEN the game is over
    //THEN I can save my initials and score

}