var startButtonEL = document.getElementById("start");
var questionBoxEl = document.getElementById("questionBox");
var timerEL = document.getElementById("timer");
var questionEL = document.getElementById("questions");
var answers1EL = document.getElementById("answerButton1");
var answers2EL = document.getElementById("answerButton2");
var answers3EL = document.getElementById("answerButton3");
var answers4EL = document.getElementById("answerButton4");
var myQuestions = ["Which animal can fly?", "What color is the sky?","How many named oceans are in the world?"];
var myAnswers1 = ["cat","blue","4","?"];
var myAnswers2 = ["dog","green","5","?"];
var myAnswers3 = ["bird","purple","6","?"];
var myAnswers4 = ["elephant","orange","7","?"];


function showQuestions() {
    questionEL.innerText = myQuestions[0];
    // for(var i; i >= myQuestions.length; i++){}

}

function showAnswers() {
    answers1EL.innerText = myAnswers1[0];
    answers2EL.innerText = myAnswers2[0];
    answers3EL.innerText = myAnswers3[0];
    answers4EL.innerText = myAnswers4[0];

}

function timerCountdown() {
    var timeLeft = 60;
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
    startButtonEL.addEventListener('click', function(startQuiz) {
        startButtonEL.style.display = 'none';
        questionBoxEl.style.display = 'inline';
        timerCountdown()
        showQuestions()
        showAnswers()
        // myAnswers1.addEventListener("click", function()) {

        // }
    
    });
}



startQuiz();


