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


function displayQuestion() {

 for (i = 0; i < questions.length; i++) {
  currentQuestion = questions[i];
  question.textContent = currentQuestion.question;
  A.textContent = currentQuestion.A;
  B.textContent = currentQuestion.B;
  C.textContent = currentQuestion.C;
  D.textContent = currentQuestion.D;

  // get and store user answer 

 }

}

// The startGame function is called when the start button is clicked
function startQuiz() {
 timerCount = 100;
 // Prevents start button from being clicked when round is in progress
 start.disabled = true;
 document.getElementById("start-screen").style.display = "none";
 document.getElementById("questions").style.display = "block";
 displayQuestion()
 startTimer()
}

// The setTimer function starts and stops the timer
function startTimer() {
 // Sets timer
 timer = setInterval(function () {
  timerCount--;
  timerElement.textContent = timerCount;

 }, 1000);
}


// Attach event listener to start button to call startGame function on click
start.addEventListener("click", startQuiz);