console.log("Hello World");

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
var gameOverEl = document.getElementById("gameOver");


//Question Variables
var questionEl = document.getElementById("questiontext");
var choiceA = document.getElementById("choiceA");
var choiceB = document.getElementById("choiceB");
var choiceC = document.getElementById("choiceC");
var choiceD = document.getElementById("choiceD");

var initials = document.getElementById("initials");
var highscoresdiv = document.getElementById("highscoresdiv");
var clearBtn = document.getElementById("clear");
var goBackBtn = document.getElementById("goback");

var position = 0;
var secondsLeft = 75;
var timerInterval;
//WHEN I click the start button
//THEN a timer starts and I am presented WITH a question

function startGame() {
    console.log("Game Started");
    startContainer.style.display = "none";
    quizEl.style.display = "block";
    
    //Set the timer
    timerEl.textContent = secondsLeft;
    timerInterval = setInterval(setTime, 1000)
    //Set up loadQuiz Function
    loadQuiz(position)

}

function setTime() {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    //If the timer reaches 0 then the game is over
    if(secondsLeft <= 0) {
        clearInterval(timerInterval);
        gameOver();
    }
}

function loadQuiz(currentQuestion) {
    var quiz = quizData[currentQuestion];

    if(currentQuestion < quizData.length){
        questionEl.textContent = quiz.question; 
        choiceA.textContent = quiz.choices[0];
        choiceB.textContent = quiz.choices[1];
        choiceC.textContent = quiz.choices[2];
        choiceD.textContent = quiz.choices[3];
        choiceA.setAttribute("value", "0");
        choiceB.setAttribute("value", "1");
        choiceC.setAttribute("value", "2");
        choiceD.setAttribute("value", "3");
        choiceA.onclick = questionClick;
        choiceB.onclick = questionClick;
        choiceC.onclick = questionClick;
        choiceD.onclick = questionClick;
    } else {
        gameOver();
    }
}

function questionClick() {
    console.log("I was clicked.");
    console.log(this);
    userChoice(this.value);
}

 
function userChoice(choice){
    if(parseInt(choice) === quizData[position].correct) {
        console.log("Answer is correct.");
        scoreCounter = scoreCounter + 20;
        correctAnswer.style.display = "block";
    } else {
        console.log("Answer is wrong.");
        secondsLeft = secondsLeft - 10;
        timerEl.textContent = secondsLeft;
        wrongAnswer.style.display = "block";
    }
    position++
    //correctanswer.style.display = "none";
    //wrongAnswer.style.display = "none";
    loadQuiz(position)
}

function gameOver() {
    quizEl.style.display = "none";
    recordScore.style.display = "block";
    document.getElementById("userscore").textContent = timerEl.textContent
    clearInterval(timerInterval)
}


function saveHighScore(event){
    event.preventDefault()
    var initials = document.getElementById("userinitialstext").value
    var score = timerEl.textContent
    //create user object from submission
    var allUsers = JSON.parse(localStorage.getItem("users")) || []; 
    var user = {name: initials, score: score}
    //var user = initials + ": " + userScore;
    allUsers.push(user)
    allUsers.sort((a,b) => b.score - a.score)
    console.log(user);
    //need to aggregate the total score of the user and define it here.
    localStorage.setItem("users", JSON.stringify(allUsers));
}

function highscores(){
    startContainer.style.display = "none";
    recordScore.style.display = "none";
    highscoresdiv.style.display = "block";
    var allScores  = document.getElementById("highscoresentries") 
    var allUsers = JSON.parse(localStorage.getItem("users")) || []; 
    //allUsers.map((user, index) => {
    //    var scoreName = user.name + ": " + user.score
    //})
    for(let i = 0; i < allUsers.length; i++){
        var scoreName = allUsers[i].name + ": " + allUsers[i].score
        var liEl = document.createElement("li")
        liEl.textContent = scoreName
        allScores.append(liEl)
    }
}

//IF user clicks on Start button it starts game
startButton.addEventListener("click", startGame);
//Submit initials
submitBtn.addEventListener("click", (e) => saveHighScore(e))
//If user clicks on Highscores button from Quiz Start Page
highscoresBtn.addEventListener("click", highscores);

