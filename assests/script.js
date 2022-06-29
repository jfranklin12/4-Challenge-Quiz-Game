var startButtonEL = document.getElementById("start");
var questionBoxEl = document.getElementById("questionBox");
var timerEL = document.getElementById("timer");
var questionEL = document.getElementById("questions");
var answers1EL = document.getElementById("answerButton1");
var answers2EL = document.getElementById("answerButton2");
var answers3EL = document.getElementById("answerButton3");
var answers4EL = document.getElementById("answerButton4");
var gameOverEL = document.getElementById("gameOver")



var myQuestions = [
    {
        question: "Which animal can fly?",
        answers: {
            a: "cat",
            b: "dog",
            c: "bird",
            d: "elephant",
        },
        correctAnswer: "bird"
    },
    {
        question: "What color is the sky?",
        answers: {
            a: "blue",
            b: "green",
            c: "purple",
            d: "orange",
        },
        correctAnswer: "blue"
    },
    {
        question: "How many names oceans are in the world?",
        answers: {
            a: "4",
            b: "5",
            c: "6",
            d: "7",
        },
        correctAnswer: "5"
    },

]
var i = 0
var timeLeft = 60

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

function checkAnswer(event){
    if (myQuestions[i].correctAnswer === event.target.innerText) {
        console.log("correct!");
    } else { 
        timeLeft -= 10
        console.log("incorrect!")
    }
    i++ 
    if (i<myQuestions.length){
    showQuestions()
    } else {
        // create game over div in html to connect
        questionBoxEl.style.display = 'none'
        gameOverEL.style.display = 'inline'
    }
}

// for user to type in text box and save high score- 
// local store to high scores page



function timerCountdown() {
    var timeInterval = setInterval(function() {
        if (timeLeft > 0) {
            timerEL.textContent = 'Timer: ' + timeLeft;
            timeLeft--;
        } else {
            timerEL.textContent = 'Times up!';
            clearInterval(timeInterval);
            // End Quiz Function
        }
    }, 1000);
}

function startQuiz() {
    startButtonEL.style.display = 'none';
    questionBoxEl.style.display = 'inline';
    timerCountdown();
    showQuestions();
}

startButtonEL.addEventListener('click', function() {
    startQuiz()
})







// function playQuiz(){
// answers1EL.addEventListener("click", function(nextQuestion))
