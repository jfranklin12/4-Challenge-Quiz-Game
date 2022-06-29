// global variables.
var startButtonEL = document.getElementById("start");
var questionBoxEl = document.getElementById("questionBox");
var timerEL = document.getElementById("timer");
var questionEL = document.getElementById("questions");
var answers1EL = document.getElementById("answerButton1");
var answers2EL = document.getElementById("answerButton2");
var answers3EL = document.getElementById("answerButton3");
var answers4EL = document.getElementById("answerButton4");
var gameOverEL = document.getElementById("gameOver");
var saveButtonEL = document.getElementById("save");
var initialsInput = document.getElementById("initials");
var showScoreEL = document.getElementById("score");
var highscore = document.getElementById("highscore");
var i = 0
var timeLeft = 60
var score = 0
var timeInterval = 0

var myQuestions = [
    {
        question: "Which is not a JavaScript Data type?",
        answers: {
            a: "number",
            b: "food",
            c: "string",
            d: "boolean",
        },
        correctAnswer: "food"
    },
    {
        question: "What does 'var' stand for?",
        answers: {
            a: "variable",
            b: "variant",
            c: "variety",
            d: "variance",
        },
        correctAnswer: "variable"
    },
    {
        question: "When an operator's value is NULL, the typeof returned by the unary operator is:",
        answers: {
            a: "Boolean",
            b: "Undefined",
            c: "Object",
            d: "Interger",
        },
        correctAnswer: "Object"
    },
    {
        question: "What symbols are used to store an array?",
        answers: {
            a: "()",
            b: "{}",
            c: "''",
            d: "[]",
        },
        correctAnswer: "[]"
    },
    {
        question: "Arrays in JavaScript are defined by which of the following statements?",
        answers: {
            a: "It is an ordered list of values.",
            b: "It is an ordered list of objects.",
            c: "It is an ordered list of string.",
            d: "It is an ordered list of functions.",
        },
        correctAnswer: "It is an ordered list of values."
    },

]


function showQuestions() {
    questionEL.innerText = myQuestions[i].question;
    answers1EL.innerText = myQuestions[i].answers.a;
    answers2EL.innerText = myQuestions[i].answers.b;
    answers3EL.innerText = myQuestions[i].answers.c;
    answers4EL.innerText = myQuestions[i].answers.d;

    answers1EL.addEventListener('click', checkAnswer)
    answers2EL.addEventListener('click', checkAnswer)
    answers3EL.addEventListener('click', checkAnswer)
    answers4EL.addEventListener('click', checkAnswer)

}

// timer function
function timerCountdown(event) {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEL.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            // End Quiz Function
            timerEL.textContent = 'Times up!';
            clearInterval(timeInterval);
            questionBoxEl.style.display = 'none'
            gameOverEL.style.display = 'inline'

        }
    }, 1000);
}

// Function to check if the answser is correct and actions at the end of quiz
function checkAnswer(event){
    if (myQuestions[i].correctAnswer === event.target.innerText) {
        console.log("correct!");
        score++;
    } else { 
        timeLeft -= 10
        console.log("incorrect!")
    }
    i++ 
    if (i<myQuestions.length) {
    showQuestions()
    } else {
        questionBoxEl.style.display = 'none'
        gameOverEL.style.display = 'inline'
        timerEL.style.display = 'none'
    }
}

// Function to start the quiz
function startQuiz() {
    startButtonEL.style.display = 'none';
    questionBoxEl.style.display = 'inline';
    timerCountdown();
    showQuestions();
}

startButtonEL.addEventListener('click', function() {
    startQuiz()
});

// function to save high score to local storage
saveButtonEL.addEventListener("click", function(event){
    var player = {
        initials: initialsInput.value.trim(),
        score: score,
    }
    localStorage.setItem("player", JSON.stringify(player))

});

