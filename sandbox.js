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
    
    ]

      //WHEN I answer a question
    //THEN I am presented with another question


    var currentQuiz = 0;

    function loadQuiz();

    function loadQuiz() {
    var currentQuizData = quizData.currentQuiz;

    questionEl.textContent = currentQuizData.question;
    choiceA.textContent = quizData.choiceA;
    choiceB.textContent = quizData.choiceB;
    choiceC.textContent = quizData.choiceC;
    choiceD.textContent = quizData.choiceD;
    }

    choiceA.addEventListener("click",()=> {
        currentQuiz++;
    })

    var answer = quizData.correct;

    for(var i = 0; i < questions.length; i++){
        loadQuiz();


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
    

    //WHEN all questions are answered or the timer reaches 0
    //THEN the game is over

        function gameOver () {
        console.log("Game Over!");
        questionContainer.style.display = "none";
        recordScore.style.display = "block";
        }

    
    //WHEN the game is over
    //THEN I can save my initials and score