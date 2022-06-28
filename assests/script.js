var startButtonEL = document.getElementById("start");
var questionBoxEl = document.getElementById("questionBox");



function startQuiz() {
    startButtonEL.addEventListener('click', function(startQuiz) {
        startButtonEL.style.display = 'none';
        questionBoxEl.style.display = 'inline';
    
    });
}

startQuiz();

