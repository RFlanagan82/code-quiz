console.log("Hello World");

//Define Variables
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var scoreCounter = document.getElementById("scorecounter");
var highscoresBtn = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var choiceBtnEl = document.getElementById("btngroup")
var quizEl = document.getElementById("quiz");
var scoreCounter = document.getElementById("scorecounter");
var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");
var submitBtn = document.getElementById("submitbtn");
var recordScore = document.getElementById("recordscore");
var gameOver = document.getElementById("gameOver");
var position = 0;

var initials = document.getElementById("initials");
var highscoresdiv = document.getElementById("highscoresdiv");
var clearBtn = document.getElementById("clear");
var goBackBtn = document.getElementById("goback");


//If user clicks on Highscores button from Quiz Start Page
highscoresBtn.addEventListener("click", highscores);

function highscores(){
    event.preventDefault();
    startContainer.style.display = "none";
    highscoresdiv.style.display = "block";
    var user = JSON.parse(localStorage.getItem("user")) | []; 
}

//WHEN I click the start button
//THEN a timer starts and I am presented WITH a question

startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Game Started");
    startContainer.style.display = "none";
    quizEl.style.display = "block";
    
    var secondsLeft = 75;

    function setTime() {
        var timerInterval = setInterval(function(){
            secondsLeft--;
        timerEl.textContent = secondsLeft;
    
            //If the timer reaches 0 then the game is over
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
        choices: ["Strings", "Booleans","Numbers", "Alerts"],
        correct: 3
    },
    
    {
        question: "A very useful tool during development and debugging for printing content to the debugger is _____.",
        choices: ["JavaScript","Console Log", "For Loops", "Bash/Terminal"],
        correct: 1
    },
    
    {
        question: "String values must be enclosed within __________ when being assigned to variables.",
        choices: ["Curly Brackets","Parentheses", "Quotations","Commas"],
        correct: 2
    },
    
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["Numbers & Strings", "Other Arrays", "Booleans", "All of the Above"],
        correct: 3
    },
    
    {
        question: "The condition in an if / else statement is enclosed within _____.",
        choices:["parentheses","curly brackets","square brackets","quotes"],
        correct: 0
    },
    
    ];

    //Set up variables
    var questionEl = document.getElementById("questiontext");
    var choiceA = document.getElementById("choiceA");
    var choiceB = document.getElementById("choiceB");
    var choiceC = document.getElementById("choiceC");
    var choiceD = document.getElementById("choiceD");

    //Set up loadQuiz Function
    loadQuiz(0)

    function loadQuiz(currentQuiz) {
        var quiz = quizData[currentQuiz];


        //Determine when to stop advancing questions (if/else conditional?)
        if (questionEl !== 5) {
        //Loading the current quiz questions. DO NOT MOVE.
        questionEl.textContent = quiz.question; 
        choiceA.textContent = quiz.choices[0];
        choiceB.textContent = quiz.choices[1];
        choiceC.textContent = quiz.choices[2];
        choiceD.textContent = quiz.choices[3];
        choiceA.onclick = questionClick;
        choiceB.onclick = questionClick;
        choiceC.onclick = questionClick;
        choiceD.onclick = questionClick;


        //WHEN all questions are answered the game is over and it's time to for user to log their score.
        } else {
        gameOver();
        }
        function gameOver() {
            quizEl.style.display = "none";
            recordScore.style.display = "block";

            //WHEN the game is over
            //THEN I can save my initials and score
            submitBtn.addEventListener("click", function(event){
                event.preventDefault();

            })

            //create user object from submission
            var user = "initials" + userScore;
            console.log(user);
            //need to aggregate the total score of the user and define it here.
            localStorage.setItem(JSON.stringify(user));
        }
    }


    //Set up questionClick function to log button click and advance question.

    function questionClick() {
        console.log("I was clicked.");
        console.log(this);
        position++;
        loadQuiz(position);
        


    //What needs to happen when  a user answers a question correctly or incorrectly
    //Can't get this to work.
    choiceBtnEl.addEventListener("click",function(questionClick){
        event.stopPropagation();
        userChoice();
    })
   
   function userChoice(){
    if(userChoice === quizData.correct) {
        console.log("Answer is correct.");
        scoreCounter = scoreCounter + 20;
        correctAnswer.style.display = "block";
    } else {
        console.log("Answer is wrong.");
        secondsLeft = secondsLeft - 10;
        wrongAnswer.style.display = "block";

    }

}

}}