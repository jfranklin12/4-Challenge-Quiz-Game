var startButtonEL = document.getElementById("start");
var questionBoxEl = document.getElementById("questionBox");
var timerEL = document.getElementById("timer");
var questionEL = document.getElementById("questions");
var answersEL = document.getElementById("button")
var myQuestions = [
    {
        question: "Which animal can fly?",
        answers: {
            a: 'cat',
            b: 'dog',
            c: 'bird',
            d: 'elephant'
        },
        correctAnswer: 'c'        
    },
    {
        question: "What color is the sky?",
        answers: {
            a: 'blue',
            b: 'green',
            c: 'purple',
            d: 'orange'
        },
        correctAnswer: 'a'        
    },
    {
        question: "How many named oceans are in the world?",
        answers: {
            a: '4',
            b: '5',
            c: '6',
            d: '7'
        },
        correctAnswer: 'b'        
    },
]

function showQuestions() {


}

function timerCountdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function() {
        if (timeLeft > 1) {
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
    
    });
}



startQuiz();


