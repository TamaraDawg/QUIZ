
//HTML document links 
const quizDocumentEl = document.querySelector('#quiz')
const startBtn = document.querySelector('#startbtn')
const questionsEl = document.querySelector('#questions')
const answersEl = document.querySelector('#answers')
const timer = document.querySelector('#timer')
const scoreEl = document.querySelector('#score')
const questionContainerEl = document.getElementById('question-container')
//Timer default count 
let secondsLeft = 10;


//Questions and answers 
var questionIndex = [
    {
        question: "What does CSS stand for?",
        answer:["Cascading Style Sheets", "Customise Style Sheets", "Creative Style Sheets", "Contextual Style Sheets"],
        correctAnswer: "Cascading Style Sheets" , correct: true
    },
    {
        question: "How do you select an Element from a HTML file, in JS?" ,
        answer: [".getElId()", ".getElementbyId()", ".selectID()", "You can't"],
        correctAnswer: ".getElementbyId()", correct: true ,
    },
    {
        question: "What Primitive type is TRUEFALSE?",
        answer: ["String", "Number", "Null", "Boolean"] ,
        correctAnswer: "Boolean", correct: true,
    },
    {
        question: "How do you select a class or ID from a CSS file, in JS?",
        answer: [ ".cssselector()", ".classidgrab()", ".querySelector()", "None of the above" ],
        correctAnswer: ".querySelector()", correct: true,
    },
    {
        question: "Java and Javascript are the same thing",
        answer: ["True", "False"],
        correctAnswer: "False", correct: true,
    },
    {
        question: "Arrays in Javascript can be used to store:" ,
        answer: ["b"],
        correctAnswer: "All of the Above", correct: true
    },
    
    ];


startBtn.addEventListener('click', playQuiz);
    
console.log("BUTTON CLICKED!");

//randomised questions
let questionShuffle, currentQuestionIndex;

//Playing Quiz function
 function playQuiz() {

   //start button, prevents refresh, hides button
    //.preventDefault();
    //log to make sure it works
     console.log("Started");
     
     startBtn.classList.add('hide');
     //so start button hides on small screens
    startBtn.classList.add('hide-small')
     questionShuffle = questionIndex.sort(() => Math.random() - .5)
     currentQuestionIndex = 0

    
    questionContainerEl.classList.remove('hide');
    nextQuestion()
    //calls for timer to start

    //timer();


};










function nextQuestion(){
    reset()
    showQuestion(questionShuffle[currentQuestionIndex]);
}


function  showQuestion(question) {
    questionsEl.innerText = question.question;
    question.answer.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer;
        button.classList.add('btn')
        if (question.correctAnswer === answer) {
            button.dataset.correct = true
        }
        button.addEventListener('click', answerSelect)
        answersEl.appendChild(button)
    })
}


function answerSelect (e) {


}

function reset() {
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}
//- function timer(){

//-var timerInterval = setInterval(function() {
   //- secondsLeft --;
//-console.log('Second Left:', secondsLeft);
//-if(secondsLeft === 0) {
  //-  clearInterval(timerInterval)

//-}
//- displayQuestion(questionIndex[currentQuestionIndex]);

//-}, 1000);


//-}

 
function answerChosen() {
    console.log('Answer Chosen');


}
 answersEl.addEventListener('click', answerChosen);0