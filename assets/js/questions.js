// List of questions
var questions = [
 {
  question: "How many days makes a week ?",
  A: "10 days",
  B: "14 days",
  C: "5 days",
  D: "7 days",
  correctOption: "D"
 },

 {
  question: "How many players are allowed on a football pitch ?",
  A: "10 players",
  B: "11 players",
  C: "9 players",
  D: "12 players",
  correctOption: "B"
 },

 {
  question: "How manay hours can be found in a day ?",
  A: "30 hours",
  B: "38 hours",
  C: "48 hours",
  D: "24 hours",
  correctOption: "D"
 },

 {
  question: "Which is the longest river in the world ?",
  A: "River Nile",
  B: "Long River",
  C: "River Niger",
  D: "Lake Chad",
  correctOption: "A"
 },

 {
  question: "Which country is the largest in the world ?",
  A: "Russia",
  B: "Canada",
  C: "Africa",
  D: "Egypt",
  correctOption: "A"
 },

 {
  question: "Which of these numbers is an odd number ?",
  A: "Ten",
  B: "Twelve",
  C: "Eight",
  D: "Eleven",
  correctOption: "D"
 },

 {
  question: `"You Can't see me" is a popular saying by`,
  A: "Eminem",
  B: "Bill Gates",
  C: "Chris Brown",
  D: "John Cena",
  correctOption: "D"
 },

 {
  question: "Where is the world tallest building located ?",
  A: "Africa",
  B: "California",
  C: "Dubai",
  D: "Italy",
  correctOption: "C"
 },

 {
  question: "The longest river in the United Kingdom is ?",
  A: "River Severn",
  B: "River Mersey",
  C: "River Trent",
  D: "River Tweed",
  correctOption: "A"
 },

 {
  question: "Which national team won the football World cup in 2018 ?",
  A: "England",
  B: "Brazil",
  C: "Germany",
  D: "France",
  correctOption: "D"
 },

 {
  question: "Los Angeles is also known as ?",
  A: "Angels City",
  B: "Shining city",
  C: "City of Angels",
  D: "Lost Angels",
  correctOption: "C"
 },

]

var start = document.querySelector("#start");
var question = document.querySelector("#question-title");
var choiceA = document.querySelector("#A");
var choiceB = document.querySelector("#B");
var choiceC = document.querySelector("#C");
var choiceD = document.querySelector("#D");
timerElement = document.querySelector("#time");
var scoreEl = document.querySelector("#final-score");
var choicesDiv = document.querySelector("#choices");
var feedBackEl = document.querySelector("#feedback");

var index = 0
var score = 0
var lastQuestion = questions.length - 1;

function displayQuestion() {

 currentQuestion = questions[index];
 question.textContent = currentQuestion.question;
 choiceA.textContent = currentQuestion.A;
 choiceB.textContent = currentQuestion.B;
 choiceC.textContent = currentQuestion.C;
 choiceD.textContent = currentQuestion.D;
}
// get and store user answer 
choicesDiv.addEventListener("click", function (event) {
 if (event.target === choicesDiv) { 
  return;
 }

 checkAnswer(event.target.id);
 console.dir(event.target);
})


function checkAnswer(answer) {
 if (answer == questions[index].correctOption) {
  // answer is correct
  feedBackEl.textContent = "Correct"
  score++;
 } else {
  // answer is wrong
  feedBackEl.textContent = "Wrong";
  timePlenty();
 }

 if (index < lastQuestion) {
  index++;
  displayQuestion();
 } else {
  // end the quiz and show the score
  displayScore();
 }
}

// The startGame function is called when the start button is clicked
function startQuiz() {
 timerCount = 60;
 // Prevents start button from being clicked when round is in progress
 start.disabled = true;
 document.getElementById("start-screen").style.display = "none";
 document.getElementById("questions").style.display = "block";
 displayQuestion();
 startTimer();
}

// The setTimer function starts and stops the timer
function startTimer() {
 // Sets timer
 timer = setInterval(function () {
  if (timerCount > 0 && index < lastQuestion) {
   timerCount--;
  }
  else {
   clearInterval(timer);
   displayScore();
  }

  timerElement.textContent = timerCount;

 }, 1000);
}

function displayScore() {
 document.getElementById("questions").style.display = "none";
 document.getElementById("end-screen").style.display = "block";
 scoreEl.textContent = score;
}
 //funtion for 10 sec plenty for wrong answer
function timePlenty(){
 if (timerCount > 10) {
  timerCount = timerCount - 10;
 }
 else {
  timerCount = 0;
 }
}


// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startQuiz);