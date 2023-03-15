
//HTML document links 
const quizDocumentEl = document.querySelector('#quiz'),
const startBtnEl = document.querySelector('#startbtn'),
const questionsEl = document.querySelector('#questions'),
const answersEl = document.querySelector('#answers'),
const timer = document.querySelector('#timer'),
const scoreEl = document.querySelector('#score');

//Timer default count 
let secondsLeft = 10;

startBtnEl.addEventListener('click', function() {
    console.log("BUTTON CLICKED!");
});
//Playing Quiz function
function playQuiz() {

   //start button, prevents refresh, hides button
   event.preventDefault();
    //log to make sure it works
    console.log("Started");

    startBtnEl.classList.add('hide');
    
    questionsEl.classList.remove('hide');
    //calls for timer to start

    //displayQuestion(0)

    //timer();


};

//function timer(){

//const timerInterval = setInterval(function() {
  //  secondsLeft --;
//console.log('Second Left:', secondsLeft);
//if(secondsLeft === 0) {
   // clearInterval(timerInterval)

//}
//displayQuestion(questionIndex[currentQuestionIndex]);

//}, 1000);


//}










//Questions and answers 
//const questionIndex = [
   // {
       // question: "What does CSS stand for?",
     //   answer:["Cascading Style Sheets", "Customise Style Sheets", "Creative Style Sheets", "Contextual Style Sheets"],
     //   correctAnswer: "Cascading Style Sheets" ,
   // },
    {
     //   question: "How do you select an Element from a HTML file, in JS?" ,
    //    answer: [".getElId()", ".getElementbyId()", ".selectID()", "You can't"],
    //    correctAnswer: ".getElementbyId()" ,
    //},
    //{
    //    question: "What Primitive type is TRUE/FALSE?",
     //   answer: ["String", "Number", "Null", "Boolean"] ,
     //   correctAnswer: "Boolean",
   // },
   // {
    //    question: "How do you select a class or ID from a CSS file, in JS?",
    //    answer: [ ".cssselector()", ".classidgrab()", ".querySelector()", "None of the above" ],
    //    correctAnswer: ".querySelector()",
   // },
    //{
    //    question: "Java and Javascript are the same thing",
    //    answer: ["True", "False"],
   //     correctAnswer: "False",
   // },
   // {
   //     question: "Arrays in Javascript can be used to store:" ,
    //    answer: ["b"],
    //    correctAnswer: "All of the Above",
    //},
    
   // ];
    
   // function answerChosen() {
    //    console.log('Answer Chosen');


   // }
   // answersEl.addEventListener('click', answerChosen);