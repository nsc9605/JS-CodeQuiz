const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')


let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

function setup() {
  noc
}
const startingMinutes = 2;
let time = startingMinutes * 60;

const timerEl = document.getElementById('timer');

setInterval(updateTimer, 1000);

function updateTimer() {
  const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  seconds = seconds < 2 ? '0' + seconds : seconds;

  timerEl.innerHTML = $(minutes); $(seconds);
  time--;
}

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