
//HTML document links 
const quizDocumentEl = document.querySelector('#quiz')
const startBtn = document.querySelector('#startbtn')
const questionsEl = document.querySelector('#questions')
const answersEl = document.querySelector('#answers')
const timer = document.querySelector('#timer')
const scoreEl = document.querySelector('#score')
const questionContainerEl = document.getElementById('question-container')
const endPage = document.getElementById('end-screen')
const endofquizresult = document.getElementById('finalscore')

let highScore = 0;
//Timer default count 
let secondsLeft = 30;
//default score count
let totalscore = 0;
endPage.classList.add('hide');
//Questions and answers 
var questionIndex = [
    {
        question: "What does CSS stand for?",
        answer: ["Cascading Style Sheets", "Customise Style Sheets", "Creative Style Sheets", "Contextual Style Sheets"],
        correctAnswer: "Cascading Style Sheets",
    },
    {
        question: "How do you select an Element from a HTML file, in JS?",
        answer: [".getElId()", ".getElementbyId()", ".selectID()", "You can't"],
        correctAnswer: ".getElementbyId()",
    },
    {
        question: "What Primitive type is 'TRUE' or 'FALSE'?",
        answer: ["String", "Number", "Null", "Boolean"],
        correctAnswer: "Boolean",
    },
    {
        question: "How do you select a class or ID from a CSS file, in JS?",
        answer: [".cssselector()", ".classidgrab()", ".querySelector()", "None of the above"],
        correctAnswer: ".querySelector()",
    },
    {
        question: "Java and Javascript are the same thing",
        answer: ["True", "False"],
        correctAnswer: "False",
    },
    {
        question: "Arrays in Javascript can be used to store:",
        answer: ["numbers and strings", "other arrays", "booleans", "All of the Above"],
        correctAnswer: "All of the Above",
    },

];


//randomised questions
let questionShuffle, currentQuestionIndex;


function playTimer() {
    timer.textContent = secondsLeft;
}
setInterval(playTimer, 1000);



startBtn.addEventListener('click', playQuiz);

//console.log("BUTTON CLICKED!");
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
    nextQuestion();
    minusTime();
    //timer starts decrementing
    function minusTime() {
        const timerInterval = setInterval(function () {
            secondsLeft--;
            //ensures timer cannot go into negatives
            if (secondsLeft <= 0) {
                clearInterval(timerInterval);
                secondsLeft = 0;
            }
        }, 1000);
    }


};


function nextQuestion() {
    reset();
    if (currentQuestionIndex < questionShuffle.length) {
        showQuestion(questionShuffle[currentQuestionIndex]);
        currentQuestionIndex++;
    } else {
        endQuiz();
    }

}



function showQuestion(question) {
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

function reset() {
    while (answersEl.firstChild) {
        answersEl.removeChild(answersEl.firstChild)
    }
}


function answerSelect(e) {
    const answerChosen = e.target
    const correct = answerChosen.dataset.correct;
    statusClass(answerChosen, correct);
    if (!correct) {
        secondsLeft -= 5;
        //also checks that secondsLeft won't be sent into negatives 
        if (secondsLeft < 0) {
            secondsLeft = 0;
        }
        Array.from(answersEl.children).forEach(button => {
            if (button !== answerChosen) {
                if (!button.classList.contains('wrong')) {
                    statusClass(button, false);
                    if (button.dataset.correct) {
                        statusClass(button, true);

                    }
                }
            }
        });
    } else {
        //if correct, add 10 to score
        totalscore += 10;
        //update score
        scoreEl.textContent = totalscore;
    }
    answerChosen.classList.add('selected')
    if (currentQuestionIndex === questionShuffle.length - 1) {
        endQuiz() 
    }else{ 
        setTimeout(() => {
            nextQuestion();
        }, 1000);
}


    //highscore shows, end of quiz




    function statusClass(element, correct) {
        clearStatusClass(element)
        if (correct) {
            element.classList.add('correct')
        } else {
            element.classList.add('wrong')
        }
    }

    function clearStatusClass(element) {
        element.classList.remove('btn')
        element.classList.remove('correct')
        element.classList.remove('wrong')
    }
}


function endQuiz() {
    //questions and answers hidden
    console.log('quiz has ended');
    endPage.classList.remove('hide');
    quizDocumentEl.classList.add('hide');
    endofquizresult.textContent = 'Your final score is: ' +  totalscore;

}

// function gameOver () {
//console.log('player lost')
//}

