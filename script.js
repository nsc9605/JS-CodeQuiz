// Define elements
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');
const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');
const timeCount = document.querySelector('.timer');
const timeLine = document.querySelector('.header .time_line');
const timer = document.getElementById('timer');
// const progress = document.getElementById('progress');
const scoreContainer = document.getElementById('score-container');
const rulesContainer = document.getElementById('rules-container');

const questions = [
  {
    question: 'Commonly used data types DO NOT include:',
    answers: [
      { text: 'Strings', correct: false },
      { text: 'Booleans', correct: false },
      { text: 'Alerts', correct: true },
      { text: 'Numbers', correct: false }
    ]
  },
  { 
    question: 'A very useful tool used during development and debugging for printing content to the debugger is:', 
    answers: [
      { text: 'function var()', correct: false},
      { text: 'console.log()', correct: true },
      { text: 'setInterval()', correct: false },
      { text: 'var sum = 0', correct: false },
    ]
  },
  {
    question: 'String values must be enclosed withing _______.',
    answers: [
      { text: 'Single Quotes ""', correct: true },
      { text: 'Curly Brackets {}', correct: false },
      { text: 'Parenthesis ()', correct: false },
      { text: 'Square Brackets []', correct: false }
    ]
  },
  {
    question: 'The condition in an if / else statement is enclosed within ________.',
    answers: [
      { text: '{ }', correct: false },
      { text: '( )', correct: true },
      { text: '" "', correct: false },
      { text: '< >', correct: false }
    ]
  },
  {
    question: 'What is the most frequently used loop in Javascript?',
    answers: [
      { text: 'While Loop', correct: false },
      { text: 'For Loop', correct: true },
      { text: 'Do-While Loop', correct: false },
      { text: 'For-In Loop', correct: false }
    ]
  },
  { 
    question: 'How does a FOR loop start?', 
    answers: [
      { text: 'for i = 1 to 5', correct: false },
      { text: 'for (i <= 5; i++)', correct: false },
      { text: 'for (i = 0; i <= 5)', correct: false },
      { text: 'for (i = 0; i < 5; i++)', correct: true }
      
    ]
  }
]

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let shuffledQuestions, currentQuestionIndex;
const startingMinutes = 2;
let time = startingMinutes * 60;

// Which way to set timer for countdown???
function startTimer(){
  counter = setInterval(timer, 1000);
  function timer(){
      timeCount.textContent = time;
      time--;
      if(time < 9){
        let addZero = timeCount.textContent;
        timeCount.textContent = '0' + addZero;
      }
      if(time < 0){
        clearInterval(counter);
        timeCount.textContent = '00';
      }
  }
}



// HIDE INSTRUCTIONS CONTAINER WHEN START BUTTON IS CLICKED

// let startButton = document.querySelector('start-btn');
// let rulesContainer = document.querySelector('rules');
// if (startButton.clicked) rulesContainer.style.display = 'hide';
// else rulesContainer.style.display = null; 

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
  

})



function startGame() {
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  startTimer()
  setNextQuestion();
    // if (startButton.clicked) rulesContainer.add = 'none';
    // else rulesContainer.button.style.display = null;
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach(answer => {
    const button = document.createElement('button');
    button.innerText = answer.text;
    button.classList.add('btn');
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
    answerButtonsElement.appendChild(button);
  })
}

// ADD LOCAL STORAGE TO HOLD SCORES

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add('hide');
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}


function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct);
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide');
  } else {
    startButton.innerText = 'Restart'; // bring used to container with high scores and option to restart
    startButton.classList.remove('hide');
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    element.classList.add('correct');
  } else {
    element.classList.add('wrong');
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct');
  element.classList.remove('wrong');
}

function setup() {
  noc
}

// TO DO: add a function for high scores: a place to write initials, store locally as well as reset after last question






// const timerEl = document.getElementById('timer');

// setInterval(updateTimer, 1000);

// function updateTimer() {
//   const minutes = Math.floor(time / 60);
//   let seconds = time % 60;

//   seconds = seconds < 2 ? '0' + seconds : seconds;

//   timerEl.innerHTML = $(minutes); $(seconds);
//   time--;
// }


// // Or this way?
// function startTimerLine(time){
//   counterLine = setInterval(timer, 29);
//   function timer(){
//       time += 1;
//       timeLine.style.width = time + 'px';
//       // if(time < );
//   }
// }