var startBtn = document.querySelector("#startBtn");
var question = document.querySelector(".question");
var options = document.querySelector("#options");
var timerEl = document.getElementById("timer");
var nextBtn =  document.getElementById("nextBtn");
var index = 0;
var userScore = 0;
var submitBtn = document.getElementById("submitBtn");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var option4 = document.getElementById("option4");


// creating an array and passing the number, questions, options, and answers
let questionsArr = [
    {
    numb: 1,
    question: "What does HTML stand for?",
    answer: "option3",
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
    answer: "option4",
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
    answer: "option1",
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
    answer: "option1",
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
    answer: "option2",
    multChoice: [
      "Content, Box, Canvas, Border",
      "Content, Padding, Border, Margin",
      "Margin, Border, Padding, Content",
      "Height, Width, Background, Border",
    ]
  },
];

startBtn.onclick = (event)=>{
    event.preventDefault();
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
      }
    }, 1000);
}
 
//Each question is displayed when nextBtn is clicked and each array index is presented as as a button.
function showQuestions() {
    var question = document.querySelector(".question");
    question.innerHTML= questionsArr[index].question
    option1.innerHTML= questionsArr[index].multChoice[0]  
    option2.innerHTML= questionsArr[index].multChoice[1]
    option3.innerHTML= questionsArr[index].multChoice[2]
    option4.innerHTML= questionsArr[index].multChoice[3]
}



//Setting up userPick function
function userPick(event){
    console.log(event.target.id)
    var userPick = event.target.id
    var correctAnswer = questionsArr[index].answer

    if (userPick === correctAnswer) {
        userScore += 1;
        alert("Correct");
        console.log("Correct Answers" + userScore);
    }else{
        alert("Wrong Answer")
    }
    index++
    showQuestions();
    if (index <= 4) {
        console.log(index);
    }else {
       showResult()
    } 
}

//Will allow user to see their score once they enter their initials
function showResult(){
    var userInitals = localStorage.getItem("userInitals");
    
    if(userInitals)
    
    userInitals = initals
}

submitBtn.onclick = (event)=>{
    event.preventDefault();
    var initals = document.querySelector("#initals").value;
    localStorage.setItem("initals", initals)
    console.log(initals);
    showResult();
}

options.addEventListener("click", userPick) 