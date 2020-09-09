console.log("Hello World");

//Define Variables
var startButton = document.getElementById("start-btn");
var timerEl = document.getElementById("countdowntimer");
var scoreCounter = document.getElementById("scorecounter");
var highscores = document.getElementById("highscoresBtn");
var startContainer = document.getElementById("startbox");
var choiceBtnEl = document.getElementById("btngroup")
var quizEl = document.getElementById("quiz");
var scoreCounter = document.getElementById("scorecounter");
var correctAnswer = document.getElementById("correctanswer");
var wrongAnswer = document.getElementById("wronganswer");
var submitBtn = document.getElementById("submitbtn");
var recordScore = document.getElementById("recordscore");

var position = 0;
var userScore = JSON.parse(localStorage.getItem("initials")) | [] 
var initials = document.getElementById("initials");





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
    }

    function questionClick() {
        console.log("I was clicked.");
        console.log(this);
        position++;
        loadQuiz(position);
    }
    /*
  
    //When I answer a question correctly
    //Then I get points 


    /*if() 
            
            //have it check for correct after that.
            {
                console.log("Answer is correct.");
                scoreCounter = scoreCounter + 20;
                correctAnswer.style.display = "block";


            //WHEN I answer a question incorrectly
            //THEN time is subtracted from the clock
            } else {
                console.log("Answer is wrong.");
                secondsLeft = secondsLeft - 10;
                wrongAnswer.style.display = "block";
            }
        });*/
    


    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over





    //WHEN the game is over
    //THEN I can save my initials and score
    
    localStorage.setItem("initals",JSON.stringify(userScore));

    

//need to aggregate the total score of the user and define it here.


}