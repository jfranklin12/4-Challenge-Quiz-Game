var startEL = document.getElementById("#start");



function startQuiz() {
    console.log('QuizStarted')

}

startEL.addEventListener('click', startQuiz) {
    
    var hide = startQuiz.target;

    if (hide.matches("#start")) {
        var state = hide.getAttribute("data-state");

        if(state === "hidden") {
            hide.textcontent = hide.dataset.button;
            hide.dataset.state = "hidden";
        }

    }
}