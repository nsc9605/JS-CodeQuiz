// Define elements
const startButton = document.getElementById("start-btn");
const nextButton = document.getElementById("next-btn");
const questionContainerElement = document.getElementById("question-container");
const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const timeCount = document.querySelector(".timer");
const timeLine = document.querySelector(".header .time_line");
const scoreContainer = document.getElementById("score-container");
const rulesContainer = document.querySelector(".rules-container");
const scoreCounter = document.getElementById("count");
const showHighScores = document.getElementById("highscores-btn");
const usernameEl = document.getElementById("username");
const scoreEl = document.getElementById("score");


let currentQuestion = {};
let acceptingAnswers = true;
let score = [];
let questionCounter = 0;
let availableQuestions = [];
let shuffledQuestions, currentQuestionIndex;
const startingMinutes = 2;
let time = startingMinutes * 60;
let count = 0;
let timeLeft = [];

// START TIMER FUNCTION
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
      endGame
    }
  }
}


// There are 3 Event Listeners
startButton.addEventListener("click", startGame);
nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  setNextQuestion();
});
showHighScores.addEventListener("click", highScoresButton);

function startGame() {
  startButton.classList.add("hide");
  rulesContainer.classList.add("hide");
  shuffledQuestions = questions.sort(() => Math.random() - 0.5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove("hide");
  startTimer();
  setNextQuestion();
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

    timeLeft -= 10;
  }


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
  } else {
    timeLeft -= 10;
  }

  setStatusClass(document.body, correct);
  Array.from(answerButtonsElement.children).forEach((button) => {
    setStatusClass(button, button.dataset.correct);
  });
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove("hide");
  } else {
    endGame();
    startButton.innerText = 'High Scores';
    showHighScores.classList.remove("hide");
 

  }
}

function endGame() {
  if (currentQuestion.length < timeLeft)
      timer = 00
      nextButton.classList.add("hide");
      showHighScores.classList.remove("hide");
      usernameEl.classList.remove("hide");
      scoreEl.classList.remove("hide");
} 
  // else {
  highScoresButton.classList.add("click", button);
    usernameEl.innerText = "Username:";
    scoresEl.innerText = "Scores:";

  


checkAnswer(event) ;
  console.log(questions[currentQuestion].correctAnswer===event.target.id);
  if (questions[currentQuestion].correctAnswer===event.target.id){
    currentQuestion++;
    if (currentQuestion < questions.length){
      displayQuestion()
    }
   
    }

function setStatusClass(element, correct) {
  clearStatusClass(element);
  if (correct) {
    // count++;
    element.classList.add("correct");

    scoreCounter.textContent = count;
  } else {
    element.classList.add("wrong");
    timeLeft -= 10;
    }
  }
  // if (currentQuestion < questions.length) {
  //   displayQuestion();
  // } else {
  //   timeLeft -= 10;
  // }


function clearStatusClass(element) {
  element.classList.remove("correct");
  element.classList.remove("wrong");
}

// function showHighScores() {
//   console.log(timeLeft)
  // Create/Show Element for user input
  // gather information from input
  // Make a variable that we can use in localStorage 
  // THIS IS FOR AN EXAMPLE AND DOES NOT NECESSARILY WORK
  var highScore = {
      username: document.innerText("Username"),
      score: document.innerText("score"),
  }
  localStorage.setItem(highScore.username, highScore.score)
  




// TO DO: add a function for high scores: a place to write initials, store locally as well as reset after last question
