// pull in page objects
let highscoreDiv = document.querySelector("#highscore");
let gameTimerEl = document.querySelector("#gameTimer");
let quesTimerEl = document.querySelector("#quesTimer");
let mainEl = document.querySelector("#details");
let timerTab = document.querySelector("#timers");


// let questionEl = document.querySelector("#question")
// let answersListEl = document.querySelector("#answer-list")

// set global variables - how do we move these into localized
var test = false;
var score = 0;
var quiz = {};
var quizType = "";

var gameDuration = 0;
var gameSecElapsed = 0;
var gameInterval;

var questionDuration = 15;
var questionSecElapsed = 0;
var questionInterval;

// draw instruction
init();

// var startButton = document.querySelector("#startQuiz");

// function to display instructions
function init() {
  clearDetails();
  reset();
  // creates Heading element for main page--information/instructions about quiz
  let heading = document.createElement("p");
  heading.setAttribute("id", "main-heading");
  heading.textContent = "This game gives you to test your skills on JavaScript through a timed quiz!";
