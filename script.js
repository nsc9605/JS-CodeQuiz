// Define elements
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timeCount = document.querySelector(".timer");
const timeLine = document.querySelector(".header .time_line");
const timer = document.getElementById("timer");
// const progress = document.getElementById('progress');
const scoreContainer = document.getElementById("score-container");
const rulesContainer = document.querySelector(".rules-container");
const scoreCounter = document.getElementById("count");
const showHighScores = document.getElementById("highscores-btn");

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];
let shuffledQuestions, currentQuestionIndex;
const startingMinutes = 2;
let time = startingMinutes * 60;
let count = 0;
let timeLeft = [];

// Which way to set timer for countdown???
function startTimer() {
  counter = setInterval(timer, 1000);
  function timer() {
    timeCount.textContent = time;
    time--;
    if (time < 9) {
      let addZero = timeCount.textContent;
      timeCount.textContent = "0" + addZero;
    }
    if (time < 0) {
      clearInterval(counter);
      timeCount.textContent = "00";
    }
  }
}

// HIDE INSTRUCTIONS CONTAINER WHEN START BUTTON IS CLICKED

// let startButton = document.querySelector('start-btn');
// let rulesContainer = document.querySelector('rules');

// There are 3 Event Listeners
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
highScoresButton.addEventListener('click', showHighScores);


function startGame() {
  startButton.classList.add("hide");
  rulesContainer.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  startTimer();
  setNextQuestion();
  // renderCounter();
}

function setNextQuestion() {
  resetState();
  showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
  questionElement.innerText = question.question;
  question.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.classList.add("btn");
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
    answerButtonsElement.appendChild(button);
  });
}

// ADD LOCAL STORAGE TO HOLD SCORES

function resetState() {
  clearStatusClass(document.body);
  nextButton.classList.add("hide");
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild);
  }
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const correct = selectedButton.dataset.correct;
  if (correct === "true") {
    count++;
  }
  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    endGame();
    // startButton.innerText = 'Restart'; // bring used to container with high scores and option to restart
    startButton.classList.remove("hide");
  }
}

function endGame() {
  hideQuestionsContainer(document.body);
  nextButton.classList.add("hide");
}

// // checkAnswer(event) {
//   console.log(questions[currentQuestion].correctAnswer===event.target.id);
//   if (questions[currentQuestion].correctAnswer===event.target.id){
//     currentQuestion++;
//     if (currentQuestion < questions.length){
//       displayQuestion()
//     }
//     else{
//       showHighScores();
//     }
//   }


[{
  initials: "DJK",
  score: 5
}]

function showHighScores(){}

// function renderCounter(){
//   if(count <= time){

//   count++;
//   } else {
//   count = 0;

//   }
// }

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    // count++;
    element.classList.add("correct");

    scoreCounter.textContent = count;
  } else {
    element.classList.add("wrong");
    seconds = seconds - 10;
  }
  if (currentQuestion < questions.length) {
    displayQuestion();
  }
    else {
      timeLeft -= 10
    }
  }


function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

function setup() {
  noc;
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
