
//HTML document links 
const quizDocumentEl = document.getElementById('quiz')
const startBtnEl = document.getElementById('startbtn')
const questionsEl = document.getElementById('questions')
const answersEl = document.getElementById('answers')
const timer = document.getElementById('timer')
const scoreEl = document.getElementById('score')

//Timer default count 
let secondsLeft = 10;

//Playing Quiz function
startBtnEl.addEventListener('click', function() {
   //start button, prevents refresh, hides button
    startBtnEl.preventDefault();
    startBtnEl.hidden = true;
    //calls for timer to start
    timer()


});

function timer(){

const timerInterval = setInterval(function() {
    secondsLeft --;

if(secondsLeft === 0) {
    clearInterval(timerInterval)

}
}, 1000);
displayQuestion(questionIndex[currentQuestionIndex]);

}

//Questions and answers 
const questionIndex = [
    {
        question: "What does CSS stand for?",
        answer:["Cascading Style Sheets", "Customise Style Sheets", "Creative Style Sheets", "Contextual Style Sheets"],
        correctAnswer: "Cascading Style Sheets" ,
    },
    {
        question: "How do you select an Element from a HTML file, in JS?" ,
        answer: ,
        correctAnswer: "getElementById()" ,
    },
    {
        question: "What Primitive type is TRUE/FALSE?",
        answer:,
        correctAnswer: "Boolean",
    },
    {
        question: "How do you select a class or ID from a CSS file, in JS?",
        answer:,
        correctAnswer: ".querySelector()",
    },
    {
        question: "Java and Javascript are the same thing",
        answer: ["True", "False"],
        correctAnswer: "False",
    },
    {
        question: "Arrays in Javascript can be used to store:" ,
        answer:,
        correctAnswer: "All of the Above",
    },
    
    ];
    