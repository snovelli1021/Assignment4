var startBtn = document.querySelector("#startBtn");
var question = document.querySelector(".question");
var options = document.querySelector(".options");
var timerEl = document.getElementById("timer");
var nextBtn =  document.getElementById("#nextBtn");

// creating an array and passing the number, questions, options, and answers
let questionsArr = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "Hypertext Markup Language",
    multChoice: [
      "Hypertext Markdown Language",
      "Hypertext Multiple Language",
      "Hypertext Markup Language",
      "Hypertext Marking Language"
    ]
  },
    {
    numb: 2,
    question: "What does CSS stand for?",
    answer: "Cascading Style Sheet",
    multChoice: [
      "Common Style Sheet",
      "Continuous Style Sheet",
      "Computer Style Sheet",
      "Cascading Style Sheet"
    ]
  },
    {
    numb: 3,
    question: "What is an API?",
    answer: "Application Programming Interface",
    multChoice: [
      "Application Programming Interface",
      "Application Programming Instructions",
      "Application Performance Interface",
      "Application Performance Instructions"
    ]
  },
    {
    numb: 4,
    question: "In simple terms, what is Bootstrap?",
    answer: "A CSS framework for developing web apps",
    multChoice: [
      "A CSS framework for developing web apps",
      "A type of Markup Language used to querry the DOM",
      "An independant app that provides website security",
      "A specific method that can be used with any function"
    ]
  },
    {
    numb: 5,
    question: "What are the four parts that make up the box model?",
    answer: "Content, Padding, Border, Margin",
    multChoice: [
      "Content, Box, Canvas, Border",
      "Content, Padding, Border, Margin",
      "Margin, Border, Padding, Content",
      "Height, Width: Background, Border",
    ]
  },
];

//nextBtn.classList.remove("hidden");

// I want to show the next button only after start quiz button is pressed  
//if (element.matches(".nextBtn")) {
    //var state = element.getAttribute("data-state");
    //if (state === "hidden") {
        //element.dataset.state ='visible'
    //}else{ 
//element.setAttribute("data-state", "hidden")
   // }
//}

startBtn.onclick = ()=>{
    countdown();
    showQuestions();
}


//Coundown timer. Does not reduce time if wrong choice yet.
function countdown() {
    var timeLeft = 60;
    var timeInterval = setInterval(function () {
      if (timeLeft > 1) {
        timerEl.textContent = timeLeft + ' seconds remaining';
        timeLeft--;
      } else if (timeLeft === 1) {
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        timerEl.textContent = '';
        clearInterval(timeInterval);
        displayMessage();
      }
    }, 1000);
}
 

//for loop needs to increment each question by 1 to change Array index [0] to [1]... once next is clicked
function showQuestions() {
    var question = document.querySelector(".question");
    var options = document.querySelector(".options");
    question.innerHTML= questionsArr[0].question
    options.innerHTML= ''
    for (let i = 0; i < questionsArr[0].multChoice.length; i++) {options.innerHTML+= questionsArr[0].multChoice; [i]}
}   

//nextBtn progress through the questions
nextBtn.onclick = ()=>{

}

//showResult function should allow user to input initals and score into local storage