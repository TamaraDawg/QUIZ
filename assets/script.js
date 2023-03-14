
//HTML document links 
const quizDocument = document.getElementById('quiz')
const startBtn = document.getElementById('startbtn')
const questions = document.getElementById('questions')
const answers = document.getElementById('answers')
const timer = document.getElementById('timer')
const score = document.getElementById('score')

//Timer default count 
let secondsLeft = 10;


startBtn.addEventListener('click', function() {
   //start button, prevents refresh, hides button
    startBtn.preventDefault();
    startBtn.hidden = true;
    //calls for timer to start
    timer()


});

function timer(){
secondsLeft --;



}